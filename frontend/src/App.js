import './App.css';
import InvestmentForm from './components/InvestmentForm';

function App() {
  function updateInvestment(startingAmount, years, returnRate, additionalContributions){
    console.log(startingAmount);
    console.log(years);
    console.log(returnRate);
    console.log(additionalContributions);
  }

  return (
    <div className="App">
      <InvestmentForm update={updateInvestment}/>
    </div>
  );
}

export default App;
