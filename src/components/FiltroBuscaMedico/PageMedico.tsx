import  { useState } from 'react';
import FiltroBuscaMedico from '../../components/FiltroBuscaMedico/FiltroBuscaMedico';
import { ListaMedico } from '../../components/FiltroBuscaMedico/ListaMedico';



const TerceiroComponente = () => {
  const [filtroText, setFiltroText] = useState('');
  const [listaDeMedicos] = useState([
    { name: 'Dr. Silva' },
{ name: 'Dra. Santos' },
{ name: 'Dr. Costa' },
{ name: 'Dra. Oliveira' },
{ name: 'Dr. Pereira' },
{ name: 'Dra. Almeida' },
{ name: 'Dr. Ferreira' },
{ name: 'Dra. Lima' },
{ name: 'Dr. Rodrigues' },
{ name: 'Dra. Souza' },
{ name: 'Dr. Carvalho' },
{ name: 'Dra. Gomes' }

  ]);

   const handleFiltroTextChange = (text: string) => {
    setFiltroText(text);
  };
  return (
    <div>
      <FiltroBuscaMedico onNameChange={handleFiltroTextChange} />
      <ListaMedico items={listaDeMedicos.filter(item => item.name.toLowerCase().includes(filtroText.toLowerCase()) )} />
    </div>
  );
};

export default TerceiroComponente;
