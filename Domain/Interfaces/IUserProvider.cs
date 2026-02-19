namespace Domain.Interfaces
{
    public interface IUserProvider
    {
        Guid GetUserIdentifier();
        bool IsAdmin();
        bool IsUser();
        bool IsAuthenticated();
    }
}
