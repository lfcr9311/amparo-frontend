import { useState } from 'react';
import Textfield from '../../components/Textfield/Textfield';
import Button from '../../components/Button/Button';
import Logo from '../../assets/amparo.svg';
import cpf from 'cpf';
import './CadastroPaciente.css';
import { ROUTES } from '../../routes/constans';
import { useNavigate } from 'react-router-dom';
import  {registerUser } from '../../utils/apiService';

export const CadastroPaciente = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [cpfValue, setCpfValue] = useState<string>('');
  const [isValidCpf, setIsValidCpf] = useState<boolean>(true);
  const [cpfTouched, setCpfTouched] = useState<boolean>(false);
  const [pswTouched, setPswTouched] = useState<boolean>(false);
  const [data, setData] = useState<String>();
  const [dataStatus, setDataStatus] = useState<Number>();
  const [erro, setErro] = useState<string>('');
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
    console.log('psw touched ' + pswTouched);
    console.log('cpf touched ' + cpfTouched);
    console.log('cpf correct ' + isValidCpf);
    console.log('psw correct ' + validPassword);

    if (validPassword && pswTouched && cpf.isValid(cpfValue) && (dataStatus == 201 || dataStatus == 200)) {
      fetchData(email, name, password, "111111111", cpfValue, "123456789123456", "23/10/2000");
      return;
    }
  };

  async function fetchData(email: String, name: String, password: String, cellPhone: String, cpf: String, numSus: String, birthDate: String) {

    await  await registerUser(email, name, password, cellPhone, "PATIENT", cpf, numSus, birthDate).then((result) => {

      setData(result.data);
      setDataStatus(result.status);
      console.log(result.data);
      console.log("Status " +result.status);

      if (result.status == 201 || result.status == 200) {
        console.log('cadastro realizado com sucesso');
        navigate(ROUTES.CADASTRO_PACIENTE());
      }

    }).catch((erro) => {

      if (erro.response && erro.response.status === 400) {
        setErro(erro);
        //componente de erro abaixo:
        console.error('Erro 400: O servidor encontrou um erro interno.');
        console.error(erro);
        setErro('Cpf ja existe.');
      }
       else {
        console.error('Erro inesperado:', erro);
      }
        
    })
  }

  const handleName = (newName: string) => {
    setName(newName);
  };

  const handleEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handleDate = (newDate: string) => {
    setDate(newDate);
  };

  const handleCpf = (newCpf: string) => {
    setCpfTouched(true);
    setCpfValue(newCpf);
  };

  const handlePassword = (newPassoword: string) => {
    setPswTouched(true);
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
