import React from 'react';

// Componente que representa os links auxiliares abaixo do formulário
const LinksAuxiliares = () => (
  <div>
    {/* Link para recuperação de senha */}
    <a href="/esqueceu-senha" className="link-recuperar-senha">
      Esqueceu sua senha?
    </a>
    {/* Link para cadastro */}
    <p className="texto-cadastro">
      Ainda não tem conta? <a href="/cadastro">Cadastre-se!</a>
    </p>
  </div>
);

export default LinksAuxiliares;
