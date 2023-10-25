// authService.js

import { isLogged } from "./apiService";

export const isLoggedIn = async () => {
    const token = localStorage.getItem('authToken');
    console.log(token);
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