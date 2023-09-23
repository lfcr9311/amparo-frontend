import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your API URL
  timeout: 5000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json'
  },
});

export default api;
