using Domain.ApplicationSettings;
using Domain.Enums;

namespace ServiceConfiguration
{
    public class AppConfiguration : IAppConfiguration
    {
        public AppMode Mode { get; set; }
        public AppMode GetMode() => Mode;
    }
}
