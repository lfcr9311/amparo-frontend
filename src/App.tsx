import React from 'react';
import { Root, createRoot } from 'react-dom/client';
import Logo from './components/Header/Logo';
import FormularioLogin from './components/Header/FormularioLogin';
import LinksAuxiliares from './components/Header/LinksAuxiliares';
import './styles.css';


const Logo = require("./components/Header/Logo")

// Componente principal da Tela de Login
const TelaLogin = () => (
  <div className="container">
    <Logo />
    <h1>Amparo</h1>
    <FormularioLogin />
    <LinksAuxiliares />
  </div>
);

// Utilizando a nova API createRoot do React 18
const root = document.getElementById('root');
const appRoot = createRoot(root as Element);

appRoot.render(<TelaLogin />);
