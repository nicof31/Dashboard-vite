import React from 'react';

const StatusCard = ({ team })  => {
  // Extract information from the team object
  const { fecha, hora } = team;
  console.log('Fecha del equipo:', fecha);
  console.log('Hora del equipo:', hora);

  // Obtén la fecha y hora actuales
  const fechaActual = new Date();
  const horaActual = fechaActual.toLocaleTimeString();
  console.log('Fecha actual:', fechaActual);
  console.log('Hora actual:', horaActual);

  // Calcula la diferencia en minutos entre la hora actual y la hora del equipo
  const fechaEquipo = new Date(fecha + ' ' + hora);
  console.log('Fecha del equipo (combinada):', fechaEquipo);

  const diferenciaEnMilisegundos = fechaActual - fechaEquipo;
  const diferenciaEnMinutos = diferenciaEnMilisegundos / (1000 * 60);
  console.log('Diferencia en minutos:', diferenciaEnMinutos);

  // Determinar el color de fondo según la diferencia de tiempo
  let cardColorClass = 'bg-c-blue';
  if (diferenciaEnMinutos <= 2) {
    cardColorClass = 'bg-c-green'; // Verde si la diferencia es menor o igual a 2 minutos
  } else if (diferenciaEnMinutos <= 6) {
    cardColorClass = 'bg-c-yellow'; // Amarillo si la diferencia es menor o igual a 6 minutos
  } else {
    cardColorClass = 'bg-c-pink'; // Rosa si la diferencia es mayor a 6 minutos
  }

  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div id='status-card' className={`card order-card bg-c-yellow card-auto`}>
        <div className="card-block">
          <h4 id='text-card-status'className="m-b-20 card-status">
          EQUIPOS REPORTANDO SIM EMNYFI
          </h4>
          <p id='text-card-status' className="m-b-0 card-status" >
           TOTAL: 320
          </p>
          {/* Agregar más información según sea necesario */}
        </div>
      </div>
    </div>
  );

};

const EqStatusEmnyfiCard = ({ data, loading }) => {
  const primerEquipo = loading ? null : data.data.datosAll[0].data.conexions[0];

  const estadoApi = !loading && primerEquipo ? 'OK' : 'NO';

  return (
    <div className="Api-Status">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <StatusCard key={0} team={primerEquipo} />
             
        </>
      )}
    </div>
  );
};

export default EqStatusEmnyfiCard;
