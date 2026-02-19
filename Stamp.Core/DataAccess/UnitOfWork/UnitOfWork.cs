using Domain.DataAccess;
using Domain.DataAccess.UnitOfWork;
using Domain.Interfaces;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

using Stamp.Core.DataAccess.EntityFramework;

namespace Stamp.Domain.DataAccess.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StampContext _context;
        private readonly IDateTimeProvider _dateTimeProvider;

        public UnitOfWork(StampContext context, IDateTimeProvider dateTimeProvider)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
        }

        public async Task<IDisposable> BeginTransaction()
        {
            return await _context.Database.BeginTransactionAsync().ConfigureAwait(false);
        }

        public Task CommitTransaction()
        {
            _context.Database.CommitTransaction();
            return Task.CompletedTask;
        }

        public Task Rollback()
        {
            _context.Database.RollbackTransaction();
            return Task.CompletedTask;
        }

        public Task Commit()
        {
            SoftDeleteDetected();
            return _context.SaveChangesAsync();
        }

        private void SoftDeleteDetected()
        {
            foreach (var entry in _context.ChangeTracker.Entries<SoftDeletableEntityBase>())
            {
                if (entry.State == EntityState.Deleted)
                {
                    SoftDelete(entry);
                }
            }
        }

        private void SoftDelete(EntityEntry<SoftDeletableEntityBase> entry)
        {
            entry.State = EntityState.Modified;
            entry.Entity.DateDeleted = _dateTimeProvider.UtcNow;

            foreach (var navigationEntry in entry.Navigations)
            {
                if (navigationEntry is CollectionEntry collectionEntry)
                {
                    foreach (var dependentEntry in collectionEntry.CurrentValue?.OfType<SoftDeletableEntityBase>()
                        .Where(i => i.DateDeleted != null) ?? Enumerable.Empty<SoftDeletableEntityBase>())
                    {
                        SoftDelete(_context.Entry(dependentEntry));
                    }
                }
                else
                {
                    if (navigationEntry.CurrentValue is SoftDeletableEntityBase dependentEntry)
                    {
                        SoftDelete(_context.Entry(dependentEntry));
                    }
                }
            }
        }
    }
}
