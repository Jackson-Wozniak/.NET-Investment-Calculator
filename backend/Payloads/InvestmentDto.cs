using System.Text.Json.Serialization;
using backend.Models;

namespace backend.Payloads;

public class InvestmentDto
{
    [JsonPropertyName("finalAmount")]
    public double FinalAmount { get; set; }
    
    [JsonPropertyName("yearlyAmounts")]
    public List<double> YearlyAmounts { get; set; }

    public InvestmentDto(Investment investment)
    {
        FinalAmount = investment.FinalAmount;
        YearlyAmounts = investment.YearlyAmounts;
    }
}