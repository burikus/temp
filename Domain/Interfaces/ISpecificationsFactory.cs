using Domain.DataAccess;
using Domain.DataAccess.Specifications;
using Domain.Dtos;

namespace Domain.Interfaces
{
    public interface ISpecificationsFactory
    {
        SortingSpecification<TEntity, object> CreateSortingSpecs<TEntity>(SortingDto sorter)
            where TEntity : EntityBase;

        Specification<TEntity> CreateFilterSpecification<TEntity>(string predicateString)
            where TEntity : EntityBase;
    }
}
