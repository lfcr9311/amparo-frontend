import React, { useState } from 'react';
import Logo from '../../assets/Amparo.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import { useNavigate } from 'react-router-dom';
import Textfield from '../../components/Textfield/Textfield';
import CustomButton from '../../components/Button/Button';
import { login_post } from '../../utils/apiService';
import { jwtDecode } from "jwt-decode";

interface decodeBody {
  userId: string,
  roles: Array<String>
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const navigate = useNavigate();
  // @ts-ignore
  const [data, setData] = useState<String>();
  // @ts-ignore
  const [dataStatus, setDataStatus] = useState<Number>();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  async function fetchData(email: String, psw: String) {
    try {
      const result = await login_post(email, psw);
      setData(result.data);
      setDataStatus(result.status);
      localStorage.setItem('authToken', result.data.token);
      const decode = jwtDecode(result.data.token) as decodeBody
      const role = decode.roles
      console.log('Decoded token:', decode);
      console.log('Decoded token:', role[0]);
      if (role[0] == "ROLE_PATIENT")
        navigate(ROUTES.HOME_PACIENTE());
      else navigate(ROUTES.HOME_MEDICO())
    } catch (error) {
      console.error('Erro ao fazer login', error);
      setErro('Email ou senha inválidos.');
    }
  }
  const handleEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }
    setErro('');
    fetchData(email, password);
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="Logo Amparo" />
      <br />
      <a className="frase">Amparo</a>
      <form onSubmit={handleSubmit}>
        <div className="components-container">
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            value={email}
            width="70vw"
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={handlePassword}
            value={password}
            width="70vw"
          />
          {erro && <p style={{ color: 'red' }}>{erro}</p>}
          <CustomButton
            margin-bottom="20px"
            variant="contained"
            label="Entrar"
            type="submit"
          />
        </div>
        <br />
        <div className="links-container">
          <Link to="/esqueceu-senha" className="link-recuperar-senha">
            Esqueceu sua senha?
          </Link>
          <p className="texto-cadastro">
            Ainda não tem conta? <Link to="/identificacao">Cadastre-se!</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
