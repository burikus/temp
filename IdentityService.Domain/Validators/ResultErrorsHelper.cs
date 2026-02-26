using Microsoft.AspNetCore.Identity;

namespace IdentityService.Domain.Validators
{
    public class ResultErrorsHelper
	{
		public static IDictionary<string, string[]> IdentityResultErrorsFrom(IdentityResult result)
		{
			return result.Errors
				.Select(it => new Tuple<string, string>(FieldFor(it.Code), it.Description))
				.GroupBy(k => k.Item1, e => e.Item2)
				.ToDictionary(k => k.Key, e => e.ToArray());

			string FieldFor(string code)
			{
				if (code.Contains("Password")) return "Password";
				if (code.Contains("Email") || code.Contains("UserName")) return "Email";

				return code;
			}
		}
	}
}
