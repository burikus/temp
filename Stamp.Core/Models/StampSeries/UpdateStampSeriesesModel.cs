namespace Stamp.Core.Models.StampSeries
{
    public record UpdateStampSeriesesModel(UpdateStampSeriesModel[] Data);

    public record UpdateStampSeriesModel(Guid Id, string? Text = null, DateTime? Date = null);
}
