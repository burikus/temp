using Domain.DataAccess.Specifications;

using IdentityService.Domain.DataAccess.Entities;

namespace IdentityService.Domain.DataAccess.Specifications
{
    public class MyDetailsSpecs
    {
        public class ByUid : Specification<MyDetail>
        {
            public ByUid(Guid? id)
            {
                if (id.HasValue)
                    Predicate = x => x.Id == id;
            }
        }

        public class BySource : Specification<MyDetail>
        {
            public BySource(bool isAboutMe = false, bool isNewsletter = false)
            {
                Predicate = x => x.IsAboutme == isAboutMe && x.IsNewsletter == isNewsletter;
            }
        }
    }
}
