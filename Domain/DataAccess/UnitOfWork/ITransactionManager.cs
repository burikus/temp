namespace Domain.DataAccess.UnitOfWork
{
    public interface ITransactionManager
    {
        Task<IDisposable> BeginAsync();
        Task CommitAsync();
        Task RollbackAsync();
    }
}
