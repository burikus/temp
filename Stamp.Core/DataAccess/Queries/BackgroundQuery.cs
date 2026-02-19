using Microsoft.EntityFrameworkCore;

using Stamp.Core.DataAccess.EntityFramework;
using Stamp.Domain.DataAccess.Entities;
using Stamp.Domain.DataAccess.Projections;
using Stamp.Domain.DataAccess.Queries.Contracts;

namespace Stamp.Core.DataAccess.Queries
{
    public class BackgroundQuery : IBackgroundQuery
    {
        private readonly IQueryable<Background> _background;

        public BackgroundQuery(StampContext stampContext)
        {
            if (stampContext == null)
            {
                throw new ArgumentNullException(nameof(stampContext));
            }

            _background = stampContext.Background.AsNoTracking();
        }

        public Task<BackgroundProjection[]> AllBackgroundsAsync()
        {
            return _background
                        .Select(x =>
                            new BackgroundProjection(x.Id, x.Image, x.IsActive, x.Number, x.Name, x.ImageMaxSize))
                        .ToArrayAsync();
        }
    }
}
