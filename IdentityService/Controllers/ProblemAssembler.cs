using System.Net;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;

namespace IdentityService.Controllers
{
    public static class ProblemAssembler
    {
        private const string ValidationProblemDetailsDefaultDescription = "One or more validation errors occurred.";

        public static ValidationProblemDetails ValidationDetails(
            string detail)
        {
            var result = new ValidationProblemDetails();
            return SetDetails(result, (int)HttpStatusCode.BadRequest, detail);
        }

        public static ValidationProblemDetails ValidationDetails(
            IDictionary<string, string[]> errors)
        {
            return ValidationDetails(ValidationProblemDetailsDefaultDescription, errors);
        }

        public static ValidationProblemDetails ValidationDetails(
            string detail, IDictionary<string, string[]> errors)
        {
            var result = new ValidationProblemDetails(errors);
            return SetDetails(result, (int)HttpStatusCode.BadRequest, detail);
        }

        private static T SetDetails<T>(T details, int statusCode, string detail)
            where T : ProblemDetails
        {
            details.Status = statusCode;
            details.Type = GetDefaultType(statusCode);
            details.Title = GetReasonPhrase(statusCode);
            details.Detail = detail;

            return details;
        }

        private static string GetDefaultType(int statusCode)
        {
            return $"https://httpstatuses.com/{statusCode}";
        }

        private static string GetReasonPhrase(int statusCode)
        {
            return ReasonPhrases.GetReasonPhrase(statusCode);
        }
    }
}
