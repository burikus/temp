using System.Linq.Expressions;
using System.Reflection;

namespace Domain.Extensions
{
    public static class LinqExtensions
    {
        public static IEnumerable<T> OrderBy<T>(this IEnumerable<T> query, string name)
        {
            return CreateEnumerableOrder(query, name, "OrderBy");
        }
        public static IEnumerable<T> OrderByDescending<T>(this IEnumerable<T> query, string name)
        {
            return CreateEnumerableOrder(query, name, "OrderByDescending");
        }

        public static IQueryable<T> OrderBy<T>(this IQueryable<T> query, string name)
        {
            return CreateQueryableOrder(query, name, "OrderBy");
        }
        public static IQueryable<T> OrderByDescending<T>(this IQueryable<T> query, string name)
        {
            return CreateQueryableOrder(query, name, "OrderByDescending");
        }

        public static IEnumerable<TSource> ThenBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            return ThenBy((IOrderedEnumerable<TSource>)source, keySelector, Comparer<TKey>.Default);
        }

        private static PropertyInfo GetPropertyInfo(Type objType, string name)
        {
            var properties = objType.GetProperties();
            var matchedProperty = properties.FirstOrDefault(p => p.Name == name);
            if (matchedProperty == null)
                throw new ArgumentException("name");

            return matchedProperty;
        }
        private static LambdaExpression GetOrderExpression(Type objType, PropertyInfo pi)
        {
            var paramExpr = Expression.Parameter(objType);
            var propAccess = Expression.PropertyOrField(paramExpr, pi.Name);
            var expr = Expression.Lambda(propAccess, paramExpr);
            return expr;
        }

        private static IEnumerable<T> CreateEnumerableOrder<T>(this IEnumerable<T> query, string name, string orderName)
        {
            if (query == null || string.IsNullOrEmpty(name))
            {
                throw new ArgumentException("query and/or name is null");
            }

            var propInfo = GetPropertyInfo(typeof(T), name);
            var expr = GetOrderExpression(typeof(T), propInfo);

            var method = typeof(Enumerable).GetMethods().FirstOrDefault(m => m.Name == orderName && m.GetParameters().Length == 2);
            var genericMethod = method.MakeGenericMethod(typeof(T), propInfo.PropertyType);
            return (IEnumerable<T>)genericMethod.Invoke(null, new object[] { query, expr.Compile() });
        }

        private static IQueryable<T> CreateQueryableOrder<T>(this IQueryable<T> query, string name, string orderName)
        {
            if (query == null || string.IsNullOrEmpty(name))
            {
                throw new ArgumentException("query and/or name is null");
            }

            var propInfo = GetPropertyInfo(typeof(T), name);
            var expr = GetOrderExpression(typeof(T), propInfo);

            var method = typeof(Queryable).GetMethods().FirstOrDefault(m => m.Name == orderName && m.GetParameters().Length == 2);
            var genericMethod = method.MakeGenericMethod(typeof(T), propInfo.PropertyType);
            return (IQueryable<T>)genericMethod.Invoke(null, new object[] { query, expr.Compile() });
        }

        private static IOrderedEnumerable<TSource> ThenBy<TSource, TKey>(this IOrderedEnumerable<TSource> source, Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
        {
            if (source == null)
            {
                throw new ArgumentException("source is null");
            }

            return source.CreateOrderedEnumerable(keySelector, comparer, false);
        }
    }

    //public class CustomOrderedEnumerable<TSource> : IOrderedEnumerable<TSource>
    //{
    //    private IEnumerable<TSource> _source;
    //    private IComparer<TSource> _comparer;

    //    public CustomOrderedEnumerable(IEnumerable<TSource> source, IComparer<TSource> comparer)
    //    {
    //        _source = source;
    //        _comparer = comparer;
    //    }

    //    public IOrderedEnumerable<TSource> CreateOrderedEnumerable<TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer, bool descending)
    //    {
    //        IComparer<TSource> _comparer = new ProjectKeyToElementComparer<TSource, TKey>(keySelector, comparer);
    //        var comboComparer = new ComboComparer<TSource>(this._comparer, _comparer);

    //        return new CustomOrderedEnumerable<TSource>(_source, comboComparer);
    //    }

    //    public IEnumerator<TSource> GetEnumerator()
    //    {
    //        List<TSource> elements = _source.ToList();
    //        while (elements.Count > 0)
    //        {
    //            TSource minElement = elements[0];
    //            int minIndex = 0;
    //            for (int i = 1; i < elements.Count; i++)
    //            {
    //                if (_comparer.Compare(elements[i], minElement) < 0)
    //                {
    //                    minElement = elements[i];
    //                    minIndex = i;
    //                }
    //            }
    //            elements.RemoveAt(minIndex);

    //            yield return minElement;
    //        }
    //    }

    //    IEnumerator IEnumerable.GetEnumerator()
    //    {
    //        return GetEnumerator();
    //    }
    //}

    public class ProjectKeyToElementComparer<TSource, TKey> : IComparer<TSource>
    {
        private Func<TSource, TKey> _keySelector;
        private IComparer<TKey> _comparer;

        public ProjectKeyToElementComparer(Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
        {
            _keySelector = keySelector;
            _comparer = comparer;
        }

        public int Compare(TSource x, TSource y)
        {
            var xKey = _keySelector(x);
            var yKey = _keySelector(y);

            var result = _comparer.Compare(xKey, yKey);

            return result;
        }
    }

    public class ComboComparer<TSource> : IComparer<TSource>
    {
        private IComparer<TSource> _beforeComparer;
        private IComparer<TSource> _nowComparer;

        public ComboComparer(IComparer<TSource> beforeComparer, IComparer<TSource> nowComparer)
        {
            _beforeComparer = beforeComparer;
            _nowComparer = nowComparer;
        }

        public int Compare(TSource x, TSource y)
        {
            var nowComparerResult = _beforeComparer.Compare(x, y);
            if (nowComparerResult != 0)
            {
                return nowComparerResult;
            }

            return _nowComparer.Compare(x, y);
        }
    }
}
