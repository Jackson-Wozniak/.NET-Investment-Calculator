using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace backend.Exceptions;

public class GlobalExceptionHandler : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        if (context.Exception is InvalidInvestmentException invalidInvestmentException)
        {
            context.Result = new JsonResult(new
            {
                error = invalidInvestmentException.Message
            })
            {
                StatusCode = (int)invalidInvestmentException.Status
            };

            context.ExceptionHandled = true;
        }
    }
}