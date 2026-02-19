using Stamp.Domain.DataAccess.Projections;

namespace Stamp.Core.Models.Menues;

public record UpdateMenuModel(MenuProjection[] Items);
