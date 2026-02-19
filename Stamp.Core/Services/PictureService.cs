using Domain.Core;
using Domain.Dtos;
using Domain.Extensions;
using Domain.Utils;

using Stamp.Core.Models;
using Stamp.Core.Models.Pictures;
using Stamp.Core.Models.StampCatalogs;
using Stamp.Core.ServiceProvider;
using Stamp.Core.Services.Contracts;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;
using Stamp.Domain.DataAccess.Repositories;

namespace Stamp.Core.Services
{
    public class PictureService : IPictureService
    {
        private readonly IPictureQuery _pictureQuery;
        private readonly IPictureRepository _pictureRepository;

        public PictureService(IPictureQuery pictureQuery, IPictureRepository pictureRepository)
        {
            _pictureQuery = SystemObjects.RequireNotNull(pictureQuery, nameof(pictureQuery));
            _pictureRepository = SystemObjects.RequireNotNull(pictureRepository, nameof(pictureRepository));
        }

        public async Task<Result<PicturesResponseModel>> AllPicturesPagedAsync(PageModel page)
        {
            var result = await _pictureQuery.AllPicturesPagedAsync(new PageDto { PageNumber = page.PageNumber, PageSize = page.PageSize });

            return Result<PicturesResponseModel>.Ok(new PicturesGetConverter().From(result));
        }

        public async Task<Result<PicturesResponseModel>> FilteredPicturesAsync(GetFilteredPicturesModel model)
        {
            var result = await _pictureQuery.PicturesFilteredAsync(new PictureFilter(IssueYears: model.IssueYears, StampCodes: model.StampCodes, SubMenuId: model.SubMenuId));

            return Result<PicturesResponseModel>.Ok(new PicturesGetConverter().From(result));
        }

        public async Task<Result<string>> UpdatePicturesAsync(UpdatePicturesModel model)
        {
            var pictures = await _pictureRepository.GetByIdsAsync(model.Data.Select(x => x.Id).ToArray());
            if (!pictures.HasAny())
                return Result<string>.BadRequest("Фото для обновления не найдены.");

            foreach (var picture in pictures)
            {
                var current = model.Data.FirstOrDefault(x => x.Id == picture.Id);

                if (current != null)
                {
                    picture.Name = current.Name ?? picture.Name;
                    picture.StampTypeId = current.StampTypeId ?? picture.StampTypeId;
                    picture.CountryId = current.CountryId ?? picture.CountryId;
                    picture.ImageFile = !string.IsNullOrEmpty(current.ImageFile) ? Convert.FromBase64String(current.ImageFile) : picture.ImageFile;
                    picture.ImageHeight = current.ImageHeight ?? picture.ImageHeight;
                    picture.ImageWidth = current.ImageWidth ?? picture.ImageWidth;
                    picture.Size = current.Size ?? picture.Size;
                    picture.Type = current.Type ?? picture.Type;

                    if (current.StampInfo != null)
                    {
                        picture.StampInfo.Description = current.StampInfo.Description ?? picture.StampInfo.Description;
                        picture.StampInfo.IssueDate = current.StampInfo.IssueDate ?? picture.StampInfo.IssueDate;
                        picture.StampInfo.Color = current.StampInfo.Color ?? picture.StampInfo.Color;
                        picture.StampInfo.Background = current.StampInfo.Background ?? picture.StampInfo.Background;
                        picture.StampInfo.IsUV = current.StampInfo.IsUV ?? picture.StampInfo.IsUV;
                        picture.StampInfo.IsForm2 = current.StampInfo.IsForm2 ?? picture.StampInfo.IsForm2;
                        picture.StampInfo.Size = current.StampInfo.Size ?? picture.StampInfo.Size;
                        picture.StampInfo.PrintedCopies = current.StampInfo.PrintedCopies ?? picture.StampInfo.PrintedCopies;
                        picture.StampInfo.Designer = current.StampInfo.Designer ?? picture.StampInfo.Designer;
                        picture.StampInfo.LinkToCatalogEmitter = current.StampInfo.LinkToCatalogEmitter ?? picture.StampInfo.LinkToCatalogEmitter;
                        picture.StampInfo.IsAdditional = current.StampInfo.IsAdditional ?? picture.StampInfo.IsAdditional;
                        picture.StampInfo.IsDefect = current.StampInfo.IsDefect ?? picture.StampInfo.IsDefect;
                        picture.StampInfo.IsKindOf = current.StampInfo.IsKindOf ?? picture.StampInfo.IsKindOf;
                        picture.StampInfo.PaperId = current.StampInfo.PaperId ?? picture.StampInfo.PaperId;
                        picture.StampInfo.PerforationId = current.StampInfo.PerforationId ?? picture.StampInfo.PerforationId;
                        picture.StampInfo.PrintTypeId = current.StampInfo.PrintTypeId ?? picture.StampInfo.PrintTypeId;
                        picture.StampInfo.RasterId = current.StampInfo.RasterId ?? picture.StampInfo.RasterId;
                        picture.StampInfo.StampSeriesId = current.StampInfo.StampSeriesId ?? picture.StampInfo.StampSeriesId;
                        picture.StampInfo.ThemeId = current.StampInfo.ThemeId ?? picture.StampInfo.ThemeId;
                        picture.StampInfo.WatermarkId = current.StampInfo.WatermarkId ?? picture.StampInfo.WatermarkId;
                        picture.StampInfo.Position = current.StampInfo.Position ?? picture.StampInfo.Position;
                        picture.StampInfo.SubMenuId = current.StampInfo.SubMenuId ?? picture.StampInfo.SubMenuId;
                        picture.StampInfo.SubMenuPosition = picture.StampInfo.SubMenuPosition ?? picture.StampInfo.SubMenuPosition;
                    }

                    if (current.StampCatalogs.HasAny())
                    {
                        foreach (var catalog in current.StampCatalogs)
                        {
                            var record = picture.StampCatalogs.Where(x => x.Id == catalog.Id).FirstOrDefault();
                            if (record != null)
                            {
                                record.CatalogNumber = catalog.CatalogNumber;
                                record.CatalogId = catalog.CatalogId;
                            }
                        }
                    }
                }
            }

            await _pictureRepository.UpdateRangeAsync(pictures);

            return Result<string>.Ok("Фото обновлены.");
        }

        public async Task<Result<string>> AddPicturesAsync(CreatePicturesModel model)
        {
            if (!model.Data.HasAny())
                return Result<string>.BadRequest("Фото уже существуют.");

            foreach (var item in model.Data)
            {
                var res = await _pictureQuery.PicturesFilteredAsync(new PictureFilter(Names: [item.Name], StampTypeIds: [item.StampTypeId], CountryIds: [item.CountryId]));
                if (!res.HasAny() || res.Where(x => x.StampCatalogs.HasAny()).SelectMany(x => x.StampCatalogs.Select(y => new CreateStampCatalogModel(y.CatalogNumber, y.CatalogId))).Any(x => item.StampCatalogs.Contains(x)))
                    return Result<string>.BadRequest("Фото уже существуют.");
            }

            var pictureId = Guid.NewGuid();
            var newPictures = model.Data.Select(x =>
                new Picture
                {
                    Id = pictureId,
                    ImageFile = !string.IsNullOrEmpty(x.ImageFile) ? Convert.FromBase64String(x.ImageFile) : null,
                    Name = x.Name,
                    Type = x.Type,
                    Size = x.Size,
                    ImageHeight = x.ImageHeight,
                    ImageWidth = x.ImageWidth,
                    CountryId = x.CountryId,
                    StampTypeId = x.StampTypeId,
                    StampInfo = new StampInfo
                    {
                        Id = Guid.NewGuid(),
                        Description = x.StampInfo.Description,
                        IssueDate = x.StampInfo.IssueDate,
                        Color = x.StampInfo.Color,
                        Background = x.StampInfo.Background,
                        IsUV = x.StampInfo.IsUV,
                        IsForm2 = x.StampInfo.IsForm2,
                        Size = x.StampInfo.Size,
                        Position = x.StampInfo.Position,
                        SubMenuId = x.StampInfo.SubMenuId,
                        SubMenuPosition = x.StampInfo.SubMenuPosition,
                        PrintedCopies = x.StampInfo.PrintedCopies,
                        Designer = x.StampInfo.Designer,
                        LinkToCatalogEmitter = x.StampInfo.LinkToCatalogEmitter,
                        IsAdditional = x.StampInfo.IsAdditional,
                        IsDefect = x.StampInfo.IsDefect,
                        IsKindOf = x.StampInfo.IsKindOf,
                        PaperId = x.StampInfo.PaperId,
                        PerforationId = x.StampInfo.PaperId,
                        PrintTypeId = x.StampInfo.PrintTypeId,
                        RasterId = x.StampInfo.RasterId,
                        StampSeriesId = x.StampInfo.StampSeriesId,
                        ThemeId = x.StampInfo.ThemeId,
                        WatermarkId = x.StampInfo.WatermarkId,
                        PictureId = pictureId
                    },
                    StampCatalogs = x.StampCatalogs
                            .Select(y => new StampCatalog { Id = Guid.NewGuid(), CatalogId = y.CatalogId, CatalogNumber = y.CatalogNumber }).ToArray()
                })
                .ToArray();

            await _pictureRepository.CreateRangeAsync(newPictures);

            return Result<string>.Ok("Фото добавлены.");
        }

        public async Task<Result<string>> DeletePicturesAsync(DeletePicturesModel model)
        {
            var pictures = await _pictureRepository.GetByIdsAsync(model.Ids);
            if (!pictures.HasAny())
                return Result<string>.BadRequest("Фото не существуют.");

            await _pictureRepository.DeleteRangeAsync(pictures);

            return Result<string>.Ok("Фото удалены.");
        }
    }
}
