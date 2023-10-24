// src/api-service.ts
import axios from '../api';

export const login_post = async (email: String, psw:String) => {
  const loginBody = {
    email: email,
    password: psw
  }; 
  try {
    const response = await axios.post('/auth/login', JSON.stringify(loginBody));  // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const isLogged = async () => {
  try {
    const response = await axios.get('/auth/valid', {
      headers:{
        'Authorization': 'Bearer '+localStorage.getItem("authToken")
      }
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};
