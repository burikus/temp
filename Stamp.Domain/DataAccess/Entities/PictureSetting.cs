namespace Stamp.Domain.DataAccess.Entities
{
    public class PictureSetting
    {
        public Guid Id { get; set; }
        public double ImageMaxSize { get; set; }
        public int? ImageWidth { get; set; }
        public int? ImageHeight { get; set; }
        public int EncoderQuality { get; set; }
        public float ImageRotation { get; set; }

        public string WatermarkFontName { get; set; }
        public string WatermarkFontSize { get; set; }
        public int WatermarkFontStyleWeight { get; set; }
        public string? WatermarkFontColor { get; set; }
        public string WatermarkText { get; set; }
        public float WatermarkTextRotation { get; set; }
        public int WatermarkXPosition { get; set; }
        public int WatermarkYPosition { get; set; }
        public byte[] SampleImage { get; set; }
        public string SampleImageType { get; set; }

        public bool Resize { get; set; }
        public bool AddWatermark { get; set; }
    }
}
