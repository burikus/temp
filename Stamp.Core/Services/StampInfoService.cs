using Domain.Core;
using Domain.Dtos;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models;
using Stamp.Core.Models.StampInfos;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class StampInfoService : IStampInfoService
    {
        private readonly IStampInfoQuery _stampInfoQuery;
        private readonly IStampInfoRepository _stampInfoRepository;

        public StampInfoService(IStampInfoQuery stampInfoQuery, IStampInfoRepository stampInfoRepository)
        {
            _stampInfoQuery = SystemObjects.RequireNotNull(stampInfoQuery, nameof(stampInfoQuery));
            _stampInfoRepository = SystemObjects.RequireNotNull(stampInfoRepository, nameof(stampInfoRepository));
        }

        public async Task<Result<StampInfosResponseModel>> AllStampInfosAsync(PageModel page)
        {
            var result = await _stampInfoQuery.AllStampInfosAsync(new PageDto { PageNumber = page.PageNumber, PageSize = page.PageSize });

            return Result<StampInfosResponseModel>.Ok(new StampInfosGetConverter().From(result));
        }

        public async Task<Result<string>> UpdateStampInfosAsync(UpdateStampInfosModel model)
        {
            var stampInfos = await _stampInfoRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!stampInfos.HasAny())
                return Result<string>.BadRequest("Информация о фото для обновления не найдена.");

            foreach (var stampInfo in stampInfos)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == stampInfo.Id);

                if (current != null)
                {
                    stampInfo.Description = current.Description ?? stampInfo.Description;
                    stampInfo.IssueDate = current.IssueDate ?? stampInfo.IssueDate;
                    stampInfo.Color = current.Color ?? stampInfo.Color;
                    stampInfo.Background = current.Background ?? stampInfo.Background;
                    stampInfo.IsUV = current.IsUV ?? stampInfo.IsUV;
                    stampInfo.IsForm2 = current.IsForm2 ?? stampInfo.IsForm2;
                    stampInfo.Size = current.Size ?? stampInfo.Size;
                    stampInfo.PrintedCopies = current.PrintedCopies ?? stampInfo.PrintedCopies;
                    stampInfo.Designer = current.Designer ?? stampInfo.Designer;
                    stampInfo.LinkToCatalogEmitter = current.LinkToCatalogEmitter ?? stampInfo.LinkToCatalogEmitter;
                    stampInfo.IsAdditional = current.IsAdditional ?? stampInfo.IsAdditional;
                    stampInfo.IsDefect = current.IsDefect ?? stampInfo.IsDefect;
                    stampInfo.IsKindOf = current.IsKindOf ?? stampInfo.IsKindOf;
                    stampInfo.PaperId = current.PaperId ?? stampInfo.PaperId;
                    stampInfo.PerforationId = current.PerforationId ?? stampInfo.PerforationId;
                    stampInfo.PrintTypeId = current.PrintTypeId ?? stampInfo.PrintTypeId;
                    stampInfo.RasterId = current.RasterId ?? stampInfo.RasterId;
                    stampInfo.StampSeriesId = current.StampSeriesId ?? stampInfo.StampSeriesId;
                    stampInfo.ThemeId = current.ThemeId ?? stampInfo.ThemeId;
                    stampInfo.WatermarkId = current.WatermarkId ?? stampInfo.WatermarkId;
                    stampInfo.Position = current.Position ?? stampInfo.Position;
                    stampInfo.SubMenuId = current.SubMenuId ?? stampInfo.SubMenuId;
                    stampInfo.SubMenuPosition = current.SubMenuPosition ?? stampInfo.SubMenuPosition;
                }
            }

            await _stampInfoRepository.UpdateRangeAsync(stampInfos);

            return Result<string>.Ok("Информация о фото обновлена.");
        }
    }
}
