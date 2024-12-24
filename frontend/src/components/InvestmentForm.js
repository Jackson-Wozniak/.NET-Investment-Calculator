import { useState } from 'react';

function InvestmentForm(props){
    const [startingAmount, setStartingAmount] = useState(0);
    const [years, setYears] = useState(0);
    const [returnRate, setReturnRate] = useState(0.0);
    const [additionalContributions, setAdditionalContributions] = useState(0);

    return(
        <div>
            <input type="number" placeholder='Starting Amount' onChange={(e) => setStartingAmount(e.target.value)}/>
            <input type="number" placeholder='Years' onChange={(e) => setYears(e.target.value)}/>
            <input type="number" placeholder='Return Rate' onChange={(e) => setReturnRate(e.target.value)}/>
            <input type="number" placeholder='Additional Contributions' onChange={(e) => setAdditionalContributions(e.target.value)}/>

            <button onClick={() => props.update(startingAmount, years, returnRate, additionalContributions)}>Calculate</button>
        </div>
    );
}

export default InvestmentForm;