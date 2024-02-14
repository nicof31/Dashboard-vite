import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import useAxios from '../hooks/useAxios'
import './BarChart.css'
import  {BounceLoader} from 'react-spinners'

const BarChart = () => {
  const { data, loading } = useAxios('http://localhost:8060/api/cyber/all', true);

  const [datasets, setDatasets] = useState();
  let last60secsArray = [];
  let labels = []
  let dataset = []


  if (loading == false) {
     console.log(data);
     console.log(data.data.datosAll);

    data.data.datosAll[0].data.conexions.forEach((element) => {
      labels.push(element.module);
      last60secsArray.push(element.last60secs);
    });

  }


  return (
    <div className='chart-last60secs'>
      {
        loading ? <BounceLoader color="hsla(180, 100%, 50%, 1)" className='spinner'/> : 
        <>
        <h2 className={` order-card `}>Equipos reportando últimos 60 segundos</h2>
        <Bar 
          data={{
            labels: [[""]],
            datasets: [{
              label: "COLVENCOM",
              data: [last60secsArray[0]],
              backgroundColor: [
                "rgba(247, 69, 141, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX",
              data: [last60secsArray[1]],
              backgroundColor: [
                "rgba(100, 183, 255, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "FMU125_TCP",
              data: [last60secsArray[2]],
              backgroundColor: [
                "rgba(255, 204, 0, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX2",
              data: [last60secsArray[3]],
              backgroundColor: [
                "rgba(255, 102, 0, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_MONSANTO",
              data: [last60secsArray[4]],
              backgroundColor: [
                "rgba(51, 204, 255, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_LEDESMA",
              data: [last60secsArray[5]],
              backgroundColor: [
                "rgba(255, 153, 204, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_VITRAN",
              data: [last60secsArray[6]],
              backgroundColor: [
                "rgba(0, 204, 102, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "GESTYAR02",
              data: [last60secsArray[7]],
              backgroundColor: [
                "rgba(255, 204, 0, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "FMU125",
              data: [last60secsArray[8]],
              backgroundColor: [
                "rgba(0, 204, 153, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_SMART",
              data: [last60secsArray[9]],
              backgroundColor: [
                "rgba(255, 153, 51, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "FMU125_V2",
              data: [last60secsArray[10]],
              backgroundColor: [
                "rgba(255, 80, 80, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "RINHO",
              data: [last60secsArray[11]],
              backgroundColor: [
                "rgba(75, 0, 130, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "GESTYAR02_3456",
              data: [last60secsArray[12]],
              backgroundColor: [
                "rgba(153, 0, 153, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_3555",
              data: [last60secsArray[13]],
              backgroundColor: [
                "rgba(102, 0, 102, 0.8)", // Cambio de color a fluor
              ],
              borderRadius: 5,
            }],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
                color: 'white',
              },
              legend: {
                labels: {
                  color: 'white',
                },
              },
            },
            scales: {
              y: {
                ticks: {
                  stepSize: 5,
                  color: 'white',
                },
              },
            }
          }}
        />
        </>
      }
    </div>
  )
};

export default BarChart;
