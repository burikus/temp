namespace Stamp.Core.Models.StampSeries
{
    public record CreateStampSeriesesModel(CreateStampSeriesModel[] Data);

    public record CreateStampSeriesModel(string Text, DateTime Date);
}
