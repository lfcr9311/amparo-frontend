import React from 'react';
import logoLogin from "../../assets/amparo.svg"
// Componente que representa a logo da aplicação
const Logo: React.FC = () => (
  <div className="logo">
    {/* Imagem da logo */}
  <img src={logoLogin} alt="Logo Amparo" />
  </div>
);

export default Logo;
