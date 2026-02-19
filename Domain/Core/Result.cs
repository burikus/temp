namespace Domain.Core
{
    public class Result<TValue>
    {
        public int StatusCode { get; }
        public string? ErrorDescription { get; }
        public TValue? Value { get; }

        private Result(TValue? value, ResultStatus status, string? errorDescription = default)
        {
            Value = value;
            StatusCode = (int)status;
            ErrorDescription = errorDescription;
        }

        public static Result<TValue> Ok(TValue value)
        {
            return new(value, ResultStatus.Success);
        }

        public static Result<TValue> Created(TValue value)
        {
            return new(value, ResultStatus.Created);
        }

        public static Result<TValue> BadRequest(string message)
        {
            return new(default, ResultStatus.BadRequest, message);
        }

        public static Result<TValue> NotFound(string message)
        {
            return new(default, ResultStatus.NotFound, message);
        }

        public static Result<TValue> NotAllowed(string message)
        {
            return new(default, ResultStatus.NotAllowed, message);
        }

        public static Result<TValue> Unauthorized(string message)
        {
            return new(default, ResultStatus.Unauthorized, message);
        }

        public static Result<TValue> Forbidden(string message)
        {
            return new(default, ResultStatus.Forbidden, message);
        }

        public static Result<TValue> ServerError(string message, string? stackTrace)
        {
            var errorDescription = $"Error description: {message} \nStackTrance: {stackTrace}";
            return new Result<TValue>(default, ResultStatus.ServerError, errorDescription);
        }
    }

    public class Result
    {
        public static bool Ok => true;
        public static bool BadRequest => false;
    }
}
