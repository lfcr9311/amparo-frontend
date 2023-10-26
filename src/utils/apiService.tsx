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
export const getExamesPendente = async () => {
  try {
    const response = await axios.get(`/patient/${localStorage.getItem("userId")}/exam/pending/list`, {
      headers:{
        'Authorization': 'Bearer '+localStorage.getItem("authToken")
      }
    }, 
    );  // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};
export const getExamesRealizados = async () => {
  try {
    const response = await axios.get(`/patient/${localStorage.getItem("userId")}/exam/done/list`, {
      headers:{
        'Authorization': 'Bearer '+localStorage.getItem("authToken")
      }
    }, 
    );  // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};
export const getPatient = async () => {
  console.log("getting patient");
  
  try {
    const response = await axios.get('/patient', {
      headers:{
        'Authorization': 'Bearer '+localStorage.getItem("authToken")
      }
    });
    
    return response;
  } catch (error) {
    throw error;
  }
};
export const getDoctor = async () => {
  console.log("getting doctor");
  
  try {
    const response = await axios.get('/doctor', {
      headers:{
        'Authorization': 'Bearer '+localStorage.getItem("authToken")
      }
    });
    
    return response;
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

export const registerUser = async (email: String, name: String, password: String, cellphone: String, userType: String, cpf: String, numSus: String, birthDate: String) => {
  const registerBody = {
    email: email,
    name: name,
    password: password,
    cellphone: cellphone,
    cpf: cpf,
    userType: userType,
    numSus: numSus, 
    birthDate: birthDate
  }
try {
  const response = await axios.post('/auth/register', JSON.stringify(registerBody));
  return response;
} catch (error) {
  throw error;
}
}

export const addExamePendente = async (description: String, examDate: string ) => {
  const body = {
    description: description,
    examDate: examDate,
    is_done: false,
  }; 
  try {
    const response = await axios.get('/doctor', {
      headers:{
        'Authorization': 'Bearer '+localStorage.getItem("authToken")
      }
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};