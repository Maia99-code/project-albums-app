import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Cambia esto a la URL de tu backend
});

// Interceptor para añadir el token de autorización en las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
