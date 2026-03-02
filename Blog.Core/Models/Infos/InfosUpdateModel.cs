using Blog.Core.Models.TextFormattings;

namespace Blog.Core.Models.Infos
{
    public record InfosUpdateModel(InfoUpdateModel[] Items);
    public record InfoUpdateModel(Guid Id, string Text, bool IsActive, Guid? BlogId, Guid TextFormattingId);
}
