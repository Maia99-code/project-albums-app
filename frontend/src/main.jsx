import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Asegúrate de tener tus estilos aquí

// Asegúrate de que el DOM esté completamente cargado antes de intentar renderizar
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('No se encontró el elemento root.');
}
