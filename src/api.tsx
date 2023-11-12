import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-3-144-10-163.us-east-2.compute.amazonaws.com:8080', // Replace with your API URL
  timeout: 10000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json'
  },
});

export default api;
