using Domain.Extensions;

using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class MenuQuery : IMenuQuery
    {
        private readonly IQueryable<Menu> _menues;

        public MenuQuery(StampContext stampContext)
        {
            if (stampContext == null)
            {
                throw new ArgumentNullException(nameof(stampContext));
            }

            _menues = stampContext.Menu.AsNoTracking();
        }

        public async Task<MenuProjection[]> AllMenuesAsync(bool isAdmin)
        {
            var query = _menues;

            if (isAdmin)
            {
                query = query.IgnoreQueryFilters();
            }

            return await query.Select(x =>
                new MenuProjection
                {
                    Id = x.Id,
                    Name = x.Name,
                    IsActive = x.IsActive,
                    Position = x.Position,
                    SubMenues = isAdmin
                        ? x.SubMenues.HasAny()
                          ? x.SubMenues!
                            .Select(y =>
                            new SubMenuProjection
                            {
                                Id = y.Id,
                                MenuId = x.Id,
                                Name = y.Name,
                                IsActive = y.IsActive,
                                Position = y.Position
                            })
                            .OrderBy(pos => pos.Position)
                            .ToArray()
                          : Array.Empty<SubMenuProjection>()
                        : x.SubMenues.HasAny()
                          ? x.SubMenues!
                            .Where(y => y.IsActive)
                            .Select(y =>
                            new SubMenuProjection
                            {
                                Id = y.Id,
                                MenuId = x.Id,
                                Name = y.Name,
                                IsActive = y.IsActive,
                                Position = y.Position
                            })
                            .OrderBy(pos => pos.Position)
                            .ToArray()
                          : Array.Empty<SubMenuProjection>()
                })
                .OrderBy(pos => pos.Position)
                .ToArrayAsync();
        }
    }
}
