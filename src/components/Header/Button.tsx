import React from 'react';

// Componente que representa o botão "Entrar"
const BotaoEntrar: React.FC = () => (
  <div className="input-group">
    {/* Botão que, quando pressionado, enviará o formulário */}
    <button type="submit" className="botao entrar">
      Entrar
    </button>
  </div>
);

export default BotaoEntrar;
