import { useState } from 'react';
import Textfield from '../../components/Textfield/Textfield';
import Button from '../../components/Button/Button';
import Logo from '../../assets/amparo.svg';
import './CadastroMedico.css';
import SelectComponent from '../../components/Select/Select';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';

export const CadastroMedico = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [crm, setCrm] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [pswTouched, setpswTouched] = useState<boolean>(false);
  const navigate = useNavigate();

  const buttonCLick = () => {
    if (password === confirmPassword) {
      setValidPassaword(true);
    } else {
      setValidPassaword(false);
    }
    if (pswTouched && pswTouched) {
      navigate(ROUTES.HOME_PACIENTE());
      return;
    }
  };

  const handleName = (newName: string) => {
    setName(newName);
  };

  const handleState = (newState: PointerEvent) => {
    const targetElement = newState.target as HTMLInputElement;

    const targetValue = targetElement.value;
    console.log(targetValue);
    setState(targetValue);
  };

  const handleCrm = (newCrm: string) => {
    setCrm(newCrm);
  };

  const handleEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handleTelefone = (newTelefone: string) => {
    setTelefone(newTelefone);
  };

  const handlePassword = (newPassoword: string) => {
    setPassword(newPassoword);
  };

  const handleConfirmPassword = (newConfirmPassword: string) => {
    setpswTouched(true);
    setConfirmPassword(newConfirmPassword);
  };
  const handleClickFazerLogin = () => {
    navigate('/login');
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
            onChange={handleName}
          />
          <div className="crm-state-container">
            <SelectComponent label="UF" value={state} onChange={handleState} />
            <Textfield
              label="CRM"
              type="text"
              value={crm}
              onChange={handleCrm}
              width="233px"
            />
          </div>
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            value={email}
          />
          <Textfield
            label="Telefone"
            type="text"
            onChange={handleTelefone}
            value={telefone}
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
