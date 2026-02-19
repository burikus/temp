namespace Stamp.Core.Models.StampSeries
{
    public record StampSeriesesResponseModel(StampSeriesResponseModel[] Data, int TotalCount);

    public record StampSeriesResponseModel(Guid Id, string Text, DateTime Date);
}
