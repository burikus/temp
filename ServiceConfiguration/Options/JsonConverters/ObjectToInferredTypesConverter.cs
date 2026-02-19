using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace ServiceConfiguration.Options.JsonConverters
{
    public class ObjectToInferredTypesConverter : JsonConverter<object>
	{
		public override object Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
		{
			switch (reader.TokenType)
			{
				case JsonTokenType.True:
					return true;
				case JsonTokenType.False:
					return false;
				case JsonTokenType.Number when reader.TryGetDecimal(out var value):
					return value;
				case JsonTokenType.Number:
					return reader.GetDouble();
				case JsonTokenType.String when reader.TryGetDateTime(out var value):
					return value;
				case JsonTokenType.String:
					return reader.GetString();
				default:
					{
						using var document = JsonDocument.ParseValue(ref reader);

						return document.RootElement.Clone();
					}
			}
		}

		public override void Write(
			Utf8JsonWriter writer,
			object objectToWrite,
			JsonSerializerOptions options) =>
			JsonSerializer.Serialize(writer, objectToWrite, objectToWrite.GetType(), options);
	}
}
