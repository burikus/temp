using System.Runtime.Serialization.Formatters.Binary;
using System.Text.RegularExpressions;

namespace Domain.Extensions
{
    public static class StringExtensions
    {
        private static string emailPattern = @"^(?!\.)(""([^""\r\\]|\\[""\r\\])*""|"
                                        + @"([-a-z0-9!#$%&'*+/=?^_`{|}~]|(?<!\.)\.)*)(?<!\.)"
                                        + @"@[a-z0-9][\w\.-]*[a-z0-9]\.[a-z][a-z\.]*[a-z]$";

        public static string SanitizeQuery(this string query)
        {
            return string.IsNullOrWhiteSpace(query)
                ? string.Empty
                : Regex.Replace(query.Trim(), @"[^\w\s/\*\.&!#?"":@'\+-]", string.Empty);
        }

        public static string ToUpperFirstChar(this string input)
        {
            return input switch
            {
                null => throw new ArgumentNullException(nameof(input)),
                "" => throw new ArgumentException($"{nameof(input)} cannot be empty", nameof(input)),
                _ => input.First().ToString().ToUpper() + input.Substring(1)
            };
        }

        public static string ObjectToString(this object obj)
        {
            using (MemoryStream ms = new MemoryStream())
            {
#pragma warning disable SYSLIB0011 // Type or member is obsolete
                new BinaryFormatter().Serialize(ms, obj);
#pragma warning restore SYSLIB0011 // Type or member is obsolete

                return Convert.ToBase64String(ms.ToArray());
            }
        }

        public static object StringToObject(this string base64String)
        {
            byte[] bytes = Convert.FromBase64String(base64String);
            using (MemoryStream ms = new MemoryStream(bytes, 0, bytes.Length))
            {
                ms.Write(bytes, 0, bytes.Length);
                ms.Position = 0;
#pragma warning disable SYSLIB0011
                return new BinaryFormatter().Deserialize(ms);
#pragma warning restore SYSLIB0011
            }
        }

        public static bool ValidateEmail(this string email)
        {
            Regex regex = new Regex(emailPattern, RegexOptions.IgnoreCase);

            return regex.IsMatch(email.ToLower());
        }

        public static IEnumerable<string>? DistinctString(this IEnumerable<string>? array)
        {
            if (!array.HasAny())
            {
                return array;
            }

            return array.Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
        }
    }
}
