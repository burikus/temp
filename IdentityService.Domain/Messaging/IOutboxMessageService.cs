namespace IdentityService.Domain.Messaging
{
    public interface IOutboxMessageService
    {
        void AddMessage(object message);
        Task SaveMessagesToDb();
    }
}
