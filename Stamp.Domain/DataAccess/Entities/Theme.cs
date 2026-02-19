using Domain.Enums;

namespace Stamp.Domain.DataAccess.Entities
{
    public class Theme
    {
        public Guid Id { get; set; }

        public ThemeCode Code { get; set; }
        public Guid? SubThemeId { get; set; }
        public required string Description { get; set; }

        public virtual ICollection<StampInfo> Stamps { get; set; }
        public virtual SubTheme? SubTheme { get; set; }
    }
}
