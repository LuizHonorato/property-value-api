import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://167.172.143.12:3001';

const api = axios.create({
  baseURL: `${apiUrl}/api/properties`,
});

export default api;
