import  { useState } from 'react';
import FiltroBuscaMedicamentos from '../FiltroBuscaMedicamentos/FiltroBuscaMedicamentos';
import { ListaInteracoes } from '../ListaInteracoes/ListaInteracoes';

const TerceiroComponente = () => {
  const [filtroStatus, setFiltroStatus] = useState('semFiltroDeStatus');
  const [filtroText, setFiltroText] = useState('');
  const [listaDeMedicamentos, setListaDeMedicamentos] = useState([
    { name: ' Alfa', status: 'bom' },
    { name: ' altarica', status: 'medio' },
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
    
  ]);
  const [listaDeMedicamentosCompleta] = useState([
    { name: ' Alfa', status: 'bom' },
    { name: ' altarica', status: 'medio' },
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
  ]);

  const handleFiltroStatusChange = (selectedStatus: string) => {
    setFiltroStatus(filtroStatus);
    setFiltroStatus(selectedStatus);

    if (selectedStatus === 'semFiltroDeStatus') {
      setListaDeMedicamentos(listaDeMedicamentosCompleta);
    } else {
      setListaDeMedicamentos(listaDeMedicamentosCompleta.filter(item => item.status === selectedStatus));


    }
  }


  const handleFiltroTextChange = (text: string) => {
    setFiltroText(filtroText);
    setFiltroText(text);
    if (text === '') {
      setListaDeMedicamentos(listaDeMedicamentosCompleta);
    }
    else {
      setListaDeMedicamentos(listaDeMedicamentosCompleta.filter(item => item.name.toLowerCase().includes(text.toLowerCase())));

     
    }
  };

  return (
    <div>
      <FiltroBuscaMedicamentos onStatusChange={handleFiltroStatusChange} onNameChange={handleFiltroTextChange} />
      <ListaInteracoes items={listaDeMedicamentos} />
    </div>
  );
};

export default TerceiroComponente;
