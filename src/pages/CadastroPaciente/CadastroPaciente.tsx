import { useState } from "react";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import Logo from "../../assets/amparo.svg";
import cpf from 'cpf';
import "./CadastroPaciente.css";

export const Cadastro = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassoword, setConfirmPassword] = useState<string>("");
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [cpfValue, setCpfValue] = useState<string>("");
  const [isValidCpf, setIsValidCpf] = useState<boolean>(true);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleName = (newName: string) => {
    setName(newName)
  }
  
  const handleEmail = (newEmail: string) => {
    setEmail(newEmail)
  };

  const handleDate = (newDate: string) => {
    setDate(newDate)
  }

  const handleCpf = (newCpf: string) => {
    setCpfValue(newCpf);
    setClicked(false)
    if (cpf.isValid(newCpf)) {
      setIsValidCpf(true);
    } else {
      setIsValidCpf(false);
    }
  };

  const handlePassword = (newPassoword: string) => {
    setPassword(newPassoword);
    setClicked(false)
  }

  const handleConfirmPassword = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
    setClicked(false)
    if (newConfirmPassword === password) {
      setValidPassaword(true);
    } else {
      setValidPassaword(false);
    }
  }

  return (
    <div className="cadastro-container">
      <img src={Logo} /> <br />
      <a className="frase">Boas-Vindas!</a>
      <form>
        <div className="components-container">
          <Textfield
            label="Nome Completo"
            value={name}
            type="name"
            onChange={handleName}
          />
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            value={email}
          />
          <Textfield
            label="CPF"
            type="text"
            onChange={handleCpf}
            value={cpfValue}
            error={!isValidCpf}
            helperText={!isValidCpf && clicked ? 'CPF inválido' : ''}
          />
          <Textfield
            label="Data de Nascimento"
            type="date"
            onChange={handleDate}
            value={date}
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={handlePassword}
            value={password}
          />
          <Textfield
            label="Confirmar Senha"
            type="password"
            onChange={handleConfirmPassword}
            error={!validPassword}
            helperText={!validPassword && clicked ? 'Senha não correspondentes' : ''}
            value={confirmPassoword}
          />
          <Button
            margin-botton="20px"
            variant="contained"
            label="Cadastrar"
            onClick={() => setClicked(!clicked)}
          />
          <span className="footer">
            Já possui conta? <a href="src/pages/Login.tsx"> Fazer Login</a>
          </span>
        </div>
      </form>
    </div>
  );
};
