// src/api-service.ts
import axios from '../api';
import api from '../api';

interface Doctor {
  cellphone: string;
  crm?: string;
  email?: string;
  id?: string;
  isAnonymous?: boolean;
  name?: string;
  profilePicture?: string;
  uf?: string;
}

export const login_post = async (email: String, psw: String) => {
  const loginBody = {
    email: email,
    password: psw,
  };
  try {
    const response = await axios.post('/auth/login', JSON.stringify(loginBody));
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUserId = () => {
  const currentToken = localStorage.getItem('authToken')
  const bodyPart:string = currentToken?.split('.')[1]!!
  const body = JSON.parse(atob(bodyPart))
  return body.sub
}

export const getDosage = async (dosageId: string) => {
  try {
    const response = await axios.get(`/dosage/${dosageId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const putEditDosage = async (
  dosageId: string,
  medicineId: number,
  quantity: string,
  frequency: string,
  finalDate: string
) => {
  const dosageEditBody = {
    medicineId: medicineId,
    quantity: quantity,
    frequency: frequency,
    finalDate: new Date(finalDate).toISOString(),
  };

  try {
    const response = await axios.put(`/dosage/${dosageId}`, dosageEditBody, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDosage = async (dosageId: string) => {
  try {
    const response = await axios.delete(`/dosage/${dosageId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const saveDosage = async ({
  medicineId,
  quantity,
  frequency,
  finalDate,
}: any) => {
  const dosage = {
    quantity,
    frequency,
    finalDate: finalDate ? new Date(finalDate).toISOString() : undefined,
    initialHour: new Date().toISOString(),
  };
  const response = await axios.post(`/dosage/${medicineId}`, dosage, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken'),
    },
  });
  return response.data;
};

export const getAllInformations = async () => {
  const response = await axios.get('/information', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken'),
    }
  })
  return response.data
}

export const editDosage = async ({
  dosageId,
  medicineId,
  quantity,
  frequency,
  finalDate,
  lastConsumedDate,
}: any) => {
  const dosageToUpdate = {
    medicineId,
    quantity,
    frequency,
    finalDate,
    lastConsumedDate,
  };
  const response = await axios.put(`/dosage/${dosageId}`, dosageToUpdate, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken'),
    },
  });
  return response.data;
};

export const getAllDosages = async () => {
  const response = await axios.get('/dosage', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken'),
    },
  });
  return response.data;
};

export const getAllMedicines = async () => {
  const response = await axios.get('/medicine', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken'),
    },
  });
  return response.data;
};

export const getIncompatibilyList = async (medicineId: number) => {
  try {
    const response = await axios.get(
      `/medicine/incompatibility/${medicineId}`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    );
    return response.data.map((incompability: any) => ({
      name: incompability.name,
      status: incompability.incompatibility,
    }));
  } catch (error) {
    throw error;
  }
};

export const isLogged = async () => {
  try {
    const response = await axios.get('/auth/valid', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (
  name: String,
  cellphone: String,
  cpf: String,
  profilePicture: String,
  email: String,
  birthDate: String,
  nroSus: String
) => {
  try {
    const response = await axios.put(
      '/patient',
      {
        name,
        cellphone,
        cpf,
        profilePicture,
        email,
        birthDate,
        numSus: nroSus,
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getExamesPendente = async () => {
  try {
    const response = await axios.get(`/patient/exam/pending`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPacienteExames = async (patientId: string) => {
  try {
    const response = await axios.get(`/doctor/exams/${patientId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getExamesRealizados = async () => {
  try {
    const response = await axios.get(`/patient/exam/done`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPatient = async () => {
  console.log('getting patient');

  try {
    const response = await axios.get('/patient', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const getDoctor = async () => {
  console.log('getting doctor');

  try {
    const response = await axios.get('/doctor', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
export const registerDoctor = async (
  email: String,
  name: String,
  password: String,
  cellphone: String,
  userType: String,
  crm: String,
  uf: String
) => {
  const registerBody = {
    email: email,
    name: name,
    password: password,
    cellphone: cellphone,
    userType: userType,
    crm: crm,
    uf: uf,
  };
  try {
    const response = await axios.post(
      '/auth/register',
      JSON.stringify(registerBody)
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (
  email: String,
  name: String,
  password: String,
  cellphone: String | null,
  userType: String,
  cpf: String,
  numSus: String | null,
  birthDate: String
) => {
  const registerBody = {
    email: email,
    name: name,
    password: password,
    cellphone: cellphone,
    cpf: cpf,
    userType: userType,
    numSus: numSus,
    birthDate: birthDate,
  };
  try {
    const response = await axios.post(
      '/auth/register',
      JSON.stringify(registerBody)
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const addExamePendente = async (
  description: String,
  examDate: string
) => {
  const body = {
    description: description || null,
    examDate: examDate + 'T04:20:00.000',
    isDone: false,
    file: null,
    image: null,
  };
  try {
    const response = await axios.post(`/patient/exam`, body, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMedicamentosPaciente = () => {
  return axios
    .get('/medicine', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const fetchMeusPacientes = () => {
  return axios
    .get('/link/pacient', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const fetchMeusMedicos = () => {
  const authToken = localStorage.getItem('authToken');
  return axios
    .get('/link/doctor', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
export const addExameRealizado = async (
  description: String,
  examDate: string,
  image: string | null,
  file: string | null
) => {
  const body = {
    description: description || null,
    examDate: examDate + 'T04:20:00.000',
    isDone: true,
    file: file || null,
    image: image || null,
  };
  try {
    const response = await axios.post(`/patient/exam`, body, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const addFileOrImage = async (file: File | null) => {
  const body = {
    file: file || null,
  };
  //console.log("adding file...", file);
  try {
    const response = await axios.post(`file/upload`, body, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        'Content-Type': 'multipart/form-data',
      },
    }); // Replace with your endpoint
    console.log('adding file...', response.data.url);

    return response;
  } catch (error) {
    throw error;
  }
};
export const editExamesPendente = async (
  description: string,
  examDate: string,
  isDone: boolean,
  examId: string
) => {
  const body = {
    description: description,
    examDate: examDate + 'T04:20:00.000',
    isDone: isDone,
    file: null,
    image: null,
  };
  try {
    const response = await axios.put(`/patient/exam/${examId}`, body, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const editExamesRealizados = async (
  description: string,
  examDate: string,
  isDone: boolean,
  file: string,
  image: string,
  examId: string
) => {
  const body = {
    description: description,
    examDate: examDate + 'T04:20:00.000',
    isDone: isDone,
    file: file || null,
    image: image || null,
  };
  try {
    const response = await axios.put(`/patient/exam/${examId}`, body, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const searchDoctor = async (crm: string, uf: string) => {
  try {
    const response = await axios.get(`/doctor/crm/${crm}/uf/${uf}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    }); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchInformacao = async () => {
  try {
    const response = await axios.get(`/information`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addDoctor = async (doctorId: string) => {
  try {
    const response = await axios.post(
      `/link/to/doctor/${doctorId}`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    ); // Replace with your endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const addInformation = async (
  title: string,
  description: string,
  link: string
) => {
  try {
    const body = {
      title: title || null,
      description: description || null,
      link: link || null,
    };

    const response = await axios.post(`/information`, body, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const showAllInformation = async () => {
  try {
    const response = await axios.get(`/information`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const findByTitle = async (title: string) => {
  try {
    const response = await axios.get(`/information/title/${title}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const findInformationById = async (informationId: string) => {
  try {
    const response = await axios.get(`/information/${informationId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateInformation = async (
  informationId: string,
  title: string,
  description: string,
  link: string
) => {
  try {
    const response = await axios.put(
      `/information/${informationId}`,
      { title, description, link },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const findAllDoctor = async () => {
  try {
    const response = await axios.get(`/doctor`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken'),
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export const updateDoctor = async (
  name: string,
  uf: string,
  crm: string,
  newPhone?: string,
  doctor?: Doctor
) => {
  try {
    await api.put(
      '/doctor',
      {
        name: name !== '' ? name : doctor?.name,
        uf: uf !== '' ? uf : doctor?.uf,
        crm: crm !== '' ? crm : doctor?.crm,
        cellphone: newPhone !== '' ? newPhone : doctor?.cellphone,
        email: doctor?.email,
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    );
  } catch (error) {
    throw error;
  }
};
