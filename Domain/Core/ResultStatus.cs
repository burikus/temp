namespace Domain.Core
{
    public enum ResultStatus
    {
        Success = 200,
        Created = 201,
        BadRequest = 400,
        ServerError = 500,
        Unauthorized = 401,
        Forbidden = 403,
        NotFound = 404,
        NotAllowed = 405
    }
}
