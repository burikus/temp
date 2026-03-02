using Blog.Core.Models.TextFormattings;

namespace Blog.Core.Models.Infos
{
    public record InfosResponseModel(InfoResponseModel[] Data, int TotalCount);

    public record InfoResponseModel(Guid Id, string Text, bool IsActive, Guid TextFormattingId);
}
