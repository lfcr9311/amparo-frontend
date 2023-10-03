// src/api-service.ts
import axios from '../api';

export const getSomeData = async (email: String, psw:String) => {
  const loginBody = {
    email: email,
    password: psw
  }; 
  try {
    const response = await axios.post('/auth/login', JSON.stringify(loginBody)); // Replace with your endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get('/patient', {
      headers:{
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbXBhcm8tYXBpIiwic3ViIjoiZWNmODQ4ZjctZTRjNi00YmIwLWE3MzgtYTk1MzA4ZmNlMTY4Iiwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sImVtYWlsIjoibWFydGluQGVtYWlsLmNvbSIsIm5hbWUiOiJNYXJ0aW4gVGhlIGdyZWF0ZXN0IiwiZXhwIjoxNjk2MzExOTk5fQ.rQf8g0fHJguuAFauBXt8uU5SIsUdg0aFESx4eDybCNk'
      }
    }); // Replace with your endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};
