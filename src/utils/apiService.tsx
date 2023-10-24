// src/api-service.ts
import axios from '../api';

export const login_post = async (email: String, psw: String) => {
  const loginBody = {
    email: email,
    password: psw,
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
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbXBhcm8tYXBpIiwic3ViIjoiMjk4NDBhMzAtMWYwYS00NGQzLWI5ZDMtMzNkOTRiNWQ0MGQ4Iiwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sImVtYWlsIjoiZW1haWxkb3BhdWxvQGVtYWlsLmNvbS5iciIsIm5hbWUiOiJQYXVsbyBFZHVhcmRvIEdvbWVzIFNpbHZhIFNvdXphIExpbWEgQ29zdGEgZGEgU2lsdmEgZGUgTGltYSBkYSBDb3N0YSIsImV4cCI6MTY5Nzg2NTI5Mn0.TYcJApsY8HjGDbZNS_ZYW5o5s73tVPUhNSTS7MC6xFg',
      },
    }); // Replace with your endpoint
    console.log(response.data);
    
    return response;
  } catch (error) {
    throw error;
  }
};
