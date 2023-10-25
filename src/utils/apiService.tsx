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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbXBhcm8tYXBpIiwic3ViIjoiNDNiM2Y0NzQtZGJlMy00NzI4LWIzNWYtZTU5NDcxMTRmYzgxIiwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJuYW1lIjoidGVzdCIsImV4cCI6MTY5ODIwNTk2NX0.vpgY6Nc8_vMZ_-xjMr_TKN1iY_y2WNaoKe4MczfBJA0'
      }
    }); // Replace with your endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (name: String, cellphone: String, cpf: String, profilePicture: String, email: String, ) => {
  try {
    const response = await axios.put('/patient', { name, cellphone, cpf, profilePicture, email} , {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbXBhcm8tYXBpIiwic3ViIjoiNDNiM2Y0NzQtZGJlMy00NzI4LWIzNWYtZTU5NDcxMTRmYzgxIiwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJuYW1lIjoidGVzdCIsImV4cCI6MTY5ODIwNTk2NX0.vpgY6Nc8_vMZ_-xjMr_TKN1iY_y2WNaoKe4MczfBJA0'
      }
    });
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}
