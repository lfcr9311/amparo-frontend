import React from 'react';
import logoLogin from "../../assets/logoLogin.png"
// Componente que representa a logo da aplicação
const Logo: React.FC = () => (
  <div className="logo">
    {/* Imagem da logo */}
  <img src={logoLogin} alt="Logo Amparo" />
  </div>
);

export default Logo;
