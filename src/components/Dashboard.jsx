import React from 'react';

const TeamCard = ({ team }) => {
  // Extract information from the team object
  const { module, port, fecha, hora, last10secs, last60secs } = team;

  // Obtener la hora actual del sistema
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  // Determinar el color de fondo según el valor de last60secs y la hora del día
  let cardColorClass = '';
  if ((currentHour >= 7 && currentHour < 21) || (currentHour === 21 && currentDate.getMinutes() === 0)) {
    if (last60secs === 0) {
      cardColorClass = 'bg-c-pink';
    } else if (last60secs > 0 && last60secs <= 10) {
      cardColorClass = 'bg-c-yellow';
    } else if (last60secs > 10) {
      cardColorClass = 'bg-c-green';
    } else {
      cardColorClass = 'bg-c-blue';
    }
  } else {
    cardColorClass = 'bg-c-blue'; // Horario fuera del rango, usar color azul
  }

  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div id='status-card-modulos' className={`card order-card ${cardColorClass} card-auto`}>
        <div className="card-block">
          <h4 id='text-card-status' className="m-b-20 card-status">
            {module}
          </h4>
          <p id='text-card-status' className="m-b-0 card-status" >
            Port: {port}
          </p>
          <p id='text-card-status' className="m-b-0 card-status">
            Last 10 Seconds: {last10secs}
          </p>
          <p id='text-card-status' className="m-b-0 card-status">
            Last 60 Seconds: {last60secs}
          </p>
          <p id='text-card-status' className="m-b-0 card-status">
            Eq Hablitados: 120
          </p>
          {/* Agregar más información según sea necesario */}
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ data, loading }) => {
  return (
    <div className="dashboard">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.data.datosAll[0].data.conexions.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))
      )}
    </div>
  );
};

export default Dashboard;
