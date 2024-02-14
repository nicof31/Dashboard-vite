import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import useAxios from '../hooks/useAxios';
import { BounceLoader } from 'react-spinners';

const PieChart = () => {
  const { data, loading } = useAxios('http://localhost:8060/api/cyber/all', true);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!loading && data) {
      const last60secsArray = [];
      const labels = [];
      data.data.datosAll[0].data.conexions.forEach((element) => {
        labels.push(element.module);
        last60secsArray.push(element.last60secs);
      });

      setChartData({
        labels: labels,
        datasets: [{
          label: 'Equipos reportando últimos 60 segundos',
          data: last60secsArray,
          backgroundColor: [
            'rgba(247, 69, 141, 0.8)', // Cambio de color a fluor
            'rgba(100, 183, 255, 0.8)', // Cambio de color a fluor
            'rgba(255, 204, 0, 0.8)', // Cambio de color a fluor
            'rgba(255, 102, 0, 0.8)', // Cambio de color a fluor
            'rgba(51, 204, 255, 0.8)', // Cambio de color a fluor
            'rgba(255, 153, 204, 0.8)', // Cambio de color a fluor
            'rgba(0, 204, 102, 0.8)', // Cambio de color a fluor
            'rgba(255, 204, 0, 0.8)', // Cambio de color a fluor
            'rgba(0, 204, 153, 0.8)', // Cambio de color a fluor
            'rgba(255, 153, 51, 0.8)', // Cambio de color a fluor
            'rgba(255, 80, 80, 0.8)', // Cambio de color a fluor
            'rgba(75, 0, 130, 0.8)', // Cambio de color a fluor
            'rgba(153, 0, 153, 0.8)', // Cambio de color a fluor
            'rgba(102, 0, 102, 0.8)', // Cambio de color a fluor
          ],
          borderWidth: 1,
        }],
      });
    }
  }, [data, loading]);

  return (
    <div className="chart-container">
      {loading ? (
        <BounceLoader color="hsla(180, 100%, 50%, 1)" className="spinner" />
      ) : (
        <div>
          <h2 className="order-card">Equipos reportando últimos 60 segundos</h2>
          {chartData && <Pie data={chartData} />}
        </div>
      )}
    </div>
  );
};

export default PieChart;
