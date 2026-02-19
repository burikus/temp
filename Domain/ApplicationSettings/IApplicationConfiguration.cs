using Domain.Enums;

namespace Domain.ApplicationSettings
{
    public interface IAppConfiguration
    {
        AppMode GetMode();
    }
}
