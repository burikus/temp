namespace Blog.Core.Models.Menues
{
    public record MenuModel(Guid Id, string Name, bool IsActive, int Position, Guid TextFormattingId);
}
