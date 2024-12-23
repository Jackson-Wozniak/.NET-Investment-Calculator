using backend.Payloads;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Route("/api/Investments")]
[ApiController]
public class InvestmentController : ControllerBase
{
    [HttpPost]
    public ActionResult<InvestmentDto> Calculate([FromBody] InvestmentRequest request)
    {
        var investment = request.Generate();
        investment.Calculate();
        return Ok(new InvestmentDto(investment));
    }
}