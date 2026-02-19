using Domain.Extensions;

namespace Domain.DataAccess.QueryProviders
{
    public abstract class DataFilterProviderBase
    {
        private const string BasePredicate = "item";

        public Dictionary<string, Func<object, string>> Filters { get; protected set; }

        public virtual string CreateFilter(string filter, object value)
        {
            return string.Format(Filters[filter](value), BasePredicate, filter.ToUpperFirstChar());
        }

        public virtual bool IsExist(string filter)
        {
            return Filters.ContainsKey(filter);
        }

        protected virtual string StartsWith(string value)
        {
            return "{0}.{1}" + $".ToLower().StartsWith(\"{value.ToLower()}\")";
        }

        protected virtual string Equal(string value)
        {
            return "{0}.{1}" + $"==\"{value}\"";
        }
    }
}
