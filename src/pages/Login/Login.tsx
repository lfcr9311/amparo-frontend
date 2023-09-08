import React, { useState } from 'react';
import Textfield from '../../components/Header/Textfield';
import Button from '../../components/Header/Button';
import Logo from '../../assets/amparo.svg'; // Ajuste o caminho conforme necessário
import './Login.css';

export const TelaLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erro, setErro] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handlePassword = (newPassword: string) => {
    setPassword(newPassword);
    setClicked(false);
  };

  const handleSubmit = () => {
    if (!emailRegex.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }
    setErro("");
    console.log("Email:", email, "Senha:", password);
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="Logo Amparo" />
      <form onSubmit={handleSubmit}>
        <div className="components-container">
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            value={email}
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={handlePassword}
            value={password}
          />
          {erro && <p style={{ color: 'red' }}>{erro}</p>}
          <Button
            margin-bottom="20px"
            variant="contained"
            label="Entrar"
            onClick={() => setClicked(!clicked)}
          />
        </div>
      </form>
    </div>
  );
}
