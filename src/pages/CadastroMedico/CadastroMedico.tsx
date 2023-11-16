import { useState } from 'react';
import Textfield from '../../components/Textfield/Textfield';
import Button from '../../components/Button/Button';
import Logo from '../../assets/Amparo.svg';
import './CadastroMedico.css';
import SelectComponent from '../../components/Select/Select';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import { registerDoctor } from '../../utils/apiService';
import { z } from 'zod';

const doctorSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email Inválido" }),
  state: z.string().min(1, { message: "UF Obrigatório" }),
  crm: z.string().min(5, { message: "CRM Obrigatório" }).max(7, { message: "CRM inválido" }).regex(/^\d+$/, { message: "CRM inválido" }),
  phone: z.string().regex(/^\d{10,11}$/, { message: "Telefone inválido" }),
  password: z.string().min(2, { message: "Senha obrigatória" }),
  confirmPassword: z.string().min(1, { message: "Senha obrigatória" }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Senhas não conferem",
  path: ["confirmPassword"],
});

export const CadastroMedico = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [submitFailed, setSubmitFailed] = useState<boolean>(false);
  const [crm, setCrm] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState({
    name: '', email: '', state: '', crm: '', phone: '', password: '', confirmPassword: ''
  });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      setErrors({
        name: '', email: '', state: '', crm: '', phone: '', password: '', confirmPassword: ''
      });
      setSubmitFailed(false);
      const formData = { name, email, state, crm, phone, password, confirmPassword };
      doctorSchema.parse(formData);
      await fetchData(email, name, password, phone, "DOCTOR", crm, state);
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          setErrors(prev => ({ ...prev, [err.path[0]]: err.message }));
        });
      }
    }
  };

  async function fetchData(email: String, name: String, password: String, cellPhone: String, userType: String, crm: String, uf: String) {
    await registerDoctor(email, name, password, cellPhone, userType, crm, uf).then((result) => {
      console.log("Status " + result.status);
      if (result.status == 201 || result.status == 200) {
        console.log('cadastro realizado com sucesso');
        navigate(ROUTES.LOGIN());
      }
    })
      .catch((erro) => {
        if (erro instanceof z.ZodError) {
          erro.errors.forEach((err) => {
            setErrors(prev => ({ ...prev, [err.path[0]]: err.message }));
          });
        } else {
          if (erro.response && erro.response.status === 500) {
            console.error('Erro 500: O servidor encontrou um erro interno.');
          } else if (erro.response && erro.response.status === 400) {
            console.error('Erro 400: O servidor não pode processar a solicitação.');
          } else {
            console.error('Erro inesperado:', erro);
          }
          setSubmitFailed(true);
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

  const handleCrm = (newCrm: string) => {
    setCrm(newCrm);
  };

  const handleEmail = (newEmail: string) => {
    const inputValue = newEmail;
    setEmail(inputValue);
  };

  const handlePhone = (newPhone: string) => {
    setPhone(newPhone);
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
            error={Boolean(errors.name)}
            onChange={handleName}
            helperText={Boolean(errors.name) ? errors.name : ''}
          />
          <div className="crm-state-container">
            <SelectComponent
              label="UF"
              value={state}
              onChange={handleState}
            />
            <Textfield
              label="CRM"
              type="text"
              value={crm}
              error={Boolean(errors.crm) || Boolean(errors.state)}
              helperText={!errors.state ? errors.crm : errors.state + ' ' + errors.crm}
              onChange={handleCrm}
              width="233px"
            />
          </div>
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            error={Boolean(errors.email)}
            helperText={errors.email}
            value={email}
          />
          <Textfield
            label="Telefone"
            type="text"
            onChange={handlePhone}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            value={phone}
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={handlePassword}
            error={Boolean(errors.password)}
            value={password}
            helperText={errors.password}
          />
          <Textfield
            label="Confirmar Senha"
            type="password"
            onChange={handleConfirmPassword}
            error={Boolean(errors.confirmPassword)}
            helperText={
              errors.confirmPassword
            }
            value={confirmPassword}
          />
          {submitFailed ? (
            <div className="error-message">Cadastro Falhou</div>
          ) : ''}
          <Button
            margin-botton="20px"
            variant="contained"
            label="Cadastrar"
            onClick={() => handleSubmit()}
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
