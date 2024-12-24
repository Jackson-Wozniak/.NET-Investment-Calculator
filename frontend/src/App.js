import './App.css';
import InvestmentChart from './components/InvestmentChart';
import InvestmentForm from './components/InvestmentForm';
import { useState } from 'react'; 
import getData from './classes/HttpClient';

function App() {
  let [labels, setLabels] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  let [finalAmount, setFinalAmount] = useState(0);

  async function updateInvestment(startingAmount, years, returnRate, additionalContributions){
    let newData = await getData(startingAmount, years, returnRate, additionalContributions);

    setLabels(Array.from({ length: newData.length }, (_, i) => i));
    setFinalAmount(newData[newData.length - 1]);
    setData(newData);
  }

  return (
    <div className="App">
      <InvestmentForm update={updateInvestment}/>
      <InvestmentChart labels={labels} data={data} finalAmount={finalAmount}/>
    </div>
  );
}

export default App;
