using Domain.CQRS.Interfaces;
using Domain.DataAccess;
using Domain.DataAccess.Interfaces;
using Domain.Dtos;

namespace Domain.CQRS
{
    public record GetPageQueryBase<T> : AbstractGetPageQuery<T>
        where T : class
    {
        public Dictionary<string, string>? Filters { get; init; }
    }

    public record AbstractGetPageQuery<T> : IQuery<DataPage<T>>, IPage
        where T : class
    {
        public int PageSize { get; init; }
        public int PageNumber { get; init; }
        public SortingDto? Sorter { get; init; }
    }
}
