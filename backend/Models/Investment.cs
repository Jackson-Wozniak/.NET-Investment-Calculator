using backend.Utils;

namespace backend.Models;

public class Investment
{
    public double StartingAmount { get; set; }
    public int InvestmentYears { get; set; }
    public double ReturnRate { get; set; }
    public double AdditionalContributions { get; set; }
    public double FinalAmount { get; set; }
    public List<double> YearlyAmounts { get; set; } = new List<double>();

    public Investment(double starting, int years, double rate, double contributions)
    {
        StartingAmount = starting;
        InvestmentYears = years;
        ReturnRate = rate;
        AdditionalContributions = contributions;
    }

    public void Calculate()
    {
        YearlyAmounts = InvestmentUtils.CalculateYearlyBalance(this);
        FinalAmount = YearlyAmounts[^1];
    }
}