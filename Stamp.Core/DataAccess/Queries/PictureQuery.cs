using Domain.Dtos;
using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class PictureQuery : IPictureQuery
    {
        private readonly IQueryable<Picture> _pictures;
        private readonly StampContext _stampsContext;

        public PictureQuery(StampContext stampsContext)
        {
            if (stampsContext == null)
            {
                throw new ArgumentNullException(nameof(stampsContext));
            }
            _stampsContext = stampsContext;
            _pictures = stampsContext.Picture.AsNoTracking();
        }

        public Task<PictureProjection[]> AllPicturesPagedAsync(PageDto page)
        {
            return _pictures
                .Include(x => x.Country)
                .Include(x => x.StampType)
                .Include(x => x.StampCatalogs).ThenInclude(x => x.Catalog)
                .Include(x => x.StampInfo).ThenInclude(x => x.Paper)
                .Include(x => x.StampInfo).ThenInclude(x => x.Perforation)
                .Include(x => x.StampInfo).ThenInclude(x => x.PrintType)
                .Include(x => x.StampInfo).ThenInclude(x => x.Raster)
                .Include(x => x.StampInfo).ThenInclude(x => x.StampSeries)
                .Include(x => x.StampInfo).ThenInclude(x => x.Watermark)
                .Select(x =>
                    new PictureProjection
                    {
                        Id = x.Id,
                        ImageFile = x.ImageFile,
                        Name = x.Name,
                        Type = x.Type,
                        Size = x.Size,
                        ImageHeight = x.ImageHeight,
                        ImageWidth = x.ImageWidth,
                        Country = new CountryProjection(x.Country.Id, x.Country.Code, x.Country.Description),
                        StampType = new StampTypeProjection(x.StampType.Id, x.StampType.StampCode, x.StampType.Description, x.StampType.Horizontal, x.StampType.Vertical),
                        StampCatalogs = x.StampCatalogs.Select(y => new StampCatalogProjection(y.Id, y.CatalogNumber, y.CatalogId, new CatalogProjection(y.Catalog.Id, y.Catalog.Code, y.Catalog.Description))).ToArray(),
                        StampInfo = new StampInfoProjection
                        {
                            Id = x.StampInfo.Id,
                            Description = x.StampInfo.Description,
                            IssueDate = x.StampInfo.IssueDate,
                            Color = x.StampInfo.Color,
                            Background = x.StampInfo.Background,
                            IsUV = x.StampInfo.IsUV,
                            IsForm2 = x.StampInfo.IsForm2,
                            Size = x.StampInfo.Size,
                            PrintedCopies = x.StampInfo.PrintedCopies,
                            Designer = x.StampInfo.Designer,
                            LinkToCatalogEmitter = x.StampInfo.LinkToCatalogEmitter,
                            IsKindOf = x.StampInfo.IsKindOf,
                            IsDefect = x.StampInfo.IsDefect,
                            IsAdditional = x.StampInfo.IsAdditional,
                            Paper = x.StampInfo.Paper != null ? new PaperProjection(x.StampInfo.Paper.Id, x.StampInfo.Paper.Code, x.StampInfo.Paper.Description, x.StampInfo.Paper.ImageFile) : null,
                            Perforation = x.StampInfo.Perforation != null ? new PerforationProjection(x.StampInfo.Perforation.Id, x.StampInfo.Perforation.Code, x.StampInfo.Perforation.Description, x.StampInfo.Perforation.ImageFile) : null,
                            PrintType = x.StampInfo.PrintType != null ? new PrintTypeProjection(x.StampInfo.PrintType.Id, x.StampInfo.PrintType.Code, x.StampInfo.PrintType.Description, x.StampInfo.PrintType.ImageFile) : null,
                            Raster = x.StampInfo.Raster != null ? new RasterProjection(x.StampInfo.Raster.Id, x.StampInfo.Raster.Code, x.StampInfo.Raster.Description, x.StampInfo.Raster.ImageFile) : null,
                            StampSeries = x.StampInfo.StampSeries != null ? new StampSeriesProjection(x.StampInfo.StampSeries.Id, x.StampInfo.StampSeries.Text, x.StampInfo.StampSeries.Date) : null,
                            Theme = x.StampInfo.Theme != null ? new ThemeProjection(x.StampInfo.Theme.Id, x.StampInfo.Theme.Code, x.StampInfo.Theme.Description,
                                    x.StampInfo.Theme.SubTheme != null ? new SubThemeProjection(x.StampInfo.Theme!.SubTheme!.Id, x.StampInfo.Theme!.SubTheme!.Code, x.StampInfo.Theme!.SubTheme!.Description) : null) : null,
                            Watermark = x.StampInfo.Watermark != null ? new WatermarkProjection(x.StampInfo.Watermark.Id, x.StampInfo.Watermark.Code, x.StampInfo.Watermark.Description, x.StampInfo.Watermark.ImageFile) : null
                        }
                    })
                .OrderBy(x => x.StampInfo.IssueDate)
                .Page(page.PageNumber, page.PageSize)
                .ToArrayAsync();
        }

        public Task<PictureProjection[]> PicturesFilteredAsync(PictureFilter filter)
        {
            return PictureQueryBuilder
                .From(_stampsContext)
                .ByIds(filter.Ids)
                .ByStampTypeIds(filter.StampTypeIds)
                .ByCountryIds(filter.CountryIds)
                .ByNames(filter.Names)
                .ByIssueYears(filter.IssueYears)
                .ByStampCodes(filter.StampCodes)
                .BySubMenuId(filter.SubMenuId)
                .Build()
                .Include(x => x.Country)
                .Include(x => x.StampType)
                .Include(x => x.StampCatalogs).ThenInclude(x => x.Catalog)
                .Include(x => x.StampInfo).ThenInclude(x => x.Paper)
                .Include(x => x.StampInfo).ThenInclude(x => x.Perforation)
                .Include(x => x.StampInfo).ThenInclude(x => x.PrintType)
                .Include(x => x.StampInfo).ThenInclude(x => x.Raster)
                .Include(x => x.StampInfo).ThenInclude(x => x.StampSeries)
                .Include(x => x.StampInfo).ThenInclude(x => x.Watermark)
                .Select(x =>
                    new PictureProjection
                    {
                        Id = x.Id,
                        ImageFile = x.ImageFile,
                        Name = x.Name,
                        Type = x.Type,
                        Size = x.Size,
                        ImageHeight = x.ImageHeight,
                        ImageWidth = x.ImageWidth,
                        Country = new CountryProjection(x.Country.Id, x.Country.Code, x.Country.Description),
                        StampType = new StampTypeProjection(x.StampType.Id, x.StampType.StampCode, x.StampType.Description, x.StampType.Horizontal, x.StampType.Vertical),
                        StampCatalogs = x.StampCatalogs.Select(y => new StampCatalogProjection(y.Id, y.CatalogNumber, y.CatalogId, new CatalogProjection(y.Catalog.Id, y.Catalog.Code, y.Catalog.Description))).ToArray(),
                        StampInfo = new StampInfoProjection
                        {
                            Id = x.StampInfo.Id,
                            Description = x.StampInfo.Description,
                            IssueDate = x.StampInfo.IssueDate,
                            Color = x.StampInfo.Color,
                            Background = x.StampInfo.Background,
                            IsUV = x.StampInfo.IsUV,
                            IsForm2 = x.StampInfo.IsForm2,
                            Size = x.StampInfo.Size,
                            PrintedCopies = x.StampInfo.PrintedCopies,
                            Designer = x.StampInfo.Designer,
                            LinkToCatalogEmitter = x.StampInfo.LinkToCatalogEmitter,
                            IsKindOf = x.StampInfo.IsKindOf,
                            IsDefect = x.StampInfo.IsDefect,
                            IsAdditional = x.StampInfo.IsAdditional,
                            Paper = x.StampInfo.Paper != null ? new PaperProjection(x.StampInfo.Paper.Id, x.StampInfo.Paper.Code, x.StampInfo.Paper.Description, x.StampInfo.Paper.ImageFile) : null,
                            Perforation = x.StampInfo.Perforation != null ? new PerforationProjection(x.StampInfo.Perforation.Id, x.StampInfo.Perforation.Code, x.StampInfo.Perforation.Description, x.StampInfo.Perforation.ImageFile) : null,
                            PrintType = x.StampInfo.PrintType != null ? new PrintTypeProjection(x.StampInfo.PrintType.Id, x.StampInfo.PrintType.Code, x.StampInfo.PrintType.Description, x.StampInfo.PrintType.ImageFile) : null,
                            Raster = x.StampInfo.Raster != null ? new RasterProjection(x.StampInfo.Raster.Id, x.StampInfo.Raster.Code, x.StampInfo.Raster.Description, x.StampInfo.Raster.ImageFile) : null,
                            StampSeries = x.StampInfo.StampSeries != null ? new StampSeriesProjection(x.StampInfo.StampSeries.Id, x.StampInfo.StampSeries.Text, x.StampInfo.StampSeries.Date) : null,
                            Theme = x.StampInfo.Theme != null ? new ThemeProjection(x.StampInfo.Theme.Id, x.StampInfo.Theme.Code, x.StampInfo.Theme.Description,
                                    x.StampInfo.Theme.SubTheme != null ? new SubThemeProjection(x.StampInfo.Theme!.SubTheme!.Id, x.StampInfo.Theme!.SubTheme!.Code, x.StampInfo.Theme!.SubTheme!.Description) : null) : null,
                            Watermark = x.StampInfo.Watermark != null ? new WatermarkProjection(x.StampInfo.Watermark.Id, x.StampInfo.Watermark.Code, x.StampInfo.Watermark.Description, x.StampInfo.Watermark.ImageFile) : null
                        }
                    })
                .OrderBy(x => x.StampInfo.IssueDate)
                .ToArrayAsync();
        }
    }
}
