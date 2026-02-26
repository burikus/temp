using Domain.DataAccess.Specifications;

using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.DataAccess.Specifications
{
    public class UserSpecs
    {
        public class ByUserCredentials : Specification<User>
        {
            public ByUserCredentials(string email, string password)
            {
                Predicate = x => x.Email.ToLower() == email.ToLower() && x.PasswordHash == password;
            }
        }

        public class ByUids : Specification<User>
        {
            public ByUids(IEnumerable<Guid> uids)
            {
                Predicate = x => uids.Select(x => x.ToString()).Contains(x.Id);
            }
        }

        public class ByUid : Specification<User>
        {
            public ByUid(Guid uid)
            {
                Predicate = x => uid.ToString() == x.Id;
            }
        }

        public class ByUserEmail : Specification<User>
        {
            public ByUserEmail(string email)
            {
                Predicate = x => x.NormalizedEmail == email.ToUpper();
            }
        }

        public class ByUserUidAndEmail : Specification<User>
        {
            public ByUserUidAndEmail(Guid uid, string email)
            {
                Predicate = x => Guid.Parse(x.Id) == uid && x.Email.ToLower() == email.ToLower();
            }
        }

        public class IsActiveByEmail : Specification<User>
        {
            public IsActiveByEmail(string email)
            {
                Predicate = x => x.NormalizedEmail == email.ToUpper() && x.Active;
            }
        }

        public class IsSubscribed : Specification<User>
        {
            public IsSubscribed()
            {
                Predicate = x => x.Subscription && x.Active;
            }
        }
    }
}
