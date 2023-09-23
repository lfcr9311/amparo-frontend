// src/api-service.ts
import axios from '../api';

const loginBody = `{email:"martin@example.com", password:"admin"}`
export const getSomeData = async () => {
  try {
    const response = await axios.post('/auth/login', loginBody); // Replace with your endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

