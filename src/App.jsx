import React, { useEffect } from 'react';
import ApiStatusCard from './components/ApiStatusCard'
import Dashboard from './components/Dashboard';
import BarChart from './components/BarChart';
import Trend from './components/Trend';
import TrendChart from './components/TrendChart';
import PieChart from './components/PieChart';
import EqStatusCard from './components/EqStatusCard';
import useAxios from './hooks/useAxios';
import EqStatusOfflineCard from './components/EqStatusOfflineCard';
import EqStatusOnlineCard from './components/EqStatusOnlineCard';
import EqStatusEmnyfiCard from './components/EqStatusEmnyfiCard';
import EqStatusPersonalCard from './components/EqStatusPersonalCard';
import EqStatusMovistarCard from './components/EqStatusMovistarCard';
import EqStatusClaroCard from './components/EqStatusClaroCard';
import { BounceLoader } from 'react-spinners';
import './App.css';

function App() {
  const { data, loading } = useAxios('http://localhost:8060/api/cyber/all', true);

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(); // Recargar la página cada 90 segundos
    }, 90000); // 90 segundos * 1000 milisegundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <BounceLoader color="hsla(180, 100%, 50%, 1)" className="spinner" />
        ) : (
          <>
             <div className="dashboard-chart-container">
                <div className="card-container">
                  <ApiStatusCard data={data} loading={loading} />
                  <EqStatusCard data={data} loading={loading} />
                  <EqStatusOnlineCard data={data} loading={loading} />
                  <EqStatusOfflineCard data={data} loading={loading} />
                </div>
                <div className="card-container">
                  <EqStatusPersonalCard data={data} loading={loading} />
                  <EqStatusMovistarCard data={data} loading={loading} />
                  <EqStatusClaroCard data={data} loading={loading} />
                  <EqStatusEmnyfiCard data={data} loading={loading} />
                </div>

            </div>
            <div className="dashboard-chart-container">
              <Dashboard data={data} loading={loading} />
              <BarChart />
            </div>
            <Trend />

            <div className="dashboard-chart-container-grafico">
              <TrendChart />
            </div>
            
          </>
        )}
      </div>
    </>
  );
}  

export default App;
