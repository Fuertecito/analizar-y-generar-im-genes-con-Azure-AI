import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppImg() {
  const [imageUrl, setImageUrl] = useState(''); // Estado para almacenar la URL
  const [responseData, setResponseData] = useState(null); // Estado para almacenar la respuesta

  const handleRequestClick = () => {
        if (imageUrl.trim() !== '') { // Verificar si la URL no está vacía
            // URL de la API de Visione artificiale
            const apiUrl =
            "https://imageapp.cognitiveservices.azure.com/computervision/imageanalysis:analyze";


            // Datos de la solicitud
            const requestData = {
                url: imageUrl, // Usar la URL del estado
            };

            // Encabezados de la solicitud
            const headers = {
                "Ocp-Apim-Subscription-Key": "bd6bbd70fbf54239b47d70c7ad224f3e",
                "Content-Type": "application/json",
            };

         // Realizar la solicitud a la API
          axios
            .post(apiUrl, requestData, { headers })
            .then((response) => {
            // Manejar la respuesta del servicio aquí
            setResponseData(response.data); // Almacenar la respuesta en el estado
            })
            .catch((error) => {
            // Manejar errores de la solicitud aquí
            console.error(error);
            });
        }
    };

  const handleInputChange = (event) => {
    setImageUrl(event.target.value); // Actualizar el estado con la URL ingresada
  };
  
  return (
    <>
      <input
        type="text"
        placeholder="Ingrese la URL de la imagen"
        value={imageUrl}
        onChange={handleInputChange}
      />
      <button onClick={handleRequestClick}>Realizar Solicitud</button> {/* Vincular el evento onClick a handleRequestClick */}
      <button onClick={() => setImageUrl('')}>Limpiar URL</button>
      <div>
        {/* Mostrar la respuesta del servicio */}
        {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
      </div>
    </>
  );
}

export default AppImg;
