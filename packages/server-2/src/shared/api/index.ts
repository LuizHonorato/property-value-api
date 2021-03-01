import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/properties',
});

export default api;
