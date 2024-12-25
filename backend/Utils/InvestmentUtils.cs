using backend.Exceptions;
using backend.Models;
using backend.Payloads;

namespace backend.Utils;

public class InvestmentUtils
{
    public static void ValidateInvestment(InvestmentRequest request)
    {
        if (request.InvestmentYears < 1)
        {
            throw new InvalidInvestmentException("Duration must be one year or more");
        }

        if (request.StartingAmount < 0)
        {
            throw new InvalidInvestmentException("Starting amount must not be negative");
        }
        if (request.AdditionalContributions < 0)
        {
            throw new InvalidInvestmentException("Contributions must be greater than 0");
        }
    }

    public static List<double> CalculateYearlyBalance(Investment investment)
    {
        var currentBalance = investment.StartingAmount;
        var balances = new List<double>();
        balances.Add(investment.StartingAmount);
        for (var i = 0; i < investment.InvestmentYears; i++)
        {
            currentBalance += currentBalance * (investment.ReturnRate * .01);
            currentBalance += investment.AdditionalContributions;
            balances.Add(Math.Round(currentBalance, 2));
        }

        return balances;
    }
}