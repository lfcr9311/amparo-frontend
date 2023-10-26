// authService.js

import { getDoctor, getPatient, isLogged } from "./apiService";

export const isLoggedIn = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const result = await isLogged();
        if (result.status === 204) {
          console.log("User is authenticated");
          return true;
        }
      } catch (error) {
        localStorage.removeItem("authToken")
        console.error('Error while checking authentication', error);
      }
    }
  
    return false; 
}
export const setUserId = async () => {
   await getPatient().then((response) => {
    if(response.status == 200){
      localStorage.setItem("idUser", response.data.id)
      console.log("userId ", localStorage.getItem("idUser"));
      
    }
  }).catch( async error =>{
    await getDoctor().then((response)=>{
      if(response.status == 200){
          console.log("userId ", localStorage.getItem("idUser"));
          localStorage.setItem("idUser", response.data.id)
        }
      })
    console.error(error)

  })
  
  if(localStorage.getItem("idUser") == null){
    await getDoctor().then((response)=>{
      if(response.status == 200){
          console.log("userId ", localStorage.getItem("idUser"));
          localStorage.setItem("idUser", response.data.id)
        }
      })
  }
}
