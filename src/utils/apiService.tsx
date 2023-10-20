// src/api-service.ts
import axios from '../api';

export const login_post = async (email: String, psw:String) => {
  const loginBody = {
    email: email,
    password: psw
  }; 
  try {
    const response = await axios.post('/auth/login', JSON.stringify(loginBody)); 
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

export const registerDoctor = async (email: String, name: String, password: String, cellphone: String, userType: String, crm: String, uf: String) => {
  const registerBody = {
    email: email,
    name: name,
    password: password,
    cellphone: cellphone,
    userType: userType,
    crm: crm,
    uf: uf
  }
try {
  const response = await axios.post('/auth/register', JSON.stringify(registerBody));
  return response;
} catch (error) {
  throw error;
}
}

export const registerUser = async (email: String, name: String, password: String, cellphone: String, userType: String, cpf: String) => {
  const registerBody = {
    email: email,
    name: name,
    password: password,
    cellphone: cellphone,
    cpf: cpf,
    userType: userType,
  }
try {
  const response = await axios.post('/auth/register', JSON.stringify(registerBody));
  return response;
} catch (error) {
  throw error;
}
}