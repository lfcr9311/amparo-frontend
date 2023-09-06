import { useState } from "react";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import Logo from "../../assets/amparo.svg";
import "./Cadastro.css";

/*const mask = (i : HTMLInputElement) => {
  const v: string = i.value;

  if (isNaN(Number(v[v.length - 1]))) {
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length === 3 || v.length === 7) i.value += ".";
  if (v.length === 11) i.value += "-";
}*/

export const Cadastro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassoword, setConfirmPassword] = useState("");

  if (password !== confirmPassoword) {
  }

  return (
    <div className="cadastro-container">
      <img src={Logo} />
      <p className="frase">Boas-Vindas!</p>
      <form>
        <div className="components-container">
          <Textfield
            label="Nome Completo"
            value={name}
            type="name"
            onChange={(newName) => {
              setName(newName), console.log(name);
            }}
          />
          <Textfield
            label="Email"
            type="email"
            onChange={(newEmail) => {
              setEmail(newEmail);
            }}
            value={email}
          />
          <Textfield
            label="CPF"
            type="text"
            onChange={(newCpf) => {
              setCpf(newCpf);
            }}
            value={cpf}
            //input oninput="mask(this)"
          />
          <Textfield
            label="Data de Nascimento"
            type="date"
            onChange={(newDate) => {
              setDate(newDate);
            }}
            value={date}
          />
          <Textfield
            label="Senha"
            type="password"
            onChange={(newPassword) => {
              setPassword(newPassword);
            }}
            value={password}
          />
          <Textfield
            label="Confirmar Senha"
            type="password"
            onChange={(newConfirmPassword) => {
              setConfirmPassword(newConfirmPassword);
            }}
            value={confirmPassoword}
          />
          <Button
            variant="contained"
            label="Cadastrar"
            onClick={() => {
              console.log("Cadastrado");
            }}
          />
        </div>
        <p>
            Já possui conta? 
          <a href="src/pages/Login.tsx">
            Fazer Login
          </a>
        </p>
      </form>
    </div>
  );
};
