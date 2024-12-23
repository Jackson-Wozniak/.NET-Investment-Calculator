using System.Text.Json.Serialization;
using backend.Models;
using backend.Utils;

namespace backend.Payloads;

public class InvestmentRequest
{
    [JsonPropertyName("startingAmount")]
    public double StartingAmount { get; set; }
    
    [JsonPropertyName("investmentYears")]
    public int InvestmentYears { get; set; }
    
    [JsonPropertyName("returnRate")]
    public double ReturnRate { get; set; }
    
    [JsonPropertyName("additionalContributions")]
    public double AdditionalContributions { get; set; }

    public Investment Generate()
    {
        InvestmentUtils.ValidateInvestment(this);
        return new Investment(StartingAmount, InvestmentYears, ReturnRate, AdditionalContributions);
    }
}