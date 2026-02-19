using System.Text.RegularExpressions;

using Domain.Enums;
using Domain.Utils;

using HeyRed.Mime;

using SixLabors.Fonts;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Drawing.Processing;
using SixLabors.ImageSharp.Formats;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;

using Stamp.Core.Models.Pictures;
using Stamp.Core.Models.PictureSettings;
using Stamp.Core.Services.Contracts;

namespace Stamp.Core.Services
{
    public class ProcessImageService : IProcessImageService
    {
        private readonly IPictureSettingService _pictureSettingService;

        public ProcessImageService(IPictureSettingService pictureSettingService)
        {
            _pictureSettingService = SystemObjects.RequireNotNull(pictureSettingService, nameof(pictureSettingService)); ;
        }

        public async Task<CreatePictureModel> ResizeAndAddWatermark(CreatePictureModel item)
        {
            var setting = await _pictureSettingService.AllPictureSettingsAsync();

            if (setting != null)
            {
                using (var stream = new MemoryStream())
                {
                    var file = Convert.FromBase64String(item.ImageFile);
                    using (var img = Image.Load<Rgba64>(file))
                    {
                        ProcessWatermark(setting.Value!, stream, img, item.Type);
                        item.ImageHeight = img.Height;
                        item.ImageWidth = img.Width;
                    }

                    item.ImageFile = Convert.ToBase64String(stream.ToArray());
                }
            }

            return item;
        }

        public Task<UpdatePictureSettingModel> ResizeAndAddWatermarkSample(UpdatePictureSettingModel model)
        {
            if (string.IsNullOrWhiteSpace(model.SampleImage))
            {
                return Task.FromResult(model);
            }

            using (var stream = new MemoryStream())
            {
                var file = Convert.FromBase64String(model.SampleImage);
                using (var img = Image.Load<Rgba64>(file))
                {
                    ProcessWatermark(model, stream, img, model.SampleImageType);
                    model.ImageHeight = img.Height;
                    model.ImageWidth = img.Width;
                }

                model.SampleImage = Convert.ToBase64String(stream.ToArray());
            }

            return Task.FromResult(model);
        }

        public string ResizeBackground(string image, string contentType, decimal imageMaxSize)
        {
            var imageEncoder = GetEncoderAndSetQuality(contentType, 100); // 0-100

            using (var stream = new MemoryStream())
            {
                var file = Convert.FromBase64String(image);
                using (var img = Image.Load<Rgba64>(file))
                {
                    if (img.Height > imageMaxSize || img.Width > imageMaxSize)
                    {
                        var ratio = imageMaxSize / (img.Height > img.Width ? img.Height : img.Width);
                        var newWidth = (int)(img.Width * ratio);
                        var newHeight = (int)(img.Height * ratio);

                        img.Mutate(i => i.Resize(newWidth, newHeight));

                        img.Save(stream, imageEncoder);
                    }
                }

                image = Convert.ToBase64String(stream.ToArray());
            }

            return string.Concat("'data:image/*;base64,", image, "'");
        }

        public static string ResizeImage(byte[] image, string contentType, double? maxSize = 100)
        {
            var imageEncoder = GetEncoderAndSetQuality(contentType, 100);

            using (var stream = new MemoryStream())
            {
                using (var img = Image.Load<Rgba64>(image))
                {
                    ResizeImage(img, maxSize);
                    img.Save(stream, imageEncoder);
                }

                return Convert.ToBase64String(stream.ToArray());
            }
        }

        private MemoryStream ProcessWatermark(PictureSettingResponseModel setting, MemoryStream stream, Image img, string contentType)
        {
            if (setting.Resize)
            {
                ResizeImage(img, setting?.ImageMaxSize);
            }

            if (setting.AddWatermark)
            {
                ApplyWatermark(img, setting);
            }

            var imageEncoder = GetEncoderAndSetQuality(contentType, setting?.EncoderQuality ?? 100); // 0-100

            img.Save(stream, imageEncoder);

            return stream;
        }

        private static void ResizeImage(Image img, double? maxSize = 900)
        {
            if (img.Height > maxSize || img.Width > maxSize)
            {
                var ratio = maxSize / (img.Height > img.Width ? img.Height : img.Width);
                var newWidth = (int)(img.Width * ratio);
                var newHeight = (int)(img.Height * ratio);

                img.Mutate(i => i.Resize(newWidth, newHeight));
            }
        }

        private static void ApplyWatermark(Image img, PictureSettingResponseModel settings)
        {
            Font font;

            var fontName = settings?.WatermarkFontName ?? "Arbor";

            if (SystemFonts.TryGet(fontName, out FontFamily fontFamily))
            {
                font = SystemFonts.CreateFont(
                    fontName,
                    float.Parse(Regex.Match(settings?.WatermarkFontSize, @"\d+").Value),
                    (FontStyle)settings.WatermarkFontStyleWeight);
            }
            else
            {
                font = SystemFonts.CreateFont(
                    "Arbor",
                    float.Parse(Regex.Match(settings.WatermarkFontSize, @"\d+").Value),
                    (FontStyle)settings.WatermarkFontStyleWeight);
            }

            //RichTextOptions options = new(font)
            //{
            //    TextAlignment = TextAlignment.Center,                
            //    Origin = new PointF(100, 100), // Set the rendering origin.
            //    TabWidth = 8, // A tab renders as 8 spaces wide
            //    WrappingLength = 100, // Greater than zero so we will word wrap at 100 pixels wide
            //    HorizontalAlignment = HorizontalAlignment.Right // Right align
            //};
            //PatternBrush brush = Brushes.Horizontal(Color.Red, Color.Blue);
            //PatternPen pen = Pens.DashDot(Color.Green, 5);
            //var v = color.ToHex();
            //var vv = Color.ParseHex(v);

            var color = settings != null && settings?.WatermarkFontColor != null
                            ? Color.ParseHex(settings.WatermarkFontColor.Substring(1, 8))
                            : Color.FromPixel(new Rgba32(255, 255, 255, 64));
            var brush = new SolidBrush(color);
            var point = new Point(img.Width - settings?.WatermarkXPosition ?? 200, img.Height - settings?.WatermarkYPosition ?? 100);

            img.Mutate(i =>
            {
                i.SetDrawingTransform(Matrix3x2Extensions.CreateRotationDegrees(settings?.WatermarkTextRotation ?? 0, point)); // rotate text
                i.DrawText(settings?.WatermarkText ?? "sample watermark", font, brush, point).Rotate(settings?.ImageRotation ?? 0); // rotate image
                i.BackgroundColor(new Rgba32(255, 255, 255, 64));
            });
        }

        private static IImageEncoder GetEncoderAndSetQuality(string contentType, int quality)
        {
            if (Enum.TryParse(MimeTypesMap.GetExtension(contentType), out MimeTypes extension))
            {
                switch (extension)
                {
                    case MimeTypes.jpe:
                    case MimeTypes.jpg:
                    case MimeTypes.jpeg:
                        var jpgEncoder = new SixLabors.ImageSharp.Formats.Jpeg.JpegEncoder
                        {
                            Quality = quality
                        };
                        return jpgEncoder;
                    case MimeTypes.gif:
                        return new SixLabors.ImageSharp.Formats.Gif.GifEncoder();
                    case MimeTypes.tif:
                    case MimeTypes.tiff:
                        return new SixLabors.ImageSharp.Formats.Tiff.TiffEncoder();
                    case MimeTypes.tga:
                        return new SixLabors.ImageSharp.Formats.Tga.TgaEncoder();
                    case MimeTypes.bmp:
                        return new SixLabors.ImageSharp.Formats.Bmp.BmpEncoder();
                    case MimeTypes.png:
                        return new SixLabors.ImageSharp.Formats.Png.PngEncoder();
                    case MimeTypes.pbm:
                        return new SixLabors.ImageSharp.Formats.Pbm.PbmEncoder();
                    case MimeTypes.wbmp:
                        var encoder = new SixLabors.ImageSharp.Formats.Webp.WebpEncoder
                        {
                            Quality = quality
                        };
                        return encoder;
                    default:
                        jpgEncoder = new SixLabors.ImageSharp.Formats.Jpeg.JpegEncoder
                        {
                            Quality = quality
                        };
                        return jpgEncoder;
                }
            }
            else
            {
                var jpgEncoder = new SixLabors.ImageSharp.Formats.Jpeg.JpegEncoder
                {
                    Quality = quality
                };
                return jpgEncoder;
            }
        }
    }
}
