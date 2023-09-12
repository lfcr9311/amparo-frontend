import { useState } from "react";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import Logo from "../../assets/amparo.svg";
import "./CadastroMedico.css";
import SelectComponent from "../../components/Select";

export const CadastroMedico = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [state, setState] = useState<string>("")
  const [crm, setCrm] = useState<string>("")
  const [telefone, setTelefone] = useState<string>("")
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [allFieldsMessage, setAllFieldsMessage] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validCrm, setValidCrm] = useState<boolean>(false);
  const [validTelefone, setValidTelefone] = useState<boolean>(false);

  const registerDoctor = (name: string, email: string, password: string, crm: string, cellphone: string, uf: string) => {
    const data = {
      name: name,
      email: email,
      password: password,
      crm: crm,
      uf: uf,
      cellphone: cellphone,
      userType: 'DOCTOR',
    }
    fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': '*/*'
      }
    }).then(response => {
      console.log(response)
    })
  };

  const buttonClick = () => {
    if ((password === confirmPassword) && password){
      setValidPassword(true)
    }else {
      setValidPassword(false)
    }

    if ((validCrm) && (validEmail) && (validTelefone) && isValidPassword(password)) {
      registerDoctor(name, email, password, crm, telefone, state);
      setAllFieldsMessage(true)
    } else {
      setAllFieldsMessage(false);
      console.log(validCrm,validEmail,validPassword, validTelefone)
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return email && emailRegex.test(email);
  };
  
  const handleEmail = (newEmail: string) => {
    setEmail(newEmail);
    if (isValidEmail(newEmail)) {
      setValidEmail(true)
    }else{
      setValidEmail(false)
    }
  };

  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return password && passwordRegex.test(password);
  };
  
  const handlePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  const isValidCrm = (crm: string) => {
    return crm && /^[0-9]+$/.test(crm);
  };
  
  const handleCrm = (newCrm: string) => {
    setCrm(newCrm);
    if (isValidCrm(newCrm)) {
      setValidCrm(true);
    } else {
      setValidCrm(false);
    }
  };

  const isValidTelefone = (telefone: string) => {
    return telefone && /^[0-9]+$/.test(telefone);
  };
  
  const handleTelefone = (newTelefone: string) => {
    setTelefone(newTelefone);
    if (isValidTelefone(newTelefone)) {
      setValidTelefone(true);
    } else {
      setValidTelefone(false);
    }
  };

  const handleName = (newName: string) => {
    setName(newName)
  }

  const handleState = (newState: string) => {
    setState(newState)
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
            isRequired={true}
          />
          <div className="crm-state-container">
            <SelectComponent
              label="UF"
              value={state}
              onChange={handleState}
              items={[
                { label: 'AC', value: 'AC' },
                { label: 'AL', value: 'AL' },
                { label: 'AP', value: 'AP' },
                { label: 'AM', value: 'AM' },
                { label: 'BA', value: 'BA' },
                { label: 'CE', value: 'CE' },
                { label: 'DF', value: 'DF' },
                { label: 'ES', value: 'ES' },
                { label: 'GO', value: 'GO' },
                { label: 'MA', value: 'MA' },
                { label: 'MT', value: 'MT' },
                { label: 'MS', value: 'MS' },
                { label: 'MG', value: 'MG' },
                { label: 'PA', value: 'PA' },
                { label: 'PB', value: 'PB' },
                { label: 'PR', value: 'PR' },
                { label: 'PE', value: 'PE' },
                { label: 'PI', value: 'PI' },
                { label: 'RJ', value: 'RJ' },
                { label: 'RN', value: 'RN' },
                { label: 'RS', value: 'RS' },
                { label: 'RO', value: 'RO' },
                { label: 'RR', value: 'RR' },
                { label: 'SC', value: 'SC' },
                { label: 'SP', value: 'SP' },
                { label: 'SE', value: 'SE' },
                { label: 'TO', value: 'TO' }
              ]}
              isRequired={true}
            />
            <Textfield
              label="CRM"
              type="text"
              value={crm}
              onChange={handleCrm}
              width="233px"
              isRequired={true}
            />
          </div>
          <Textfield
            label="Email"
            type="email"
            onChange={handleEmail}
            isRequired={true}
            value={email}
          />
          <Textfield
            label="Telefone"
            type="text"
            isRequired={true}
            onChange={handleTelefone}
            value={telefone}
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={handlePassword}
            isRequired={true}
            value={password}
          />
          <Textfield
            label="Confirmar Senha"
            type="password"
            onChange={handleConfirmPassword}
            helperText={!validPassword ? 'Senha não correspondentes' : ''}
            value={confirmPassword}
            isRequired={true}
          />
          <p className="errorMessage">{allFieldsMessage ? '' : 'Por favor preencha todos os campos corretamente.'}</p>
          <Button
            margin-botton="20px"
            variant="contained"
            label="Cadastrar"
            onClick={() => buttonClick()}
          />
        </div>
        <span>
          Já possui conta? <a href="src/pages/Login.tsx"> Fazer Login</a>
        </span>
      </form>
    </div>
  );
};
