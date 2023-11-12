import { useState } from 'react';
import Textfield from '../../components/Textfield/Textfield';
import Button from '../../components/Button/Button';
import Logo from '../../assets/Amparo.svg';
import cpf from 'cpf'
import './CadastroPaciente.css';
import { ROUTES } from '../../routes/constans';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { registerUser } from '../../utils/apiService';

const isCPF = (value: string): boolean => cpf.isValid(value);

const pacientSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
    email: z.string().email({ message: 'Email Inválido' }),
    date: z.coerce.date().refine((value) => value < new Date(), { message: 'Data inválida' }),
    cpf: z
      .string()
      .refine((value) => isCPF(value), { message: 'Insira um CPF válido' }),
    password: z.string().min(2, { message: 'Senha obrigatória' }),
    confirmPassword: z.string().min(1, { message: 'Senha obrigatória' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não correspondem',
    path: ['confirmPassword'],
  });

interface FormData {
  name: string;
  email: string;
  date: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}

export const CadastroPaciente = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [submitFailed, setSubmitFailed] = useState(false);
  const [erros, setErros] = useState({
    name: '',
    email: '',
    date: '',
    password: '',
    confirmPassword: '',
    cpf: '',
  });

  const formatDate = (value: string): string => {
    const formatDate = value.split('-');
    return formatDate[2] + '/' + formatDate[1] + '/' + formatDate[0];
  }

  const handleSubmit = async () => {
    try {
      setErros({
        name: '',
        email: '',
        date: '',
        password: '',
        confirmPassword: '',
        cpf: '',
      });
      setSubmitFailed(false);
      let dateString = String(date);
      dateString = formatDate(dateString);
      const formData: FormData = {
        name,
        email,
        date,
        password,
        confirmPassword,
        cpf,
      };
      pacientSchema.parse(formData);
      await fetchData(name, email, dateString, password, cpf.replace(/\D/g, ''));
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          setErros((prev) => ({ ...prev, [err.path[0]]: err.message }));
        });
      }
    }
  };

  async function fetchData(
    name: String,
    email: String,
    date: String,
    passoword: String,
    cpf: String
  ) {
    await registerUser(email, name, passoword, null, 'PATIENT', cpf, null, date)
      .then((result) => {
        if (result.status === 201 || result.status === 200) {
          navigate(ROUTES.LOGIN());
        }
      })
      .catch((erro) => {
        if (erro instanceof z.ZodError) {
          erro.errors.forEach((err) => {
            setErros((prev) => ({ ...prev, [err.path[0]]: err.message }));
          });
        } else {
          if (erro.response && erro.response.status === 500) {
            console.error('Erro 500: O servidor encontrou um erro interno.');
          } else if (erro.response && erro.response.status === 400) {
            console.error(
              'Erro 400: O servidor não pode processar a solicitação.'
            );
          } else {
            console.error('Erro inesperado:', erro);
          }
        }
        setSubmitFailed(true);
      });
  }

  const navigate = useNavigate();

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
    setCpf(newCpf);
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
            onChange={handleName}
            error={Boolean(erros.name)}
            helperText={Boolean(erros.name) ? erros.name : ''}
          />
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            value={email}
            error={Boolean(erros.email)}
            helperText={Boolean(erros.email) ? erros.email : ''}
          />
          <Textfield
            label="CPF"
            type="text"
            onChange={handleCpf}
            value={cpf}
            error={Boolean(erros.cpf)}
            helperText={Boolean(erros.cpf) ? erros.cpf : ''}
          />
          <Textfield
            label="Data de Nascimento"
            type="date"
            onChange={handleDate}
            value={date}
            error={Boolean(erros.date)}
            helperText={Boolean(erros.date) ? erros.date : ''}
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={handlePassword}
            value={password}
            error={Boolean(erros.password)}
            helperText={Boolean(erros.password) ? erros.password : ''}
          />
          <Textfield
            label="Confirmar Senha"
            type="password"
            onChange={handleConfirmPassword}
            value={confirmPassword}
            error={Boolean(erros.confirmPassword)}
            helperText={
              Boolean(erros.confirmPassword) ? erros.confirmPassword : ''
            }
          />
          {submitFailed ? (
            <div className="error-message">Cadastro Falhou</div>
          ) : (
            ''
          )}
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
