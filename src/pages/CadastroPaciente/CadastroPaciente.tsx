import { useState } from 'react';
import Textfield from '../../components/Textfield/Textfield';
import Button from '../../components/Button/Button';
import Logo from '../../assets/amparo.svg';
import cpf from 'cpf';
import './CadastroPaciente.css';
import { ROUTES } from '../../routes/constans';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/apiService';

export const CadastroPaciente = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [cpfValue, setCpfValue] = useState<string>('');
  const [isValidCpf, setIsValidCpf] = useState<boolean>(true);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidName, setIsValidName] = useState<boolean>(true);
  const [isValidDate, setIsValidDate] = useState<boolean>(true);
  const [isValidPsw, setIsValidPsw] = useState<boolean>(true);
  // @ts-ignore
  const [data, setData] = useState<String>();
  // @ts-ignore
  const [dataStatus, setDataStatus] = useState<Number>();
  // @ts-ignore
  const [erro, setErro] = useState<string>('');
  const [formattedDate, setFormattedDate] = useState<string>('');
  const navigate = useNavigate();

  const buttonCLick = () => {

    if (password === confirmPassword) {
      setValidPassaword(true);
    } else {
      setValidPassaword(false);
    }
    if (cpf.isValid(cpfValue)) {
      setIsValidCpf(true);
    } else {
      setIsValidCpf(false);
    }
    if (name == '') {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
    if (email == '') {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
    if (date == '') {
      setIsValidDate(false);
    } else {
      setIsValidDate(true);
    }
    if (password == '') {
      setIsValidPsw(false);
    } else {
      setIsValidPsw(true);
    }

    console.log(email, name, password, cpfValue, formattedDate);

    if (isValidName && isValidEmail && validPassword && cpf.isValid(cpfValue)) {
      fetchData(email, name, password, "111111111", cpfValue, "123456789123456", formattedDate);
      return;
    }
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    setIsValidEmail(emailRegex.test(input));
  };

  async function fetchData(email: String, name: String, password: String, cellPhone: String, cpf: String, numSus: String, birthDate: String) {

    await registerUser(email, name, password, cellPhone, "PATIENT", cpf, numSus, birthDate).then((result) => {
      setData(result.data);
      setDataStatus(result.status);
      console.log(result.data);
      console.log("Status " + result.status);

      if (result.status == 201 || result.status == 200) {
        console.log('cadastro realizado com sucesso');
        navigate(ROUTES.LOGIN());
      }

    }).catch((erro) => {

      if (erro.response && erro.response.status === 400) {
        setErro(erro);
        //componente de erro abaixo:
        console.error('Erro 400: O servidor encontrou um erro interno.');
        console.error(erro);
      }
      else {
        console.error('Erro inesperado:', erro);
      }
    })
  }

  const validateDate = (input: string) => {

    const parts = input.split('-');

    if (parts.length === 3) {
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      setFormattedDate(`${day}/${month}/${year}`);

      const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      const match = formattedDate.match(dateRegex);

      if (match) {
        setIsValidDate(true);
      } else {
        setIsValidDate(false);
      }
    } else {
      setIsValidDate(false);
    }

  };

  const handleName = (newName: string) => {
    setName(newName);
  };

  const handleEmail = (newEmail: string) => {
    const inputValue = newEmail;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const handleDate = (newDate: string) => {
    const inputValue = newDate;
    validateDate(inputValue);
    setDate(inputValue);
  };

  const handleCpf = (newCpf: string) => {
    setCpfValue(newCpf);
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
      <img className="img-logo" src={Logo} /> <br />
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
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            value={email}
            error={!isValidEmail}
            helperText={!isValidEmail ? 'Email inválido' : ''}
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
            error={!isValidDate}
            helperText={!isValidDate ? 'Data inválida' : ''}
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
            error={!validPassword || !isValidPsw}
            helperText={!isValidPsw ? 'Insira uma senha' : !validPassword ? 'Senha não correspondentes' : ''}
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

