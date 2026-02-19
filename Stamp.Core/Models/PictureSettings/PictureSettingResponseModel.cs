namespace Stamp.Core.Models.PictureSettings
{
    public record PictureSettingResponseModel
    {
        public Guid Id { get; init; }
        public double ImageMaxSize { get; init; }
        public int? ImageWidth { get; set; }
        public int? ImageHeight { get; set; }
        public int EncoderQuality { get; init; }
        public float ImageRotation { get; init; }

        public string WatermarkFontName { get; init; }
        public string WatermarkFontSize { get; init; }
        public int WatermarkFontStyleWeight { get; init; }
        public string WatermarkFontColor { get; init; }
        public string WatermarkText { get; init; }
        public float WatermarkTextRotation { get; init; }
        public int WatermarkXPosition { get; init; }
        public int WatermarkYPosition { get; init; }
        public string? SampleImage { get; set; }
        public string SampleImageType { get; init; }

        public bool Resize { get; init; }
        public bool AddWatermark { get; init; }
    }
}
