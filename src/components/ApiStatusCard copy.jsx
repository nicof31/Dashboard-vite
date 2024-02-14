// ApiStatusCard.jsx
import React from 'react';

const StatusCard = ({ team }) => {
  // Extract information from the team object
  const { fecha, hora } = team;

  // Obtén la fecha y hora actuales
  const fechaActual = new Date();
  const horaActual = fechaActual.toLocaleTimeString();

  // Calcula la diferencia en minutos
  const fechaEquipo = new Date(fecha + ' ' + hora);
  const diferenciaEnMinutos = (fechaActual - fechaEquipo) / (1000 * 60);

  // Establece el estilo de texto según la diferencia de tiempo
  const estiloTexto = {
    color:
      fechaActual.toLocaleDateString() === fecha &&
      horaActual.substring(0, 5) === hora.substring(0, 5)
        ? 'green'
        : diferenciaEnMinutos > 5
        ? 'red'
        : 'inherit', // Utiliza el color predeterminado si no cumple ninguna condición
  };

  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div id='status-card' className={`card order-card bg-c-blue card-auto`}>
        <div className="card-block">
          <h4 id='text-card-status'className="m-b-20 card-status">
            Estado API Cybermapa
          </h4>
          <p id='text-card-status' className="m-b-0 card-status" >
            Fecha: {fecha}
          </p>
          <p id='text-card-status' className="m-b-0 card-status">
            Hora: {hora}
          </p>
          {/* Agregar más información según sea necesario */}
        </div>
      </div>
    </div>
  );
};

const ApiStatusCard = ({ data, loading }) => {
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

export default ApiStatusCard;
