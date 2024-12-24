import React from "react";
import Chart, { plugins } from "chart.js/auto";
import {Line} from "react-chartjs-2";
import { useEffect, useRef } from "react";

function InvestmentChart(props){
    const chartRef = useRef(null);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    });

    const data = {
        labels: props.labels,
        datasets: [{
            data: props.data,
            fill : true,
            backgroundColor: 'rgba(59, 209, 111, .1)',
            borderColor: 'rgba(59, 209, 111)',
            borderWidth: 1
        }],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
            display: true,
            text: 'Portfolio Growth',
            color : 'rgba(59, 209, 111)',
            font: {
                size: 30
            }
        },
        legend: {
            display: false
        },
        subtitle: {
            display: true,
            text: "Final Value: " + formatter.format(props.finalAmount),
            color : 'rgba(0,0,0)',
            font : {
                size : 20
            }
        }
        }
    }

    useEffect(() => {
        if (chartRef.current && chartRef.current.chart) {
            const chart = chartRef.current.chart;
            chart.data = data; // Update data
            chart.options = options; // Update options
            chart.update(); // Trigger re-render of the chart
        }
    }, [props.data, props.labels, props.finalAmount]);

    return(
        <div className="chart-container">
            <Line redraw={true} data={data} options={options} ref={chartRef}/>
        </div>
    );
}

export default InvestmentChart;