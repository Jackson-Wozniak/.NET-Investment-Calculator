import React from "react";
import Chart from "chart.js/auto";
import {Line} from "react-chartjs-2";

function InvestmentChart(props){
    return(
        <div className="chart-container">
            <Line data={data} options={options}/>
        </div>
    );
}

export default InvestmentChart;