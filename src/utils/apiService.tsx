// src/api-service.ts
import axios from '../api';

export const login_post = async (email: String, psw: String) => {
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

export const getIncompatibilyList = async (medicineId: number) => {
  try {
    const response = await axios.get(`/medicine/incompatibility/${medicineId}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    })
    return response.data.map((incompability: any) => ({ name: incompability.name, status: incompability.severity }))
  } catch (error) {
    throw error;
  }
}


export const isLogged = async () => {
  try {
    const response = await axios.get('/auth/valid', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (name: String, cellphone: String, cpf: String, profilePicture: String, email: String, birthDate: String, nroSus: String) => {
  try {
    const response = await axios.put('/patient', { name, cellphone, cpf, profilePicture, email, birthDate, numSus: nroSus }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    });
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}
export const getExamesPendente = async () => {
  try {
    const response = await axios.get(`/patient/exam/pending`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
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
    const response = await axios.get(`/patient/exam/done`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
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
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
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
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
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

export const registerUser = async (email: String, name: String, password: String, cellphone: String | null, userType: String, cpf: String, numSus: String | null, birthDate: String) => {
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

export const addExamePendente = async (description: String, examDate: string) => {
  const body = {
    description: description || null,
    examDate: examDate + "T04:20:00.000",
    isDone: false,
    file: null,
    image: null
  };
  try {
    const response = await axios.post(`/patient/exam`, body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchMeusMedicos = () => {
  const authToken = localStorage.getItem('authToken');
  return axios.get('/link/doctor', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    console.error(error);
    throw error;
  });
};
export const addExameRealizado = async (description: String, examDate: string, image: string | null, file: string | null) => {
  const body = {
    description: description || null,
    examDate: examDate + "T04:20:00.000",
    isDone: true,
    file: file || null,
    image: image || null
  };
  try {
    const response = await axios.post(`/patient/exam`, body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const addFileOrImage = async (file: File | null) => {
  const body = {
    file: file || null
  };
  try {
    const response = await axios.post(`file/upload`, body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken"),
        "Content-Type": "multipart/form-data"
      }
    }); // Replace with your endpoint
    console.log("adding file...", response.data.url);

    return response;
  } catch (error) {
    throw error;
  }
};
export const editExamesPendente = async (description: string, examDate: string, isDone: boolean, examId: string) => {
  const body = {
    description: description,
    examDate: examDate + "T04:20:00.000",
    isDone: isDone,
    file: null,
    image: null
  };
  try {
    const response = await axios.put(
      `/patient/exam/${examId}`,
      body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    }
    );  // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const editExamesRealizados = async (description: string, examDate: string, isDone: boolean, file: string, image: string, examId: string) => {
  const body = {
    description: description,
    examDate: examDate + "T04:20:00.000",
    isDone: isDone,
    file: file || null,
    image: image || null
  };
  try {
    const response = await axios.put(
      `/patient/exam/${examId}`,
      body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    }
    );  // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const searchDoctor = async (crm: string, uf: string) => {
  try {
    const response = await axios.get(`/doctor/crm/${crm}/uf/${uf}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    },
    );  // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
}

export const addDoctor = async (doctorId: string) => {
  try {
    const response = await axios.post(`/link/to/doctor/${doctorId}`, {}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("authToken")
      }
    },
    );  // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
}
