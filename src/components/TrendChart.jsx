import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import useAxios from '../hooks/useAxios';
import { BounceLoader } from 'react-spinners';

const TrendChart = () => {
  const { data, loading } = useAxios('http://localhost:8060/api/cyber/trend', true);

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!loading && data && data.data && data.data.datosTrend) {
      const allHours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));

      const datasets = data.data.datosTrend.map((equipo) => {
        const values = allHours.map((hour) => {
          const position = equipo.positions.find((pos) => pos.hora.startsWith(hour));
          return position ? position.last1hora : null;
        });

        const color = getRandomColor();

        return {
          label: equipo._id,
          data: values,
          fill: false,
          borderColor: color,
          pointBackgroundColor: 'white',
          pointBorderColor: color,
          pointBorderWidth: 2,
          tension: 0.1,
          showLine: true,
          borderWidth: 2,
          
      
        };
      });

      const chartData = {
        labels: allHours,
        datasets: datasets,
      };

      setChartData(chartData);
    }
  }, [loading, data]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className='chart-trend' style={{ width: '50%' }}>
      <h2 className={`order-card`}>Tendencia últimas 24Hs</h2>
      {loading ? (
        <BounceLoader color='white' className='spinner' />
      ) : (
        chartData && (
          <Line
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: 'Tendencia de las Últimas 24 Horas',
                  color: 'white',
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: 'white',
                  },
                },
                y: {
                  ticks: {
                    color: 'white',
                  },
                },
              },
              elements: {
                point: {
                  radius: 5,
                },
              },
            }}
          />
        )
      )}
    </div>
  );
};

export default TrendChart;
