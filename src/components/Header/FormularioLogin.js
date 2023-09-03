import React, { useState } from 'react';
import BotaoEntrar from './BotaoEntrar';

// Componente que representa o formulário de login
const FormularioLogin = () => {
  // Estados para armazenar os valores dos campos de e-mail e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Expressão regular para validar e-mails
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Função para lidar com o envio do formulário
  const enviarFormulario = (e) => {
    e.preventDefault();

    // Verifica se o e-mail é válido usando a expressão regular
    if (!emailRegex.test(email)) {
        setErro("Por favor, insira um e-mail válido.");
        return;
    }

    // Se o e-mail for válido, limpe a mensagem de erro
    setErro("");

    console.log("Email:", email, "Senha:", senha);
  };

  return (
    <form className="form" onSubmit={enviarFormulario}>
      <div className="input-group">
        <label htmlFor="email" className="input-label">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="senha" className="input-label">
          Senha
        </label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input"
        />
      </div>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <BotaoEntrar />
    </form>
  );
};

export default FormularioLogin;
