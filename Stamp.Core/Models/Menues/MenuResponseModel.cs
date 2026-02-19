using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.Models.Menues
{
    public record MenuResponseModel(MenuProjection[] Items);
}