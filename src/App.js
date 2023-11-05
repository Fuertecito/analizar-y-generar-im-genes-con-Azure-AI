import React, { useState } from 'react';
import AppImg from './azure-image-analysis';
function App() {
  // Estado para almacenar la URL de la imagen o la solicitud
  const [inputValue, setInputValue] = useState('');
  
  // Función para manejar cambios en el cuadro de texto
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  // Función para activar el análisis de imágenes
  const handleImageAnalysis = () => {
    // Aquí puedes agregar la lógica para el análisis de imágenes
    // Usando la URL almacenada en 'inputValue'
    // Por ejemplo, puedes enviar una solicitud a un servidor para procesar la imagen.
  }

  // Función para activar la generación de imágenes
  const handleImageGeneration = () => {
    // Aquí puedes agregar la lógica para la generación de imágenes
    // Usando la solicitud almacenada en 'inputValue'
    // Por ejemplo, puedes generar una imagen en base a la solicitud.
  }

  return (
     <div>
      <h1>Aplicación de Análisis y Generación de Imágenes</h1>

      <AppImg/>
      
    </div>
  );
}

export default App;
