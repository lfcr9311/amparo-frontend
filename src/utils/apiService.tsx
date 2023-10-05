// src/api-service.ts
import axios from '../api';

export const login_post = async (email: String, psw:String) => {
  const loginBody = {
    email: email,
    password: psw
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
      headers:{
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbXBhcm8tYXBpIiwic3ViIjoiZDAzYTMwY2UtMjBmZC00ZDM2LWIwNTEtMjMwYzU1ZmNkZmU1Iiwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sImVtYWlsIjoibGVvQGVtYWlsLmNvbSIsIm5hbWUiOiJMZW8gdGlrdG9rZXIiLCJleHAiOjE2OTY0ODIzNjh9.4yuePJomwVVIoLTEsMh5qRUbydQxRDNe6OEI6yKyMLc'
      }
    }); // Replace with your endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};
