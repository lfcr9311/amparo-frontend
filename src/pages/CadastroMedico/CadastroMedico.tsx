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
  const [validPassword, setValidPassaword] = useState<boolean>(true);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleName = (newName: string) => {
    setName(newName)
  }

  const handleState = (newState: string) => {
    setState(newState)
  }

  const handleCrm = (newCrm: string) => {
    setCrm(newCrm)
  }
  
  const handleEmail = (newEmail: string) => {
    setEmail(newEmail)
  };

  const handleTelefone = (newTelefone: string) => {
    setTelefone(newTelefone)
  }

  const handlePassword = (newPassoword: string) => {
    setPassword(newPassoword);
    setClicked(false)
  }

  const handleConfirmPassword = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
    setClicked(false)
    if (newConfirmPassword === password) {
      setValidPassaword(true);
    } else {
      setValidPassaword(false);
    }
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
          <div className="crm-state-container">
          <SelectComponent 
            label="UF"
            value={state}
            onChange={() => {}}
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
          />
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
            helperText={!validPassword && clicked ? 'Senha não correspondentes' : ''}
            value={confirmPassword}
          />
          <Button
            margin-botton="20px"
            variant="contained"
            label="Cadastrar"
            onClick={() => console.log(state)
            }
          />
        </div>
        <span>
            Já possui conta? <a href="src/pages/Login.tsx"> Fazer Login</a>
          </span>
      </form>
    </div>
  );
};
