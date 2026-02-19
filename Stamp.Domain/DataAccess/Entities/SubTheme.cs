using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class SubTheme
    {
        public Guid Id { get; set; }

        public SubThemeCode Code { get; set; }
        public required string Description { get; set; }

        public virtual ICollection<Theme> Themes { get; set; }
    }
}
