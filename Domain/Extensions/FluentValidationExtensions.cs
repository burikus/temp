using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;

using Domain.Core;

using FluentValidation;

namespace Domain.Extensions
{
	//public static class FluentValidationExtensions
	//{
	//	/// <summary>
	//	/// Defines validation rules for a Sorting[] property to determine: 
	//	/// if allowed property is used in model for sorting; 
	//	/// if allowed direction is used in model; 
	//	/// Fails with message: '{PropertyValue}' is not a supported sort property
	//	/// </summary> 
	//	/// <param name="inlineValidator">Inline Validator for Sorting[] property</param>
	//	/// <param name="allowedProperties">Allowed Sorting properties values</param>
	//	/// <returns></returns>
	//	/// <exception cref="ArgumentNullException"></exception>
	//	public static IRuleBuilderOptions<Sorting[], Sorting> ValidSorting(
	//		this InlineValidator<Sorting[]> inlineValidator, params string[] allowedProperties
	//	)
	//	{
	//		return inlineValidator
	//			.RuleForEach(sorting => sorting)
	//			.ChildRules(sorting =>
	//			{
	//				sorting.ContainsAllowedProperties(allowedProperties);
	//				sorting.ContainsValidDirection();
	//			});
	//	}

	//	/// <summary>
	//	/// Defines child rules for a Sorting property to determine if allowed property is used in model for sorting.
	//	/// Fails with message: '{PropertyValue}' is not a supported sort property
	//	/// </summary> 
	//	/// <param name="inlineValidator">Inline Validator for Sorting property</param>
	//	/// <param name="allowedProperties">Allowed Sorting properties values</param>
	//	/// <returns></returns>
	//	/// <exception cref="ArgumentNullException"></exception>
	//	public static IRuleBuilderOptions<Sorting, Sorting> ContainsAllowedProperties(
	//		this InlineValidator<Sorting> inlineValidator, params string[] allowedProperties
	//	)
	//	{
	//		return inlineValidator.RuleFor(sorting => sorting)
	//			.Must(x => allowedProperties.Contains(x.Property))
	//			.WithMessage("'{PropertyValue}' is not a supported sort property");
	//	}

	//	/// <summary>
	//	/// Defines child rules for a Sorting property to determine if allowed direction is used in model for sorting.
	//	/// Fails with message: Unknown sort direction
	//	/// </summary> 
	//	/// <param name="inlineValidator">Inline Validator for Sorting property</param>
	//	/// <returns></returns>
	//	/// <exception cref="ArgumentNullException"></exception>
	//	public static IRuleBuilderOptions<Sorting, SortType> ContainsValidDirection(
	//		this InlineValidator<Sorting> inlineValidator
	//	)
	//	{
	//		return inlineValidator.RuleFor(sorting => sorting.Direction)
	//			.IsInEnum().WithMessage("Unknown sort direction");
	//	}

	//	/// <summary>
	//	/// Defines child rules for a Paging property to determine if allowed Size and Index is used for Paging.
	//	/// Fails with message: Unknown sort direction
	//	/// </summary> 
	//	/// <param name="inlineValidator">Inline Validator for Sorting property</param>
	//	/// <param name="sizeGreaterThan"></param>
	//	/// <param name="indexGreaterThanOrEqualTo"></param>
	//	/// <returns></returns>
	//	/// <exception cref="ArgumentNullException"></exception>
	//	public static IRuleBuilderOptions<Paging, Paging> ValidPaging(
	//		this InlineValidator<Paging> inlineValidator, int sizeGreaterThan = 0, int indexGreaterThanOrEqualTo = 0
	//	)
	//	{
	//		return inlineValidator.RuleFor(sorting => sorting)
	//			.ChildRules(paging =>
	//			{
	//				paging.RuleFor(x => x.Size)
	//					.GreaterThan(sizeGreaterThan).WithMessage("Page size should be positive");
	//				paging.RuleFor(x => x.Index)
	//					.GreaterThanOrEqualTo(indexGreaterThanOrEqualTo).WithMessage("Page index should be positive or zero");
	//			});
	//	}
	//}
}
