import React from 'react';
import { createRoot } from 'react-dom';
import Logo from './components/Header/Logo';
import FormularioLogin from './components/Header/FormularioLogin';
import LinksAuxiliares from './components/Header/LinksAuxiliares';
import './styles.css';

// Componente principal da Tela de Login
const TelaLogin: React.FC = () => (
  <div className="container">
    <Logo />
    <h1>Amparo</h1>
    <FormularioLogin />
    <LinksAuxiliares />
  </div>
);

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(<TelaLogin />);

export default TelaLogin;



// Utilizando a nova API createRoot do React 18
// const root = document.getElementById('root');
// if (root) {
//   const appRoot = createRoot(root);
//   appRoot.render(<TelaLogin />);
// } else {
//   console.error("Element with id 'root' not found");
// }
