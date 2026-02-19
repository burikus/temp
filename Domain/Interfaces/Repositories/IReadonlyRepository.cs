using Domain.DataAccess;
using Domain.DataAccess.Interfaces;
using Domain.DataAccess.Specifications;

namespace Domain.Interfaces.Repositories
{
    public interface IReadonlyRepository<TEntity>
        where TEntity : class
    {
        Task<TEntity[]> GetAll(
            bool ignoreQueryFilters);
        Task<TEntity[]> GetAll<TSort>(
            SortingSpecification<TEntity, TSort> orderBySpec);
        public Task<TEntity[]> GetAll<TSort>(
            SortingSpecification<TEntity, TSort> orderBySpec,
            bool ignoreQueryFilters);
        Task<TResult[]> GetAll<TResult>(
            SelectingSpecification<TEntity, TResult> selecting);
		public Task<TEntity[]> GetAll<TSort>(
			SortingSpecification<TEntity, TSort> orderBySpec,
			IEnumerable<JoinStrategy<TEntity>> joinStrategies,
			bool ignoreQueryFilters);

		Task<TEntity>? GetSingle();
        Task<TEntity?> GetSingle(Specification<TEntity> spec);
        Task<TEntity?> GetSingle(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies);
        Task<TResult?> GetSingle<TResult>(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies, SelectingSpecification<TEntity, TResult> selecting);
        Task<TResult?> GetSingle<TResult>(
            Specification<TEntity> spec,
            SelectingSpecification<TEntity, TResult> selecting);

        Task<TResult> GetSingle<TResult, TSort>(
            Specification<TEntity> spec,
            SelectingSpecification<TEntity, TResult> selecting,
            SortingSpecification<TResult, TSort> sortingSpec);

        Task<TResult> GetSingle<TResult, TSort>(
            Specification<TEntity> spec,
            SelectingSpecification<TEntity, TResult> selecting,
            SortingSpecification<TEntity, TSort> sortingSpec);

        Task<bool> Any(Specification<TEntity> spec);
        Task<bool> Any(Specification<TEntity> spec, bool ignoreQueryFilters);

        Task<TEntity[]> GetByFilter(IEnumerable<JoinStrategy<TEntity>> joinStrategies);
        Task<TEntity[]> GetByFilter(IEnumerable<JoinStrategy<TEntity>> joinStrategies, bool ignoreQueryFilters);
        Task<TEntity[]> GetByFilter(Specification<TEntity> spec, bool ignoreQueryFilters);

        Task<TEntity[]> GetByFilter(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies);
        Task<TEntity[]> GetByFilter(Specification<TEntity> spec, IEnumerable<JoinStrategy<TEntity>> joinStrategies, bool ignoreQueryFilters);

        Task<TEntity[]> GetByFilter<TSort>(Specification<TEntity> spec, SortingSpecification<TEntity, TSort> sortingSpec, int quantity);

        Task<TEntity[]> GetByFilter<TSort>(Specification<TEntity> spec, SortingSpecification<TEntity, TSort> sortingSpec, IEnumerable<JoinStrategy<TEntity>> joinStrategies);

        Task<TResult[]> GetByFilter<TResult>(Specification<TEntity> spec, SelectingSpecification<TEntity, TResult> selectingSpecification);

        Task<TResult[]> GetByFilter<TResult, TSort>(
            Specification<TEntity> spec,
            SortingSpecification<TEntity, TSort> sortingSpecification,
            SelectingSpecification<TEntity, TResult> selectingSpecification,
            int quantity);

        Task<TResult[]> GetPage<TResult>(
            Specification<TEntity> spec,
            SelectingSpecification<TEntity, TResult> selectingSpecification,
            int pageNumber,
            int pageSize);

        Task<TResult[]> GetByFilter<TResult, TSort>(
            Specification<TEntity> spec,
            SortingSpecification<TEntity, TSort> sortingSpec,
            SelectingSpecification<TEntity, TResult> selectingSpecification);

        Task<TEntity[]> GetByFilter(Specification<TEntity> spec);
        Task<int> CountByFilter(Specification<TEntity> spec);
        Task<int> CountByFilter(Specification<TEntity> spec, bool ignoreQueryFilters);
        Task<TResult[]> GetByFilter<TResult, TKey>(
            Specification<TEntity>? spec,
            GroupingSpecification<TEntity, TKey, TResult> groupingSpec)
            where TResult : class;

        Task<TResult[]> GetByFilter<TResult, TKey, TSort>(Specification<TEntity>? spec,
            GroupingSpecification<TEntity, TKey, TResult> groupingSpec,
            SortingSpecification<TResult, TSort> sortingSpec,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies)
            where TResult : class;

        public Task<TResult[]> GetByFilter<TResult, TSort>(
            Specification<TEntity> spec,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies,
            SortingSpecification<TEntity, TSort> sortingSpec,
            SelectingSpecification<TEntity, TResult> selectingSpec)
            where TResult : class;

        Task<TEntity[]> GetByFilter<TSort>(
            Specification<TEntity> spec,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies,
            SortingSpecification<TEntity, TSort> sortingSpec,
            int quantity);

        Task<TResult[]> GetByFilter<TResult, TKey, TSort>(
            Specification<TEntity>? spec,
            GroupingSpecification<TEntity, TKey, TResult> groupingSpec,
            SortingSpecification<TResult, TSort> sortingSpec,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies,
            int quantity)
            where TResult : class;

        Task<TResult[]> GetByFilter<TResult>(Specification<TEntity> spec,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies,
            SelectingSpecification<TEntity, TResult> selecting);

        Task<DataPage<TEntity>> GetPage(
            Specification<TEntity> specification,
            SortingSpecification<TEntity, object>[] sortingSpecifications,
            IPage page);

        Task<DataPage<TEntity>> GetPage(
            Specification<TEntity> specification,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies,
            SortingSpecification<TEntity, object>[] sortingSpecifications,
            int pageNumber,
            int pageSize);

        Task<TResult[]> GetByFilterDistinct<TResult, TSort>(
            Specification<TEntity> spec,
            SelectingSpecification<TEntity, TResult> selectingSpec,
            SortingSpecification<TResult, TSort> sortingSpec,
            int quantity);

        Task<TResult[]> GetByFilterDistinct<TResult>(
            Specification<TEntity> spec,
            SelectingSpecification<TEntity, TResult> selectingSpec);

        Task<TResult[]> GetByFilterDistinct<TResult>(
            Specification<TEntity> spec,
            SelectingSpecification<TEntity, TResult> selectingSpec,
            IEnumerable<JoinStrategy<TEntity>> joinStrategies)
            where TResult : class;

        Task<int> CountUnique<TSelect>(Specification<TEntity> specification, SelectingSpecification<TEntity, TSelect> selectSpec);
        Task<TSelect> Max<TSelect>(Specification<TEntity> specification, SelectingSpecification<TEntity, TSelect> selectSpec);

        //Task<TEntity[]> GetFromSql(SqlQueryLimitedModel queryModel);

        //Task<TResult[]> GetFromSql<TResult>(SqlQueryModel queryModel,
        //    SelectingSpecification<TEntity, TResult> selectingSpec);

        //Task<DataPage<TResult>> GetPage<TResult, TSort>(
        //    SqlQueryModel queryModel,
        //    Specification<TEntity> spec,
        //    SortingSpecification<TEntity, TSort> sortingSpec,
        //    SelectingSpecification<TEntity, TResult> selectingSpecification,
        //    IPage page);

        //Task<DataPage<TResult>> GetPage<TResult, TSort>(
        //    SqlQueryModel queryModel,
        //    Specification<TEntity> spec,
        //    SortingSpecification<TEntity, TSort>[] sortingSpec,
        //    SelectingSpecification<TEntity, TResult> selectingSpecification,
        //    IPage page);

        //Task<DataPage<TResult>> GetPage<TResult>(
        //    SqlQueryModel queryModel,
        //    SelectingSpecification<TEntity, TResult> selectingSpecification,
        //    IPage page);

        //Task<DataPage<TResult>> GetPage<TResult>(
        //    SqlQueryModel queryModel,
        //    Specification<TEntity> spec,
        //    SelectingSpecification<TEntity, TResult> selectingSpecification,
        //    IPage page);
    }
}