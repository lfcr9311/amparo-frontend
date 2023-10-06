// authService.js

import { isLogged } from "./apiService";

export const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    return getUser(String(token));
}
async function getUser(token:String) {
    try{
      const result = await isLogged(token);
      // console.log(result.data);
      // console.log("Status " +result.status);
      if(result.status== 201 ||result.status== 200)
      {
          console.log("user está autenticado");
         return true
      }
      else return false      
    } catch (error){
      console.error('Erro ao fazer login', error);
    }
  }