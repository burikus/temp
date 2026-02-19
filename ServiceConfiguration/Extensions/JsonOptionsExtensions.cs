using System.Text.Json.Serialization;

using Microsoft.AspNetCore.Mvc;

namespace ServiceConfiguration.Extensions
{
    public static class JsonOptionsExtensions
    {
        /// <summary>
        /// Adds global API controllers enum to tring json converter.
        /// </summary>
        /// <param name="options"></param>
        public static void AddGlobalEnumToStringConverter(this JsonOptions options)
        {
            options?.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        }
    }
}
