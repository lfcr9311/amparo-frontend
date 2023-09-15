import { useState } from "react";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import Logo from "../../assets/amparo.svg";
import cpf from 'cpf';
import "./CadastroPaciente.css";
import { useNavigate } from 'react-router-dom';


export const CadastroPaciente = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [cpfValue, setCpfValue] = useState<string>("");
  const [isValidCpf, setIsValidCpf] = useState<boolean>(true);
  const [cpfTouched, setCpfTouched] = useState<boolean>(false);
  const [pswTouched, setPswTouched] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const navigate = useNavigate();


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
    console.log("psw touched"+pswTouched);
    console.log("cpf touched"+cpfTouched);
    console.log("cpf correct"+isValidCpf);
    console.log("psw correct"+validPassword);
    
    if(validPassword && isValidCpf && pswTouched && cpfTouched){
      navigate('/home/paciente')
      return;
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
    setCpfTouched(true)
    setCpfValue(newCpf);
  };

  const handlePassword = (newPassoword: string) => {
    setPswTouched(true)
    setPassword(newPassoword);
  }

  const handleConfirmPassword = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
  }
  const handleClickFazerLogin = () =>{
    navigate('/login')
  }

  return (
    <div className="cadastro-container">
      <img className= 'img-logo' src={Logo} /> <br />
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
        <span className="classe-frase-abaixo-cadastrar">
            Já possui conta? <a style={{textDecoration:'underline'}} onClick={handleClickFazerLogin}> Fazer Login</a>
          </span>
      </form>
    </div>
  );
};
