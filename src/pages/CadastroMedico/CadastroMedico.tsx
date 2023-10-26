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
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [data, setData] = useState<String>();
  const [dataStatus, setDataStatus] = useState<Number>();
  const [erro, setErro] = useState<string>('');
  const [isValidCrm, setIsValidCrm] = useState<boolean>(true);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidName, setIsValidName] = useState<boolean>(true);
  const [isValidPhone, setIsValidPhone] = useState<boolean>(true);
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
    if (phone == ''){
      setIsValidPhone(false);
    } else {
      setIsValidPhone(true);
    }
    if (password == ''){
      setIsValidPsw(false);
    } else {
      setIsValidPsw(true);
    }

    if (isValidName && isValidEmail && validPassword && isValidCrm && (dataStatus == 201 || dataStatus == 200)) {
      fetchData(email, name, password, phone, "DOCTOR", crm, state);
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

  const validatePhone = (input : string) => {
    
    const isNumeric = /^\d+$/.test(input);
    const isPhoneNumberValid = input.length === 11;

    if(isNumeric && isPhoneNumberValid){
      setIsValidPhone(isNumeric && isPhoneNumberValid);
    } else {
      setIsValidPhone(false);
    }

  };

  const handlePhone = (newPhone: string) => {
    const cel = newPhone;
    validatePhone(cel);
    setPhone(cel);
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
            onChange={handlePhone}
            error={!isValidPhone}
            helperText= {!isValidPhone ? 'Telefone inválido' : ''}
            value={phone}
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={handlePassword}
            error={!validPassword || !isValidPsw}
            value={password}
            helperText={!isValidPsw ? 'Insira uma senha' : ''}
          />
          <Textfield
              label="Confirmar Senha"
              type="password"
              onChange={handleConfirmPassword}
              error={!validPassword || !isValidPsw}
              helperText={
              !isValidPsw ? 'Insira uma senha' : !validPassword ? 'Senha não corresponde'
              : ''
            }
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
