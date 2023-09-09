import { useState } from "react";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import Logo from "../../assets/amparo.svg";
import cpf from 'cpf';
import "./CadastroPaciente.css";

export const CadastroPaciente = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [cpfValue, setCpfValue] = useState<string>("");
  const [isValidCpf, setIsValidCpf] = useState<boolean>(true);
  const [clicked, setClicked] = useState<boolean>(false);

  const buttonCLick = () => {
    if (password === confirmPassword){
      setValidPassaword(true)
    }else{
      setValidPassaword(false)
    }
    
    if (cpf.isValid(cpfValue)) {
      setIsValidCpf(true);
    } else {
      setIsValidCpf(false);
    }
  }

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
  };

  const handlePassword = (newPassoword: string) => {
    setPassword(newPassoword);
  }

  const handleConfirmPassword = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
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
            helperText={!isValidCpf ? 'CPF inválido' : ''}
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
            helperText={!validPassword ? 'Senha não correspondentes' : ''}
            value={confirmPassword}
          />
          <Button
            margin-botton="20px"
            variant="contained"
            label="Cadastrar"
            onClick={() => buttonCLick()}
          />
        </div>
        <span>
            Já possui conta? <a href="src/pages/Login.tsx"> Fazer Login</a>
          </span>
      </form>
    </div>
  );
};
