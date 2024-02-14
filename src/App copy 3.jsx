import React, { useEffect } from 'react';
import ApiStatusCard from './components/ApiStatusCard'
import Dashboard from './components/Dashboard';
import BarChart from './components/BarChart';
import Trend from './components/Trend';
import TrendChart from './components/TrendChart';
import useAxios from './hooks/useAxios';
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
            <ApiStatusCard data={data} loading={loading} />
            <Dashboard data={data} loading={loading} />
            <BarChart />
            <Trend />
            <TrendChart />
          </>
        )}
      </div>
    </>
  );
}

export default App;
