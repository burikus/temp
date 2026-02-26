using Domain.DataAccess.Specifications;
using Domain.Interfaces.Repositories;

using IdentityService.DataAccess.EntityFramework;

using Microsoft.EntityFrameworkCore;

namespace IdentityService.DataAccess
{
    public class WriteonlyRepository<TEntity> : IWriteonlyRepository<TEntity>
        where TEntity : class
    {
        private readonly DbSet<TEntity> _entitySet;

        public WriteonlyRepository(IdentityContext context)
        {
            _entitySet = context.Set<TEntity>();
        }

        public async Task<TEntity> Add(TEntity entity)
        {
            var entry = await _entitySet.AddAsync(entity);
            return entry.Entity;
        }

        public virtual async Task AddRange(IEnumerable<TEntity> entities)
        {
            await _entitySet.AddRangeAsync(entities);
        }

        public virtual async Task<TEntity> Update(TEntity entity)
        {
            var result = _entitySet.Update(entity);

            return await Task.FromResult(result.Entity);
        }

        public virtual async Task UpdateRange(IEnumerable<TEntity> entities)
        {
            _entitySet.UpdateRange(entities);
        }

        public Task<TEntity> Delete(TEntity entity)
        {
            var entry = _entitySet.Remove(entity);

            return Task.FromResult(entry.Entity);
        }

        public virtual async Task DeleteRange(TEntity[] entities)
        {
            _entitySet.RemoveRange(entities);
        }

        public Task<bool> Any(Specification<TEntity> spec)
        {
            return _entitySet.AnyAsync(spec.Predicate);
        }

        public Task<TEntity> GetSingle()
        {
            return _entitySet.FirstOrDefaultAsync();
        }

        public Task<TEntity> GetSingle(Specification<TEntity> spec)
        {
            return _entitySet.FirstOrDefaultAsync(spec.Predicate);
        }

        public Task<TEntity> GetSingle(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies)
        {
            var query = GetAllAsQueryable(spec, joinStrategies);

            return query.FirstOrDefaultAsync();
        }

        public Task<TEntity[]> GetByFilter(Specification<TEntity> spec)
        {
            return GetAllAsQueryable(spec).ToArrayAsync();
        }

        public Task<TEntity[]> GetByFilter(Specification<TEntity> spec, bool ignoreQueryFilters)
        {
            var query = GetAllAsQueryable(spec);

            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }

            return query.ToArrayAsync();
        }

        public Task<TEntity[]> GetByFilter(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies)
        {
            var query = GetAllAsQueryable(spec, joinStrategies);

            return query.ToArrayAsync();
        }

        public Task<TEntity[]> GetByFilter(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies, bool ignoreQueryFilters)
        {
            var query = GetAllAsQueryable(spec, joinStrategies);

            if (ignoreQueryFilters)
            {
                query = query.IgnoreQueryFilters();
            }

            return query.ToArrayAsync();
        }

        protected IQueryable<TEntity> GetAllAsQueryable(
            Specification<TEntity>? spec = null,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies = null)
        {
            var query = _entitySet.AsQueryable().AsNoTracking();

            if (spec != null)
            {
                query = query.Where(spec.Predicate);
            }

            return IncludeStrategies(query, joinStrategies);
        }

        private static IQueryable<TEntity> IncludeStrategies(
            IQueryable<TEntity> query,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies)
        {
            if (joinStrategies != null)
            {
                query = joinStrategies.Aggregate(query, (current, joinStrategy)
                    => current.Include(joinStrategy.JoinStrategyString));
            }

            return query;
        }
    }
}
