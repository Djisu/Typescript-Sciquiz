import React from 'react';
import { Pie } from 'react-chartjs-2';
function PieChartOverallCorrect({ correct, used }) {
  const incorrect = used - correct;

  const labels = ['Correct', 'used'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [correct, used],
        backgroundColor: ['rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)'],
        borderColor: ['rgba(0, 0, 255, 0.75)', 'rgba(255, 0, 0, 0.5)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const chartStyle = {
    width: '30%',
    height: '30%',
    textAlign: 'center',
    margin: 'auto',
  };

  const h2Style = {
    fontSize: '20px',
    color: 'black',
  };

  return (
    <div className="pie-chart-container" style={chartStyle}>
      <h4 style={h2Style}>
        Piechart
        <br /> Correct&nbsp; <span>{correct}</span>
        <br /> used&nbsp;<span>{used}</span>
        <Pie data={data} options={options} />
      </h4>
    </div>
  );
}

export default PieChartOverallCorrect;
