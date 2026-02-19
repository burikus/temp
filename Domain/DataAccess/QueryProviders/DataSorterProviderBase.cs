namespace Domain.DataAccess.QueryProviders
{
    public abstract class DataSorterProviderBase
    {
        protected string[] Sorters;

        public virtual bool IsExist(string sortingField)
        {
            return Sorters.Contains(sortingField);
        }
    }
}
