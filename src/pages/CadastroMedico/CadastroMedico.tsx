import { useState } from 'react';
import Textfield from '../../components/Textfield/Textfield';
import Button from '../../components/Button/Button';
import Logo from '../../assets/amparo.svg';
import './CadastroMedico.css';
import SelectComponent from '../../components/Select/Select';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import  {registerDoctor } from '../../utils/apiService';

export const CadastroMedico = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [crm, setCrm] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [data, setData] = useState<String>();
  const [dataStatus, setDataStatus] = useState<Number>();
  const [erro, setErro] = useState<string>('');
  const [isValidCrm, setIsValidCrm] = useState<boolean>(true);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidName, setIsValidName] = useState<boolean>(true);
  const [isValidCell, setIsValidCell] = useState<boolean>(true);
  const [isValidPsw, setIsValidPsw] = useState<boolean>(true);;
  const navigate = useNavigate();

  const buttonCLick = () => {
    
    if (password == confirmPassword) {
      setValidPassaword(true);
    } else {
      setValidPassaword(false);
    }
    if (crm == '') {
      setIsValidCrm(false);
    } else {
      setIsValidCrm(true);
    }
    if (name == ''){
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
    if (email == '') {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
    if (telefone == ''){
      setIsValidCell(false);
    } else {
      setIsValidCell(true);
    }
    if (password == ''){
      setIsValidPsw(false);
    } else {
      setIsValidPsw(true);
    }

    console.log(isValidName)
    console.log(isValidEmail)
    console.log(validPassword)
    console.log(isValidCrm)
    console.log(dataStatus)

    if (isValidName && isValidEmail && validPassword && isValidCrm && (dataStatus == 201 || dataStatus == 200)) {
      fetchData(email, name, password, telefone, "DOCTOR", crm, state);
      navigate(ROUTES.HOME_MEDICO());
      return;
    }
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    setIsValidEmail(emailRegex.test(input));
  };

  async function fetchData(email: String, name: String, password: String, cellPhone: String, userType: String, crm: String, uf: String) {

    await registerDoctor(email, name, password, cellPhone, userType, crm, uf).then( (result) => {
      setData(result.data);
      setDataStatus(result.status);
      console.log("Status " + result.status);
      if (result.status == 201 || result.status == 200) {
        console.log('cadastro realizado com sucesso');
      }
    })
    .catch((erro) => {
      if (erro.response && erro.response.status === 500) {
        setErro(erro);
        //componente de erro abaixo:
        console.error('Erro 500: O servidor encontrou um erro interno.');
      }
       else {
        console.error('Erro inesperado:', erro);
      }
    })

  }

  const handleName = (newName: string) => {
    setName(newName);
  };

  const handleState = (newState: PointerEvent) => {
    const targetElement = newState.target as HTMLInputElement;

    const targetValue = targetElement.value;
    console.log(targetValue);
    setState(targetValue);
  };

  const validateCrm = (input: string) => {
    if (input.length === 6){
      setIsValidCrm(true);
    } else {
      setIsValidCrm(false);
    }
  }

  const handleCrm = (newCrm: string) => {
      validateCrm(newCrm);
      setCrm(newCrm);
  };

  const handleEmail = (newEmail: string) => {
    const inputValue = newEmail;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const handleTelefone = (newTelefone: string) => {
    setTelefone(newTelefone);
  };

  const handlePassword = (newPassoword: string) => {
    setPassword(newPassoword);
  };

  const handleConfirmPassword = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
  };

  const handleClickFazerLogin = () => {
    navigate(ROUTES.LOGIN());
  };

  return (
    <div className="cadastro-container">
      <img className="image-logo" src={Logo} /> <br />
      <a className="frase">Boas-Vindas!</a>
      <form>
        <div className="components-container">
          <Textfield
            label="Nome Completo"
            value={name}
            type="name"
            error={!isValidName}
            onChange={handleName}
            helperText={!isValidName ? 'Insira um nome' : ''}
          />
          <div className="crm-state-container">
            <SelectComponent label="UF" value={state} onChange={handleState} />
            <Textfield
              label="CRM"
              type="text"
              value={crm}
              error = {!isValidCrm}
              helperText={!isValidCrm ? 'Insira um CRM correto' : ''}
              onChange={handleCrm}
              width="233px"
            />
          </div>
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            error={!isValidEmail}
            helperText= {!isValidEmail ? 'Email inválido' : ''}
            value={email}
          />
          <Textfield
            label="Telefone"
            type="text"
            onChange={handleTelefone}
            error={!isValidCell}
            helperText= {!isValidCell ? 'Telefone inválido' : ''}
            value={telefone}
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={handlePassword}
            error={!isValidPsw}
            value={password}
            helperText={!isValidPsw ? 'Insira uma senha' : ''}
          />
          <Textfield
            label="Confirmar Senha"
            type="password"
            onChange={handleConfirmPassword}
            error={!validPassword}
            helperText={ !isValidPsw ? 'Insira uma senha' : !validPassword ? 'Senha não correspondentes' : ''}
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
          Já possui conta?{' '}
          <a
            style={{ textDecoration: 'underline' }}
            onClick={handleClickFazerLogin}
          >
            {' '}
            Fazer Login
          </a>
        </span>
      </form>
    </div>
  );
};
