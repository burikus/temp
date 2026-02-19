namespace Domain.Utils
{
	public static class SystemObjects
	{
		public static T RequireNotNull<T>(T? value, string name)
		{
			return value ?? throw new ArgumentNullException(name);
		}

		public static string RequireNotBlank(string? value, string name)
		{
			return !string.IsNullOrWhiteSpace(value)
				? value
				: throw new ArgumentException("Value can not be blank", name);
		}

		public static string RequireAbsoluteUri(string? value, string name)
		{
			return Uri.TryCreate(value, UriKind.Absolute, out _)
				? value!
				: throw new ArgumentException($"'{value}' is not a valid absolute Uri", name);
		}

		public static string? OptionalAbsoluteUri(string? value, string name)
		{
			return (value == null)
				? null
				: RequireAbsoluteUri(value, name);
		}
	}
}
