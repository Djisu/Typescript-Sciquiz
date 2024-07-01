import React, { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';

interface IProps {
  topic: string;
  correct: number;
  totQuestions: number;
}

interface ChartDataItem {
  x: string;
  y: number;
}

const PieChartCorrectTopics: React.FC<IProps> = ({ topic, correct, totQuestions }) => {
  console.log('in PieChartCorrectTopics')

  const [data, setData] = useState<ChartDataItem[]>([]);

  useEffect(() => {
    const correctPercentage = (correct / totQuestions) * 100;
    const incorrect = totQuestions - correct;
    const incorrectPercentage = (incorrect / totQuestions) * 100;

    // const chartData = [
    //   { x: 'Correct', y: correctPercentage },
    //   { x: 'Used', y: incorrectPercentage },
    // ];
    const chartData: ChartDataItem[] = [
      { x: 'Correct', y: correctPercentage },
      { x: 'Incorrect', y: incorrectPercentage },
    ];

    setData(chartData);
  }, [correct, totQuestions]);

  const chartStyle: React.CSSProperties = {
    width: '60%',
    height: '60%',
    textAlign: 'center',
    margin: 'auto',
  };

  return (
    <div className="doughnut-chart-container" style={chartStyle}>
      <p style={{ color: 'black' }}>Current Test Results:</p>
      <h5 style={{ fontSize: '20px', color: 'black' }}>
        <span>{topic}</span>
        <div>
          Correct: <span>{data.length > 0 && data[0].y.toFixed(2)}%</span> ({correct})
        </div>
        <div>
          Incorrect: <span>{data.length > 0 && data[1].y.toFixed(2)}%</span> ({totQuestions})
        </div>
        {data.length > 0 && (
          <VictoryPie
            data={data}
            colorScale={['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)']}
            style={{ labels: { fontSize: 10, fill: 'black' } }}
            innerRadius={100}
            padAngle={3}
          />
        )}
      </h5>
    </div>
  );
}

export default PieChartCorrectTopics;


