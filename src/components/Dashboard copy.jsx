import React from 'react';

const TeamCard = ({ team }) => {
  // Extract information from the team object
  const { module, port, fecha, hora, last10secs, last60secs } = team;

  // Determinar el color de fondo según el valor de last60secs
  let cardColorClass = 'bg-c-blue';
  if (last60secs === 0) {
    cardColorClass = 'bg-c-pink';
  } else if (last60secs > 1 && last60secs <= 10) {
    cardColorClass = 'bg-c-yellow';
  } else if (last60secs > 10) {
    cardColorClass = 'bg-c-green';
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
