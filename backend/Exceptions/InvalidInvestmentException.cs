using System.Net;

namespace backend.Exceptions;

public class InvalidInvestmentException : Exception
{
    public HttpStatusCode Status { get; set; }

    public InvalidInvestmentException(string message) : base(message)
    {
        Status = HttpStatusCode.BadRequest;
    }
}