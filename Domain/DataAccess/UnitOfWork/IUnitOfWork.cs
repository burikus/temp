namespace Domain.DataAccess.UnitOfWork
{
    public interface IUnitOfWork
    {
        Task<IDisposable> BeginTransaction();
        Task CommitTransaction();
        Task Rollback();
        Task Commit();
    }
}
