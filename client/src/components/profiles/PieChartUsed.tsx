import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

interface IProps {
  topic: string
  used: number
  topicCount: number
}

const PieChartUsed: React.FC<IProps> = ({ topic, used, topicCount }) =>{
  console.log('PieChart topic: ', topic);
  console.log('PieChart used: ', used);

  const topicLabel = topic;
  const usedPercentage = (used / topicCount) * 100;

  const labels = ['Used Percentage'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [usedPercentage, 100 - usedPercentage], // Calculate unused percentage as 100 - usedPercentage
        backgroundColor: ['rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)'], // Swapped colors to represent used and unused
        borderColor: ['rgba(0, 0, 255, 0.75)', 'rgba(255, 0, 0, 0.5)'], // Swapped border colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const chartStyle: React.CSSProperties = {
    width: '30%', // Reduce the width by 50%
    height: '30%', // Reduce the height by 50%
    textAlign: 'center', // Center-align text
    margin: 'auto', // Center horizontally
  };

  const h2Style = {
    fontSize: '20px', // Adjust the font size as needed
    color: 'black',
  };

  return (
    <div className="pie-chart-container" style={chartStyle}>
      {topic && <h2 style={h2Style}>Pie Chart for {topic}</h2>}

      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChartUsed;
