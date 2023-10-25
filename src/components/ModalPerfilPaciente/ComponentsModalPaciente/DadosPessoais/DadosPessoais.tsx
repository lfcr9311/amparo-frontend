import React from 'react';

interface InfoProps {
  cpf: string;
  email: string;
  nSus: string;
}

const infoStyle = {
  fontFamily: 'Poppins, sans-serif',
};
const boldText = {
  fontWeight: 'bold',
};
const lineHeight = {
  lineHeight: '1',

};

export function Informacoes({ cpf, email, nSus }: InfoProps) {
  return (
    <div style={infoStyle}>
      <p style={lineHeight}><span style={boldText}>CPF:</span> {cpf}</p>
      <p style={lineHeight}><span style={boldText}>E-mail:</span> {email}</p>
      <p style={lineHeight}><span style={boldText}>NºSUS:</span> {nSus}</p>
    </div>
  );
}
