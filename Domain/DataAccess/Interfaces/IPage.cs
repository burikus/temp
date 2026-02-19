namespace Domain.DataAccess.Interfaces
{
    public interface IPage
    {
        int PageSize { get; }
        int PageNumber { get; }
    }
}
