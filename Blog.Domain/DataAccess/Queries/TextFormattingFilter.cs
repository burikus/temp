using Domain.Enums;

namespace Blog.Domain.DataAccess.Queries
{
    public record TextFormattingFilter(bool IsAdmin, TextType? TextType = null);
}
