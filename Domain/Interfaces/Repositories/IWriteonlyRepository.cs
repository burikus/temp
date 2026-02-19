using Domain.DataAccess.Specifications;

namespace Domain.Interfaces.Repositories
{
    public interface IWriteonlyRepository<TEntity> where TEntity : class
    {
        Task<TEntity> Add(TEntity entity);
        Task AddRange(IEnumerable<TEntity> entities);
        Task<TEntity> Update(TEntity entity);
        Task UpdateRange(IEnumerable<TEntity> entities);
        Task<TEntity> Delete(TEntity entity);
        Task DeleteRange(TEntity[] entities);

        Task<bool> Any(Specification<TEntity> spec);
        Task<TEntity> GetSingle();
        Task<TEntity?> GetSingle(Specification<TEntity> spec);
        Task<TEntity?> GetSingle(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies);
        Task<TEntity[]> GetByFilter(Specification<TEntity> spec);
        Task<TEntity[]> GetByFilter(Specification<TEntity> spec, bool ignoreQueryFilters);
        Task<TEntity[]> GetByFilter(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies);
        Task<TEntity[]> GetByFilter(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies, bool ignoreQueryFilters);
    }
}
