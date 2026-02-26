using System.Linq.Expressions;

using Domain.DataAccess.Specifications;

using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.DataAccess.Specifications
{
    public class UserSortingSpecs
    {
        public class ByName : SortingSpecification<User, string>
        {
            public override Expression<Func<User, string>> KeySelector
            {
                get { return item => item.UserName; }
            }
        }
    }
}
