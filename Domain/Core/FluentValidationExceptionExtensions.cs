using System.Linq;
using System.Text.RegularExpressions;

using FluentValidation;

namespace Domain.Core
{
 //   public static class FluentValidationExceptionExtensions
	//{
	//	public static ValidationException RemapPropertyNames(this ValidationException ex, params (string pattern, string replacement)[] mappings)
	//	{
	//		var message = ex.Message;
	//		var errors = ex.Errors
	//			.Select(failure =>
	//			{
	//				var (pattern, replacement) = mappings.FirstOrDefault(mp => Regex.IsMatch(failure.PropertyName, mp.pattern));

	//				if (pattern != null && replacement != null)
	//				{
	//					message = Regex.Replace(message, "\\b" + pattern + "\\b", replacement);
	//					failure.PropertyName = Regex.Replace(failure.PropertyName, pattern, replacement);
	//				}

	//				return failure;
	//			})
	//			.ToArray();

	//		return new ValidationException(message, errors);
	//	}
	//}
}
