import React, { useState } from "react";
import Textfield from "../../components/Textfield";
import Button from "../../components/Button";
import Logo from "../../assets/amparo.svg";
import "./CadastroMedico.css";

export const Cadastro = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<boolean>(true);
    const [crmValue, setCrmValue] = useState<string>("");
    const [estado, setEstado] = useState<string>(""); // Adicione o estado aqui
    const [clicked, setClicked] = useState<boolean>(false);

    const handleName = (newName: string) => {
        setName(newName);
    }

    const handleEmail = (newEmail: string) => {
        setEmail(newEmail);
    };

    const handleCrmValue = (newCrmValue: string) => {
        setCrmValue(newCrmValue);
    }

    const handlePassword = (newPassword: string) => {
        setPassword(newPassword);
        setClicked(false);
    }

    const handleConfirmPassword = (newConfirmPassword: string) => {
        setConfirmPassword(newConfirmPassword);
        setClicked(false);
        if (newConfirmPassword === password) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    }

    const handleEstadoChange = (newEstado: string) => {
        setEstado(newEstado);
    }

    return (
        <div className="cadastro-container">
            <img src={Logo} alt="Logo" /> <br />
            <a className="frase">Boas-Vindas!</a>
            <form>
                <div className="components-container">
                    <Textfield
                        label="Nome Completo"
                        type="text"
                        onChange={handleName}
                        value={name}
                    />
                    <div className="crmMedico">
                    <Textfield
                        label="CRM"
                        type="text"
                        onChange={handleCrmValue}
                        value={crmValue}
                    />
                    </div>
                    <Textfield
                        label="Email"
                        type="email"
                        onChange={handleEmail}
                        value={email}
                    />
                    <Textfield
                        label="CPF"
                        type="text"
                        onChange={handleCrmValue}
                        value={crmValue}
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
                        helperText={!validPassword && clicked ? 'Senhas não correspondentes' : ''}
                        value={confirmPassword}
                    />
                    <Textfield
                        label="Estado"
                        type="text"
                        onChange={handleEstadoChange}
                        value={estado}
                    />
                    <Button
                        margin-bottom="20px"
                        variant="contained"
                        label="Cadastrar"
                        onClick={() => setClicked(!clicked)}
                    />
                    <span className="footer">
                        Já possui conta? <a href="src/pages/Login.tsx"> Fazer Login</a>
                    </span>
                </div>
            </form>
        </div>
    );
};
