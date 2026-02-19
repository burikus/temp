using Domain.Constants;
using Domain.Utils;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using ServiceConfiguration.Base;

using Stamp.Core.Models.Countries;
using Stamp.Core.Services.Contracts;

using Swashbuckle.AspNetCore.Annotations;

namespace Stamp.Host.Controllers
{
    [SwaggerResponse(400, "Bad Request", typeof(ProblemDetails))]
    [Authorize(Policy = AuthorizationPolicyConstants.AdminAuthorization)]
    public class CountryController : WebApiControllerBase
    {
        private readonly ICountryService _countryService;

        public CountryController(ICountryService countryService) : base()
        {
            _countryService = SystemObjects.RequireNotNull(countryService, nameof(countryService));
        }

        #region Country
        [HttpGet("~/api/setting/country")]
        [SwaggerOperation(
            summary: "Get countries.",
            description: "Get countries for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(CountriesResponseModel[]))]
        public async Task<IActionResult> GetCountries()
        {
            var result = await _countryService.AllCountriesAsync();

            return CreateResponse(result);
        }

        [HttpPost("~/api/setting/country")]
        [SwaggerOperation(
            summary: "Create countries.",
            description: "Create countries for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> CreateCountries(CreateCountriesModel model)
        {
            var result = await _countryService.AddCountriesAsync(model);

            return CreateResponse(result);
        }

        [HttpPut("~/api/setting/country")]
        [SwaggerOperation(
            summary: "Update countries.",
            description: "Update countries for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> UpdateCountries(UpdateCountriesModel model)
        {
            var result = await _countryService.UpdateCountriesAsync(model);

            return CreateResponse(result);
        }

        [HttpDelete("~/api/setting/country")]
        [SwaggerOperation(
            summary: "Delete countries.",
            description: "Delete countries for Admin."
        )]
        [SwaggerResponse(200, "Ok", typeof(string))]
        public async Task<IActionResult> DeleteCountries(DeleteCountriesModel model)
        {
            var result = await _countryService.DeleteCountriesAsync(model);

            return CreateResponse(result);
        }
        #endregion Country
    }
}
