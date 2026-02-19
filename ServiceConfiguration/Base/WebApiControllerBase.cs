using System.Net.Mime;

using Domain.Core;
using Domain.Interfaces;

using FluentValidation.Results;

using MediatR;

using Microsoft.AspNetCore.Mvc;

namespace ServiceConfiguration.Base
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class WebApiControllerBase : ControllerBase
    {
        protected readonly IMapper Mapper;
        protected readonly IMediator Mediator;
        protected readonly IUserProvider UserProvider;

        protected WebApiControllerBase()
        {
        }

        protected WebApiControllerBase(IUserProvider userProvider)
        {
            UserProvider = userProvider ?? throw new ArgumentNullException(nameof(userProvider));
        }

        protected WebApiControllerBase(IMediator mediator, IUserProvider userProvider)
        {
            Mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            UserProvider = userProvider ?? throw new ArgumentNullException(nameof(userProvider));
        }

        protected WebApiControllerBase(IMapper mapper, IMediator mediator, IUserProvider userProvider)
        {
            Mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            Mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
            UserProvider = userProvider ?? throw new ArgumentNullException(nameof(userProvider));
        }

        protected IActionResult CreateResponse<TResponse>(Result<TResponse> result,
            Func<TResponse, object> transformationResponse = null)
        {
            return result.StatusCode switch
            {
                StatusCodes.Status200OK => Ok(transformationResponse != null
                    ? transformationResponse(result.Value)
                    : result.Value),

                StatusCodes.Status201Created => StatusCode(StatusCodes.Status201Created, transformationResponse != null
                    ? transformationResponse(result.Value)
                    : result.Value),

                StatusCodes.Status404NotFound => NotFound(result.ErrorDescription),
                StatusCodes.Status405MethodNotAllowed => StatusCode(result.StatusCode, result.ErrorDescription),
                StatusCodes.Status400BadRequest => BadRequest(result.ErrorDescription) as IActionResult,

                StatusCodes.Status500InternalServerError => StatusCode(StatusCodes.Status500InternalServerError),

                _ => throw new ArgumentException("Not supported status code", nameof(result))
            };
        }

        protected Result<string> OkMessageResponse(string message)
        {

            HttpContext.Response.ContentType = MediaTypeNames.Application.Json;
            return Result<string>.Ok(message);
        }

        protected Result<string> ValidationFailure(IEnumerable<ValidationFailure> errors)
        {
            return Result<string>.BadRequest(string.Join("\n", errors.Select(x => string.Join("\n", x.ErrorMessage))));
        }

        protected Result<string> ValidationFailure(IEnumerable<string> errors)
        {
            return Result<string>.BadRequest(string.Join("\n", errors.Select(x => string.Join("\n", x))));
        }
    }
}
