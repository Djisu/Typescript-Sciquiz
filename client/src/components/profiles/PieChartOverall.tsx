import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

interface IProps {
  correct: number
  used: number
}

const PieChartOverall: React.FC<IProps> = ({ correct, used }) =>{
   if (correct === null || used === null) {
    return null;
  }

  const [correctPercentage, setCorrectPercentage] = useState(0);
  const [incorrectPercentage, setIncorrectPercentage] = useState(0);

  useEffect(() => {
    if (used !== 0) {
      const correctPercentage = (correct / used) * 100;
      const incorrectPercentage = ((used - correct) / used) * 100;
      setCorrectPercentage(correctPercentage);
      setIncorrectPercentage(incorrectPercentage);
    }
  }, [correct, used]);


  const labels = ['Correct', 'Incorrect'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [correctPercentage, incorrectPercentage],
                backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                borderColor: ['rgba(0, 255, 0, 1.5)', 'rgba(255, 0, 0, 1.5)'],
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
        <Pie data={data} options={options} />
      </h4>
    </div>
  );
}

export default PieChartOverall;

