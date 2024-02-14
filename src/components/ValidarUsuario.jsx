import React, { useState } from 'react';
import axios from 'axios';

const ValidarUsaurio = () => {
    const [responseData, setResponseData] = useState(null);

    const postData = async () => {
      try {
        const apiUrl = 'http://localhost:8060/api/cyber/validaruser';
        const postData = {
          action: 'VALIDARUSUARIO',
          user: 'gestyatecnica',
          pwd: 'tecnica05',
        };
  
        const response = await axios.get(apiUrl, postData);
        setResponseData(response.data);
      } catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
      }
    };
  
    return (
      <div>
        <button onClick={postData}>Realizar POST</button>
  
        {responseData && (
          <div>
            <h2>Respuesta del servidor:</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  };
  

export default ValidarUsaurio;
