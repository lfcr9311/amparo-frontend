import React, { useState } from 'react';
import FiltroBuscaMedicamentos from '../FiltroBuscaMedicamentos/FiltroBuscaMedicamentos';
import { ListaInteracoes } from '../ListaInteracoes/ListaInteracoes';

const TerceiroComponente = () => {
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroText, setFiltroText] = useState('');
  const [listaDeMedicamentos, setListaDeMedicamentos] = useState([
    { name: ' Alfa', status: 'bom' },
    { name: ' Beta', status: 'medio' },
    { name: ' Careta', status: 'ruim' },
    { name: ' dionisio', status: 'bom' },
    { name: ' Blue', status: 'medio' },
    { name: ' Ccaraca', status: 'ruim' },
    { name: ' Aasd', status: 'bom' },
    { name: ' Bdas', status: 'medio' },
    { name: ' Csdasd', status: 'ruim' },
    { name: ' Aasd', status: 'bom' },
    { name: ' Bfa', status: 'medio' },
    { name: ' Cfas', status: 'ruim' },
    // Adicione mais medicamentos conforme necessário
  ]);

  const handleFiltroStatusChange = (status: React.SetStateAction<string>) => {
    setListaDeMedicamentos(listaDeMedicamentos);

    setFiltroStatus(status);
    if (status === '') {
      setListaDeMedicamentos(listaDeMedicamentos);
    } else {
      setListaDeMedicamentos(listaDeMedicamentos.filter(item => item.status === status));
    }
  };

  const handleFiltroTextChange = (status: React.SetStateAction<string>) => {
    setFiltroText(status);
    if (status === '') {
      setListaDeMedicamentos(listaDeMedicamentos);
    }
    else {
      setListaDeMedicamentos(listaDeMedicamentos.filter(item => item.name === status));
    }
  }

  return (
    <div>
      <FiltroBuscaMedicamentos onStatusChange={handleFiltroStatusChange} onNameChange={handleFiltroTextChange}/>
      <ListaInteracoes items={listaDeMedicamentos} />
    </div>
  );
};

export default TerceiroComponente;
