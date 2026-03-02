namespace Blog.Core.Models.Infos
{
    public record InfosCreateModel(InfoCreateModel[] Itmes);
    public record InfoCreateModel(string Text, bool IsActive, Guid? BlogId, Guid TextFormattingId);
}
