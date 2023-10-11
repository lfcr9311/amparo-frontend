// src/api-service.ts
import axios from '../api';

export const login_post = async (email: String, psw: String) => {
  const loginBody = {
    email: email,
    password: psw,
  };
  try {
    const response = await axios.post('/auth/login', JSON.stringify(loginBody)); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get('/patient', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbXBhcm8tYXBpIiwic3ViIjoiYzM3MzE2MzYtZWExNS00MzI4LTllZTYtNzEwMWM1MzJkNmVhIiwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sImVtYWlsIjoicGFibG8xQGVtYWlsLmNvbS5iciIsIm5hbWUiOiJQYWJsbyIsImV4cCI6MTY5NzAwODUxM30.v6_rBobnUk9q3UAv1g8kpbYkOUe7KlRpe_3luRLbw28',
      },
    }); // Replace with your endpoint
    console.log(response.data);
    
    return response;
  } catch (error) {
    throw error;
  }
};
