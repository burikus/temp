namespace Domain.Extensions
{
    public static class CollectionExtensions
    {
        public static IEnumerable<TResult> LeftJoin<TSelf, TInner, TKey, TResult>(this IEnumerable<TSelf> self,
            IEnumerable<TInner> inner,
            Func<TSelf, TKey> selfKeySelector,
            Func<TInner, TKey> innerKeySelector,
            Func<TSelf, TInner, TResult> resultSelector
        )
        {
            return self.GroupJoin(inner,
                    selfKeySelector,
                    innerKeySelector,
                    (selfItem, innerItem) => new { selfItem, innerItem }
                )
                .SelectMany(
                    item => item.innerItem.DefaultIfEmpty(),
                    (item, innerItem) => resultSelector(item.selfItem, innerItem)
                );
        }

        public static IEnumerable<T> AsEnumerable<T>(this T self)
        {
            yield return self;
        }

        public static IEnumerable<TSource> Intersect<TSource>(this IEnumerable<TSource> first, IEnumerable<TSource> second, Func<TSource, TSource, bool> comparer)
        {
            return first.Where(x => second.Count(y => comparer(x, y)) == 1);
        }

        public static IEnumerable<TSource> Except<TSource>(this IEnumerable<TSource> first, IEnumerable<TSource> second, Func<TSource, TSource, bool> comparer)
        {
            return first.Where(x => second.Count(y => comparer(x, y)) == 0);
        }

        public static IEnumerable<TResult> ZipWithDefault<TFirst, TSecond, TResult>(this IEnumerable<TFirst> first,
            IEnumerable<TSecond> second, Func<TFirst, TSecond, TResult> selector)
        {
            using var enum1 = first.GetEnumerator();
            using var enum2 = second.GetEnumerator();

            bool firstMoveNext;
            bool secondMoveNext;

            while ((firstMoveNext = enum1.MoveNext()) & (secondMoveNext = enum2.MoveNext()))
                yield return selector(enum1.Current, enum2.Current);

            if (firstMoveNext)
            {
                yield return selector(enum1.Current, default);
                while (enum1.MoveNext())
                {
                    yield return selector(enum1.Current, default);
                }
            }
            else if (secondMoveNext)
            {
                yield return selector(default, enum2.Current);
                while (enum2.MoveNext())
                {
                    yield return selector(default, enum2.Current);
                }
            }
        }

        public static bool HasAny<T>(this IEnumerable<T>? array)
        {
            return array != null && array.Any();
        }

        public static IEnumerable<T> Flatten<T>(
            this IEnumerable<T> items,
            Func<T, IEnumerable<T>> getChildren)
        {
            if (items == null)
                yield break;

            var stack = new Stack<T>(items);
            while (stack.Count > 0)
            {
                var current = stack.Pop();
                yield return current;

                if (current == null) continue;

                var children = getChildren(current);
                if (children == null) continue;

                foreach (var child in children)
                    stack.Push(child);
            }
        }

        public static bool DoesAllItemsUnique<T>(this IEnumerable<T> source, IEqualityComparer<T>? comparer)
        {
            return source.Distinct(comparer).Count() == source.Count();
        }

        public static bool DoesAllItemsUnique<T>(this IEnumerable<T> source)
        {
            return source.DoesAllItemsUnique(null);
        }
    }
}
