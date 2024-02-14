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

/*
    data.data.conexions.forEach(element => {
      labels.push(element.module);
      last60secsArray.push(element.last60secs);
    });*/
    //console.log("Elemento: " + datasetArray[0])

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
                "rgba(123, 63, 229, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX",
              data: [last60secsArray[1]],
              backgroundColor: [
                "rgba(66, 217, 173, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "FMU125_TCP",
              data: [last60secsArray[2]],
              backgroundColor: [
                "rgba(242, 194, 59, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX2",
              data: [last60secsArray[3]],
              backgroundColor: [
                "rgba(242, 99, 73, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_MONSANTO",
              data: [last60secsArray[4]],
              backgroundColor: [
                "rgba(53, 174, 217, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_LEDESMA",
              data: [last60secsArray[5]],
              backgroundColor: [
                "rgba(155, 127, 218, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_VITRAN",
              data: [last60secsArray[6]],
              backgroundColor: [
                "rgba(101, 226, 214, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "GESTYAR02",
              data: [last60secsArray[7]],
              backgroundColor: [
                "rgba(246, 166, 201, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "FMU125",
              data: [last60secsArray[8]],
              backgroundColor: [
                "rgba(100, 212, 182, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_SMART",
              data: [last60secsArray[9]],
              backgroundColor: [
                "rgba(251, 168, 162, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "FMU125_V2",
              data: [last60secsArray[10]],
              backgroundColor: [
                "rgba(234, 127, 134, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "RINHO",
              data: [last60secsArray[11]],
              backgroundColor: [
                "rgba(43, 63, 229, 0.3)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "GESTYAR02_3456",
              data: [last60secsArray[12]],
              backgroundColor: [
                "rgba(227, 160, 221, 0.8)",
              ],
              borderRadius: 5,
            },
            {
              label: "TRAX_3555",
              data: [last60secsArray[13]],
              backgroundColor: [
                "rgba(223, 129, 218, 0.8)",
              ],
              borderRadius: 5,
            }],
          }}
          options={
          {
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
            scales: {
              y:
                {
                  ticks: {
                    stepSize: 5,
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
