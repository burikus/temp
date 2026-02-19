namespace Stamp.Core.Models.Backgrounds
{
    public record UpdateBackgroundsModel(UpdateBackgroundModel[] Data);

    public record UpdateBackgroundModel(Guid Id, string? Image = null, bool? IsActive = null, int? Number = null, string? Name = null, int? ImageMaxSize = null);
}
