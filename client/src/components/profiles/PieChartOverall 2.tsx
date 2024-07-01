import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

interface IProps {
  correct: number
  used: number
}

const PieChartOverall: React.FC<IProps> = ({ correct, used }) => {
  const initCorrect = correct;
  const incorrect = used - correct;
  const correctPercentage = (correct / used) * 100;
  const incorrectPercentage = (incorrect / used) * 100;

  const labels = ['Correct', 'Incorrect'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [correctPercentage, incorrectPercentage, initCorrect],
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

  const chartStyle: React.CSSProperties = {
    width: '30%',
    height: '30%',
    textAlign: 'center',
    margin: 'auto',
  };

  const h2Style = {
    fontSize: '10px',
    color: 'black',
  };

  return (
    <div className="pie-chart-container" style={chartStyle}>
      <h4 style={h2Style}>
        <br /> Correct&nbsp; <span>{correctPercentage.toFixed(2)}%</span>
        <br /> Incorrect&nbsp;<span>{incorrectPercentage.toFixed(2)}%</span>
        <br /> Overall Correct: {initCorrect} &nbsp;
        <Pie data={data} options={options} />
      </h4>
    </div>
  );
}

export default PieChartOverall;

