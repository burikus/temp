namespace Stamp.Domain.DataAccess.Queries
{
    public record StampSeriesFilter(Guid[]? Ids = null, DateTime? DateFrom = null, DateTime? DateTo = null);
}