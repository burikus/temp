using Domain.DataAccess;

namespace IdentityService.Domain.DataAccess.Entities
{
    public class FeedbackMessage : EntityBase
    {
        public Guid UserId { get; set; }
        public string Message { get; set; }
        public DateTime AskedDateTime { get; set; }
        public DateTime? SentDateTime { get; set; }
    }
}
