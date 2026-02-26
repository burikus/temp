using Domain.DataAccess.UnitOfWork;

using Microsoft.EntityFrameworkCore;

namespace IdentityService.DataAccess.UnitOfWork
{
    public class TransactionManager<T> : ITransactionManager where T : DbContext
    {
        private readonly T _context;

        public TransactionManager(T context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public virtual async Task<IDisposable> BeginAsync()
        {
            return await _context.Database.BeginTransactionAsync().ConfigureAwait(false);
        }

        public virtual async Task CommitAsync()
        {
            await _context.Database.CommitTransactionAsync().ConfigureAwait(false);
        }

        public virtual async Task RollbackAsync()
        {
            await _context.Database.RollbackTransactionAsync().ConfigureAwait(false);
        }
    }
}
