using Blog.Core.Models.MicroBlogs;
using Blog.Core.ServiceProvider;
using Blog.Core.Services.Contracts;
using Blog.Domain.DataAccess.Entities;
using Blog.Domain.DataAccess.Queries;
using Blog.Domain.DataAccess.Queries.Contracts;
using Blog.Domain.DataAccess.Repositories;

using Domain.Core;
using Domain.Extensions;
using Domain.Utils;

namespace Blog.Core.Services
{
    public class MicroBlogService : IMicroBlogService
    {
        private readonly IMicroBlogQuery _microBlogQuery;
        private readonly IMicroBlogRepository _microBlogRepository;

        public MicroBlogService(IMicroBlogQuery microBlogQuery, IMicroBlogRepository microBlogRepository)
        {
            _microBlogQuery = SystemObjects.RequireNotNull(microBlogQuery, nameof(microBlogQuery));
            _microBlogRepository = SystemObjects.RequireNotNull(microBlogRepository, nameof(microBlogRepository));
        }

        public async Task<Result<MicroBlogsResponseModel>> MicroBlogByFilterAsync(bool isAdmin, MicroBlogsGetModel args)
        {
            var result = await _microBlogQuery.MicroBlogsByFilterAsync(new MicroBlogFilter(isAdmin, args.Ids));

            return Result<MicroBlogsResponseModel>.Ok(new MicroBlogsGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateMicroBlogsAsync(MicroBlogsUpdateModel model)
        {
            var blogs = await _microBlogRepository.GetByIdsAsync(model.Items.Select(x => x.Id).ToArray());
            if (!blogs.HasAny())
                return Result<string>.BadRequest("Блоги для обновления не найден.");

            foreach (var blog in blogs)
            {
                var current = model.Items.FirstOrDefault(x => x.Id == blog.Id);
                if (current == null)
                    continue;

                blog.IsActive = current.IsActive;
                blog.MenuId = current.MenuId;
                blog.MenuPosition = current.MenuPosition;

                foreach (var info in blog.Infos)
                {
                    var cur = current!.Infos?.FirstOrDefault(x => x.Id == info.Id);
                    if (current == null)
                        continue;

                    info.IsActive = cur.IsActive;
                    info.Text = cur.Text;
                    info.BlogId = cur.BlogId;
                    info.TextFormattingId = cur.TextFormattingId;
                }
            }

            await _microBlogRepository.UpdateMicroBlogsAsync(blogs);

            return Result<string>.Ok("Блоги обновлен.");
        }

        public async Task<Result<string>> AddMicroBlogsAsync(MicroBlogsCreateModel model)
        {
            var newBlogs = model.Items
                .Select(x =>
                new MicroBlog
                {
                    Id = Guid.NewGuid(),
                    IsActive = x.IsActive,
                    MenuId = x.MenuId,
                    MenuPosition = x.MenuPosition,
                    Infos = x.Infos
                        .Select(y =>
                        new Info
                        {
                            Id = Guid.NewGuid(),
                            Text = y.Text,
                            IsActive = y.IsActive,
                            BlogId = y.BlogId,
                            TextFormattingId = y.TextFormattingId
                        })
                        .ToArray()
                })
                .ToArray();

            await _microBlogRepository.AddMicroBlogsAsync(newBlogs);

            return Result<string>.Ok("Блоги добавлены.");
        }

        public async Task<Result<string>> DeleteMicroBlogsAsync(MicroBlogsDeleteModel model)
        {
            var blogs = await _microBlogRepository.GetByIdsAsync(model.Ids);
            if (!blogs.HasAny())
                return Result<string>.BadRequest("Блоги не существуют.");

            await _microBlogRepository.RemoveMicroBlogsAsync(blogs);

            return Result<string>.Ok("Блоги удалены.");
        }
    }
}
