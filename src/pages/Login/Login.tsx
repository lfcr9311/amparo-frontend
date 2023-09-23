import React, { useEffect, useState } from 'react';
import Logo from '../../assets/amparo.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Textfield from '../../components/Textfield/Textfield';
import CustomButton from '../../components/Button/Button';
import { getSomeData } from '../../utils/apiService';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);
  const navigate = useNavigate();
  const [data, setData] = useState<String>();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  useEffect(() => {
    async function fetchData() {
      try{
        
        const result = await getSomeData();
        console.log(result);
        setData(result);
      } catch (error){
        console.error('Erro ao fazer login', error);
      }
    }

    fetchData();
  }, []);
  const handleEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePassword = (newPassword: string) => {
    setPassword(newPassword);
    setClicked(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setErro('Por favor, insira um e-mail válido.');
      return;
    }
    setErro('');
    navigate('/home/paciente');
    console.log('Email:', email, 'Senha:', password);
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
            onClick={() => setClicked(!clicked)}
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
