namespace Domain.Core
{
    public interface IConverter<out TDestination, in TSource>
    {
        TDestination From(TSource src);

        IEnumerable<TDestination> From(IEnumerable<TSource> srcEnumerable)
        {
            return srcEnumerable.Select(From);
        }

        TDestination[] From(TSource[] srcArray)
        {
            return srcArray.Select(From).ToArray();
        }
    }
}
