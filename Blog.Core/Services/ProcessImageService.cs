using Blog.Core.Services.Contracts;

using Domain.Enums;

using HeyRed.Mime;

using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;
namespace Blog.Core.Services
{
    public class ProcessImageService : IProcessImageService
    {
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
