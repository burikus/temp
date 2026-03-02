using Domain.DataAccess.Specifications;

using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.DataAccess.Specifications
{
    public class FeedbackMessagesSpecs
    {
        public class BySentDateTimeIsNull : Specification<FeedbackMessage>
        {
            public BySentDateTimeIsNull()
            {
                Predicate = message => message.SentDateTime == null;
            }
        }

        public class ByUserUid : Specification<FeedbackMessage>
        {
            public ByUserUid(Guid userId)
            {
                Predicate = message => message.UserId == userId;
            }
        }
    }
}
