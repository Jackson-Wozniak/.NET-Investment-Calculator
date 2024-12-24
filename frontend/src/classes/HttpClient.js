

export default async function getData(startingAmount, years, returnRate, additionalContributions){
    let response = await fetch('http://localhost:7121/api/Investments', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "startingAmount" : startingAmount,
            "returnRate" : returnRate,
            "investmentYears" : years,
            "additionalContributions" : additionalContributions
        })
    });

    let result = await response.json();
    console.log(result.yearlyAmounts);

    return result.yearlyAmounts;
}