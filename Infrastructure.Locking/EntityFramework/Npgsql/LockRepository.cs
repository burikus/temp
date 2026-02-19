using System;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using Npgsql;

namespace Infrastructure.Locking.EntityFramework.Npgsql
{
    public class LockRepository<TContext> : ILockRepository where TContext : DbContext
    {
        private readonly TContext _context;

        public LockRepository(TContext dataContext)
        {
            _context = dataContext ?? throw new ArgumentNullException(nameof(dataContext));
        }

        public async Task<Guid?> LockResourceAsync(string resourceId, int lockSpanSeconds, CancellationToken cancellationToken = default)
        {
            var commandText = LocksRawQueries.LockResourceSql;

            var parameters = new NpgsqlParameter[]
            {
                new NpgsqlParameter("resourceId", resourceId),
                new NpgsqlParameter("lockSpanSeconds", lockSpanSeconds)
            };

            return await _context.Database.SqlQueryRaw<Guid?>(commandText, parameters).FirstOrDefaultAsync();
        }

        public async Task<Guid?> ReleaseResourceLockAsync(Guid resourceLockTokenId, CancellationToken cancellationToken = default)
        {
            var commandText = LocksRawQueries.ReleaseResourceLockSql;

            var parameters = new NpgsqlParameter[]
            {
                new NpgsqlParameter("resourceLockTokenId", resourceLockTokenId)
            };

            return await _context.Database.SqlQueryRaw<Guid?>(commandText, parameters).FirstOrDefaultAsync();
        }
    }
}
