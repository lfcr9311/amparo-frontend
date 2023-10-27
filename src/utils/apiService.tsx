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
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbXBhcm8tYXBpIiwic3ViIjoiNDNiM2Y0NzQtZGJlMy00NzI4LWIzNWYtZTU5NDcxMTRmYzgxIiwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJuYW1lIjoidGVzdCIsImV4cCI6MTY5ODM2ODQ4OX0.H9-Or3Xdxx5CzQuwQ0R3jSxQ80bjmVw7DkE0HktaET8'
      }
    }); // Replace with your endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (name: String, cellphone: String, cpf: String, profilePicture: String, email: String, birthDate: String, nroSus: String) => {
  console.log({ name, cellphone, cpf, profilePicture, email, birthDate, numSus: nroSus} )
  try {
    const response = await axios.put('/patient', { name, cellphone, cpf, profilePicture, email, birthDate, numSus: nroSus} , {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbXBhcm8tYXBpIiwic3ViIjoiNDNiM2Y0NzQtZGJlMy00NzI4LWIzNWYtZTU5NDcxMTRmYzgxIiwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJuYW1lIjoidGVzdCIsImV4cCI6MTY5ODM2ODQ4OX0.H9-Or3Xdxx5CzQuwQ0R3jSxQ80bjmVw7DkE0HktaET8'
      }
    });
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}
