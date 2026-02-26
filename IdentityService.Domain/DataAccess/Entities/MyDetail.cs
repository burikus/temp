using Domain.DataAccess;

namespace IdentityService.Domain.DataAccess.Entities
{
    public class MyDetail : EntityBase
    {
        public string Text { get; set; }
        public string Font { get; set; }
        public string FontSize { get; set; }
        public string FontColor { get; set; }
        public int FontStyleWeight { get; set; }
        public string Align { get; set; }
        public bool IsAboutme { get; set; }
        public bool IsNewsletter { get; set; }
    }
}
