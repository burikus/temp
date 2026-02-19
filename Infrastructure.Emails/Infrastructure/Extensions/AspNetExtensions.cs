using System.IO;

using Microsoft.AspNetCore.Http;

namespace Infrastructure.Emails.Infrastructure.Extensions
{
    public static class AspNetExtensions
    {
        public static byte[] ToByteArray(this IFormFile file)
        {
            using var stream = new MemoryStream();

            file.CopyTo(stream);

            return stream.ToArray();
        }
    }
}
