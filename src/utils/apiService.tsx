// src/api-service.ts
import axios from '../api';

export const getSomeData = async () => {
  try {
    const response = await axios.get('/auth/login'); // Replace with your endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

