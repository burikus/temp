using Domain.Enums;

namespace Stamp.Domain.DataAccess.Queries
{
    public record PaperFilter(Guid[]? Ids = null, PaperCode[]? Codes = null);
}
