using Domain.Core;
using Domain.DataAccess;
using Domain.DataAccess.Interfaces;
using Domain.DataAccess.Specifications;
using Domain.Interfaces.Repositories;

using IdentityService.DataAccess.EntityFramework;

using Microsoft.EntityFrameworkCore;

namespace IdentityService.DataAccess
{
    public class ReadonlyRepository<TEntity> : IReadonlyRepository<TEntity>
		where TEntity : class
	{
		protected readonly DbSet<TEntity> EntityDbSet;
		protected readonly IQueryable<TEntity> EntitySet;

		public ReadonlyRepository(IdentityContext dataContext)
		{
			if (dataContext == null) throw new ArgumentNullException(nameof(dataContext));

			EntitySet = dataContext.Set<TEntity>().AsNoTracking();
			EntityDbSet = dataContext.Set<TEntity>();
		}

		public Task<TEntity[]> GetAll(bool ignoreQueryFilters)
		{
			var query = GetAllAsQueryable();

			if (ignoreQueryFilters)
			{
				query = query.IgnoreQueryFilters();
			}

			return query.ToArrayAsync();
		}

		public Task<TEntity[]> GetAll<TSort>(
			SortingSpecification<TEntity, TSort> orderBySpec)
		{
			var query = GetAllAsQueryable();

			var sortedQuery = orderBySpec.SortType == SortType.Ascending
				? query.OrderBy(orderBySpec.KeySelector)
				: query.OrderByDescending(orderBySpec.KeySelector);

			return sortedQuery.ToArrayAsync();
		}

		public Task<TEntity[]> GetAll<TSort>(
			SortingSpecification<TEntity, TSort> orderBySpec,
			bool ignoreQueryFilters)
		{
			var query = GetAllAsQueryable();

			if (ignoreQueryFilters)
			{
				query = query.IgnoreQueryFilters();
			}

			var sortedQuery = orderBySpec.SortType == SortType.Ascending
				? query.OrderBy(orderBySpec.KeySelector)
				: query.OrderByDescending(orderBySpec.KeySelector);

			return sortedQuery.ToArrayAsync();
		}

		public Task<TEntity[]> GetAll<TSort>(
		   SortingSpecification<TEntity, TSort> orderBySpec,
		   IEnumerable<JoinStrategy<TEntity>> joinStrategies,
		   bool ignoreQueryFilters)
		{
			var query = GetAllAsQueryable(null, joinStrategies);

			if (ignoreQueryFilters)
			{
				query = query.IgnoreQueryFilters();
			}

			var sortedQuery = orderBySpec.SortType == SortType.Ascending
				? query.OrderBy(orderBySpec.KeySelector)
				: query.OrderByDescending(orderBySpec.KeySelector);

			return sortedQuery.ToArrayAsync();
		}

		public Task<TResult[]> GetAll<TResult>(
			SelectingSpecification<TEntity, TResult> selecting)
		{
			return GetAllAsQueryable()
				.Select(selecting.SelectorExpression)
				.ToArrayAsync();
		}

		public Task<TEntity> GetSingle()
		{
			return EntitySet.FirstOrDefaultAsync();
		}
		public Task<TEntity> GetSingle(
			Specification<TEntity> spec)
		{
			return EntitySet.FirstOrDefaultAsync(spec.Predicate);
		}

		public Task<TEntity> GetSingle(
			Specification<TEntity> spec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies)
		{
			return joinStrategies
				.Aggregate(EntitySet, (current, joinStrategy) => current.Include(joinStrategy.JoinStrategyString))
				.FirstOrDefaultAsync(spec.Predicate);
		}

		public Task<TResult> GetSingle<TResult>(
			Specification<TEntity> spec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			SelectingSpecification<TEntity, TResult> selecting)
		{
			return joinStrategies
				.Aggregate(EntitySet, (current, joinStrategy) => current.Include(joinStrategy.JoinStrategyString))
				.Where(spec.Predicate)
				.Select(selecting.SelectorExpression)
				.FirstOrDefaultAsync();
		}

		public Task<TResult> GetSingle<TResult>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selecting)
		{
			return GetAllAsQueryable(spec)
				.Select(selecting.SelectorExpression)
				.FirstOrDefaultAsync();
		}

		public Task<TResult> GetSingle<TResult, TSort>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selecting,
			SortingSpecification<TResult, TSort> sortingSpec)
		{
			var query = GetAllAsQueryable(spec).Select(selecting.SelectorExpression);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery.FirstOrDefaultAsync();
		}

		public Task<TResult> GetSingle<TResult, TSort>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selecting,
			SortingSpecification<TEntity, TSort> sortingSpec)
		{
			var query = GetAllAsQueryable(spec);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery.Select(selecting.SelectorExpression).FirstOrDefaultAsync();
		}


		public Task<bool> Any(
			Specification<TEntity> spec)
		{
			return EntitySet.AnyAsync(spec.Predicate);
		}

		public Task<bool> Any(
			Specification<TEntity> spec,
			bool ignoreQueryFilters)
		{
			var query = GetAllAsQueryable(spec);

			if (ignoreQueryFilters)
			{
				query = query.IgnoreQueryFilters();
			}

			return query.AnyAsync();
		}


		public Task<TEntity[]> GetByFilter(
			IEnumerable<JoinStrategy<TEntity>> joinStrategies)
		{
			return GetAllAsQueryable(null, joinStrategies).ToArrayAsync();
		}

		public Task<TEntity[]> GetByFilter(
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			bool ignoreQueryFilters)
		{
			var query = GetAllAsQueryable(null, joinStrategies);

			if (ignoreQueryFilters)
			{
				query = query.IgnoreQueryFilters();
			}

			return query.ToArrayAsync();
		}

		public Task<TEntity[]> GetByFilter(
			Specification<TEntity> spec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies)
		{
			var query = GetAllAsQueryable(spec, joinStrategies);

			return query.ToArrayAsync();
		}

		public Task<TEntity[]> GetByFilter(
			Specification<TEntity> spec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			bool ignoreQueryFilters)
		{
			var query = GetAllAsQueryable(spec, joinStrategies);

			if (ignoreQueryFilters)
			{
				query = query.IgnoreQueryFilters();
			}

			return query.ToArrayAsync();
		}

		public Task<TEntity[]> GetByFilter<TSort>(
			Specification<TEntity> spec,
			SortingSpecification<TEntity, TSort> sortingSpec,
			int quantity)
		{
			var query = GetAllAsQueryable(spec);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery.Take(quantity).ToArrayAsync();
		}

		public Task<TEntity[]> GetByFilter<TSort>(
			Specification<TEntity> spec,
			SortingSpecification<TEntity, TSort> sortingSpec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies)
		{
			var query = GetAllAsQueryable(spec, joinStrategies);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery.ToArrayAsync();
		}

		public Task<TResult[]> GetByFilter<TResult>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selectingSpecification)
		{
			return GetAllAsQueryable(spec)
				.Select(selectingSpecification.SelectorExpression)
				.ToArrayAsync();
		}

		public Task<TResult[]> GetByFilter<TResult, TSort>(
			Specification<TEntity> spec,
			SortingSpecification<TEntity, TSort> sortingSpec,
			SelectingSpecification<TEntity, TResult> selectingSpec,
			int quantity)
		{
			var query = GetAllAsQueryable(spec);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery
				.Select(selectingSpec.SelectorExpression)
				.Take(quantity).ToArrayAsync();
		}

		public Task<TResult[]> GetPage<TResult>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selectingSpecification,
			int pageNumber,
			int pageSize)
		{
			return EntitySet.Where(spec.Predicate)
				.Select(selectingSpecification.SelectorExpression)
				.Skip(pageNumber * pageSize)
				.Take(pageSize)
				.ToArrayAsync();
		}

		public async Task<DataPage<TResult>> GetPage<TResult, TSort>(
			Specification<TEntity> spec,
			SortingSpecification<TEntity, TSort>[] sortingSpec,
			SelectingSpecification<TEntity, TResult> selectingSpecification,
			IPage page)
		{
			var query = EntitySet;

			if (sortingSpec.Length != 0)
			{
				var firstSpecification = sortingSpec.First();
				var sortType = firstSpecification.SortType == SortType.Ascending;
				var orderedQuery = sortType
					? query.OrderBy(firstSpecification.KeySelector)
					: query.OrderByDescending(firstSpecification.KeySelector);

				foreach (var sortingSpecification in sortingSpec.Skip(1))
				{
					sortType = sortingSpecification.SortType == SortType.Ascending;
					orderedQuery = sortType
						? orderedQuery.ThenBy(sortingSpecification.KeySelector)
						: orderedQuery.ThenByDescending(sortingSpecification.KeySelector);
				}

				query = orderedQuery;
			}

			query = query.Where(spec.Predicate);

			var count = await query.CountAsync().ConfigureAwait(false);
			var result = await query.Select(selectingSpecification.SelectorExpression)
				.Skip(page.PageNumber * page.PageSize)
				.Take(page.PageSize)
				.ToArrayAsync().ConfigureAwait(false);

			return new DataPage<TResult> { Items = result, TotalCount = count };
		}

		public Task<TResult[]> GetByFilter<TResult, TSort>(
			Specification<TEntity> spec,
			SortingSpecification<TEntity, TSort> sortingSpec,
			SelectingSpecification<TEntity, TResult> selectingSpecification)
		{
			var query = GetAllAsQueryable(spec);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery
				.Select(selectingSpecification.SelectorExpression)
				.ToArrayAsync();
		}

		public Task<TEntity[]> GetByFilter(
			Specification<TEntity> spec)
		{
			return GetAllAsQueryable(spec).ToArrayAsync();
		}

		public Task<TEntity[]> GetByFilter(
			Specification<TEntity> spec,
			bool ignoreQueryFilters)
		{
			var query = GetAllAsQueryable(spec);

			if (ignoreQueryFilters)
			{
				query = query.IgnoreQueryFilters();
			}

			return query.ToArrayAsync();
		}

		public Task<int> CountByFilter(
			Specification<TEntity> spec)
		{
			return GetAllAsQueryable(spec).CountAsync();
		}

		public Task<int> CountByFilter(
			Specification<TEntity> spec,
			bool ignoreQueryFilters)
		{
			var query = GetAllAsQueryable(spec);

			if (ignoreQueryFilters)
			{
				query = query.IgnoreQueryFilters();
			}

			return query.CountAsync();
		}

		public Task<TResult[]> GetByFilter<TResult, TKey>(
			Specification<TEntity> spec,
			GroupingSpecification<TEntity, TKey, TResult> groupingSpec
			) where TResult : class
		{
			return GetAllAsQueryable(spec)
				.GroupBy(groupingSpec.KeySelector, groupingSpec.ResultSelector)
				.ToArrayAsync();
		}

		public Task<TResult[]> GetByFilter<TResult, TKey, TSort>(
			Specification<TEntity>? spec,
			GroupingSpecification<TEntity, TKey, TResult> groupingSpec,
			SortingSpecification<TResult, TSort> sortingSpec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies
			) where TResult : class
		{
			var sortedQuery = GetGroupedOrderedAsQueryable(spec, groupingSpec, sortingSpec, joinStrategies);

			return sortedQuery.ToArrayAsync();
		}

		public Task<TResult[]> GetByFilter<TResult, TSort>(
			Specification<TEntity> spec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			SortingSpecification<TEntity, TSort> sortingSpec,
			SelectingSpecification<TEntity, TResult> selectingSpec
			) where TResult : class
		{
			var query = GetAllAsQueryable(spec, joinStrategies);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery.Select(selectingSpec.SelectorExpression).ToArrayAsync();
		}

		public Task<TEntity[]> GetByFilter<TSort>(
			Specification<TEntity> spec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			SortingSpecification<TEntity, TSort> sortingSpec,
			int quantity)
		{
			var query = GetAllAsQueryable(spec, joinStrategies);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery.Take(quantity).ToArrayAsync();
		}

		public Task<TResult[]> GetByFilter<TResult, TKey, TSort>(
			Specification<TEntity> spec,
			GroupingSpecification<TEntity, TKey, TResult> groupingSpec,
			SortingSpecification<TResult, TSort> sortingSpec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			int quantity
			) where TResult : class
		{
			var sortedQuery = GetGroupedOrderedAsQueryable(spec, groupingSpec, sortingSpec, joinStrategies);

			return sortedQuery.Take(quantity).ToArrayAsync();
		}

		public Task<TResult[]> GetByFilter<TResult>(
			Specification<TEntity> spec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			SelectingSpecification<TEntity, TResult> selecting)
		{
			return joinStrategies
				.Aggregate(EntitySet, (current, joinStrategy) => current.Include(joinStrategy.JoinStrategyString))
				.Where(spec.Predicate)
				.Select(selecting.SelectorExpression).ToArrayAsync();
		}

		public Task<TResult[]> GetByFilterDistinct<TResult>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selectingSpec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies
			) where TResult : class
		{
			return GetAllDistinctAsQueryable(spec, selectingSpec, joinStrategies).ToArrayAsync();
		}

		public Task<int> CountUnique<TSelect>(
			Specification<TEntity> specification,
			SelectingSpecification<TEntity, TSelect> selectField)
		{
			var query = GetAllAsQueryable(specification);

			return query.Select(selectField.SelectorExpression)
				.Distinct()
				.CountAsync();
		}

		public Task<TSelect> Max<TSelect>(
			Specification<TEntity> specification,
			SelectingSpecification<TEntity, TSelect> selectSpec)
		{
			var query = GetAllAsQueryable(specification);

			return query.MaxAsync(selectSpec.SelectorExpression);
		}

		public Task<DataPage<TEntity>> GetPage(
			Specification<TEntity> specification,
			SortingSpecification<TEntity, object>[] sortingSpecifications,
			IPage page)
		{
			var query = GetAllAsQueryable(specification);

			return GetPagedDataFromQuery(sortingSpecifications, page.PageNumber, page.PageSize, query);
		}

		public Task<DataPage<TEntity>> GetPage(
			Specification<TEntity> specification,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			SortingSpecification<TEntity, object>[] sortingSpecifications,
			int pageNumber, int pageSize)
		{
			var query = GetAllAsQueryable(specification, joinStrategies);

			return GetPagedDataFromQuery(sortingSpecifications, pageNumber, pageSize, query);
		}

		private static async Task<DataPage<TEntity>> GetPagedDataFromQuery(
			SortingSpecification<TEntity, object>[] sortingSpecifications,
			int pageNumber,
			int pageSize,
			IQueryable<TEntity> query)
		{
			if (sortingSpecifications.Length != 0)
			{
				var firstSpecification = sortingSpecifications.First();
				var sortType = firstSpecification.SortType == SortType.Ascending;
				var orderedQuery = sortType
					? query.OrderBy(firstSpecification.KeySelector)
					: query.OrderByDescending(firstSpecification.KeySelector);

				foreach (var sortingSpecification in sortingSpecifications.Skip(1))
				{
					sortType = sortingSpecification.SortType == SortType.Ascending;
					orderedQuery = sortType
						? orderedQuery.ThenBy(sortingSpecification.KeySelector)
						: orderedQuery.ThenByDescending(sortingSpecification.KeySelector);
				}

				query = orderedQuery;
			}

			var result = await query
				.Select(item => new { entity = item, count = query.Count() })
				.Skip(pageNumber * pageSize)
				.Take(pageSize)
				.ToArrayAsync().ConfigureAwait(false);

			return new DataPage<TEntity>
			{
				Items = result.Select(i => i.entity).ToArray(),
				TotalCount = result.FirstOrDefault()?.count ?? 0
			};
		}

		private IOrderedQueryable<TResult> GetGroupedOrderedAsQueryable<TResult, TKey, TSort>(
			Specification<TEntity> spec,
			GroupingSpecification<TEntity, TKey, TResult> groupingSpec,
			SortingSpecification<TResult, TSort> sortingSpec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies
			) where TResult : class
		{
			var groupedQuery = GetAllAsQueryable(spec, joinStrategies)
				.GroupBy(groupingSpec.KeySelector, groupingSpec.ResultSelector);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? groupedQuery.OrderBy(sortingSpec.KeySelector)
				: groupedQuery.OrderByDescending(sortingSpec.KeySelector);
			return sortedQuery;
		}

		public Task<TResult[]> GetByFilterDistinct<TResult, TSort>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selectingSpec,
			SortingSpecification<TResult, TSort> sortingSpec,
			int quantity)
		{
			var query = GetAllDistinctAsQueryable(spec, selectingSpec);

			var sortedQuery = sortingSpec.SortType == SortType.Ascending
				? query.OrderBy(sortingSpec.KeySelector)
				: query.OrderByDescending(sortingSpec.KeySelector);

			return sortedQuery.Take(quantity).ToArrayAsync();
		}

		public Task<TResult[]> GetByFilterDistinct<TResult>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selectingSpec)
		{
			return GetAllDistinctAsQueryable(spec, selectingSpec).ToArrayAsync();
		}

		//public Task<TEntity[]> GetFromSql(SqlQueryLimitedModel queryModel)
		//{
		//    var sqlQuery = string.Format(queryModel.RawSql, queryModel.RequestParams);
		//    var query = EntityDbSet.FromSqlRaw(sqlQuery).Take(queryModel.Quantity);

		//    return query.ToArrayAsync();
		//}

		//public Task<TResult[]> GetFromSql<TResult>(SqlQueryModel queryModel, SelectingSpecification<TEntity, TResult> selectingSpec)
		//{
		//    return EntityDbSet
		//        .FromSqlRaw(string.Format(queryModel.RawSql, queryModel.RequestParams))
		//        .Select(selectingSpec.SelectorExpression)
		//        .ToArrayAsync();
		//}

		//public async Task<DataPage<TResult>> GetPage<TResult, TSort>(
		//    SqlQueryModel queryModel,
		//    Specification<TEntity> spec,
		//    SortingSpecification<TEntity, TSort> sortingSpec,
		//    SelectingSpecification<TEntity, TResult> selectingSpecification,
		//    IPage page)
		//{
		//    var query = EntityDbSet.FromSqlRaw(queryModel.RawSql, queryModel.RequestParams).Where(spec.Predicate);

		//    var sortedQuery = sortingSpec != null
		//        ? sortingSpec.SortType == SortType.Ascending
		//            ? query.OrderBy(sortingSpec.KeySelector)
		//            : query.OrderByDescending(sortingSpec.KeySelector)
		//        : query;

		//    var selectedResult = sortedQuery.Select(selectingSpecification.SelectorExpression);

		//    var result = await selectedResult
		//        .Select(item => new { entity = item, count = selectedResult.Count() })
		//        .Skip(page.PageNumber * page.PageSize)
		//        .Take(page.PageSize)
		//        .ToArrayAsync().ConfigureAwait(false);

		//    return new DataPage<TResult>
		//    {
		//        Items = result.Select(i => i.entity).ToArray(),
		//        TotalCount = result.FirstOrDefault()?.count ?? 0
		//    };
		//}

		//public async Task<DataPage<TResult>> GetPage<TResult, TSort>(
		//    SqlQueryModel queryModel,
		//    Specification<TEntity> spec,
		//    SortingSpecification<TEntity, TSort>[] sortingSpecifications,
		//    SelectingSpecification<TEntity, TResult> selectingSpecification,
		//    IPage page)
		//{
		//    var query = EntityDbSet
		//        .FromSqlRaw(string.Format(queryModel.RawSql, queryModel.RequestParams))
		//        .Where(spec.Predicate)
		//        .AsNoTracking();

		//    var count = await query.CountAsync().ConfigureAwait(false);

		//    if (sortingSpecifications.Length != 0)
		//    {
		//        var firstSpecification = sortingSpecifications.First();
		//        var sortType = firstSpecification.SortType == SortType.Ascending;
		//        var orderedQuery = sortType
		//            ? query.OrderBy(firstSpecification.KeySelector)
		//            : query.OrderByDescending(firstSpecification.KeySelector);

		//        foreach (var sortingSpecification in sortingSpecifications.Skip(1))
		//        {
		//            sortType = sortingSpecification.SortType == SortType.Ascending;
		//            orderedQuery = sortType
		//                ? orderedQuery.ThenBy(sortingSpecification.KeySelector)
		//                : orderedQuery.ThenByDescending(sortingSpecification.KeySelector);
		//        }

		//        query = orderedQuery;
		//    }

		//    var result = await query.Select(selectingSpecification.SelectorExpression)
		//        .Skip(page.PageNumber * page.PageSize)
		//        .Take(page.PageSize)
		//        .ToArrayAsync().ConfigureAwait(false);

		//    return new DataPage<TResult>
		//    {
		//        Items = result,
		//        TotalCount = count
		//    };
		//}

		//public async Task<DataPage<TResult>> GetPage<TResult>(
		//    SqlQueryModel queryModel,
		//    SelectingSpecification<TEntity, TResult> selectingSpecification,
		//    IPage page)
		//{
		//    var query = GetFromSql(queryModel);

		//    var count = await query.CountAsync().ConfigureAwait(false);

		//    var result = await query.Select(selectingSpecification.SelectorExpression)
		//        .Skip(page.PageNumber * page.PageSize)
		//        .Take(page.PageSize)
		//        .ToArrayAsync().ConfigureAwait(false);

		//    return new DataPage<TResult>
		//    {
		//        Items = result,
		//        TotalCount = count
		//    };
		//}

		//public async Task<DataPage<TResult>> GetPage<TResult>(
		//    SqlQueryModel queryModel,
		//    Specification<TEntity> spec,
		//    SelectingSpecification<TEntity, TResult> selectingSpecification,
		//    IPage page)
		//{
		//    var query = GetFromSql(queryModel).Where(spec.Predicate);

		//    var count = await query.CountAsync().ConfigureAwait(false);

		//    var result = await query.Select(selectingSpecification.SelectorExpression)
		//        .Skip(page.PageNumber * page.PageSize)
		//        .Take(page.PageSize)
		//        .ToArrayAsync().ConfigureAwait(false);

		//    return new DataPage<TResult>
		//    {
		//        Items = result,
		//        TotalCount = count
		//    };
		//}

		//private IQueryable<TEntity> GetFromSql(SqlQueryModel queryModel)
		//{
		//    var sqlParameters = new List<NpgsqlParameter>(queryModel.RequestParams.Length);

		//    for (var i = 0; i < queryModel.RequestParams.Length; i++)
		//    {
		//        var parameter = new NpgsqlParameter($"@p{i}", queryModel.RequestParams[i]);

		//        sqlParameters.Add(parameter);
		//    }

		//    return EntityDbSet.FromSqlRaw(queryModel.RawSql, sqlParameters.ToArray()).AsNoTracking();
		//}

		private IQueryable<TResult> GetAllDistinctAsQueryable<TResult>(
			Specification<TEntity> spec,
			SelectingSpecification<TEntity, TResult> selectingSpec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies = null)
		{
			var query = GetAllAsQueryable(spec, joinStrategies)
				.Select(selectingSpec.SelectorExpression)
				.Distinct();

			return query;
		}

		protected IQueryable<TEntity> GetAllAsQueryable(
			Specification<TEntity>? spec = null,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies = null)
		{
			var query = EntitySet;

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
				query = joinStrategies.Aggregate(query, (current, joinStrategy) => current.Include(joinStrategy.JoinStrategyString));
			}

			return query;
		}
	}
}
