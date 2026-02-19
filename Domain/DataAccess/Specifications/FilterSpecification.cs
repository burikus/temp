namespace Domain.DataAccess.Specifications
{
    public class FilterSpecification
    {
        public class DefaultSpecification<T>: Specification<T>
            where T : EntityBase
        {
            public DefaultSpecification()
            {
                Predicate = item => true;
            }
        }
        public class DefaultFalseSpecification<T> : Specification<T>
           where T : EntityBase
        {
            public DefaultFalseSpecification()
            {
                Predicate = item => false;
            }
        }
    }
}
