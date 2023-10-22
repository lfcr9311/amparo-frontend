import  { useState } from 'react';
import FiltroBuscaMedicamentos from '../FiltroBuscaMedicamentos/FiltroBuscaMedicamentos';
import { ListaInteracoes } from '../ListaInteracoes/ListaInteracoes';

const TerceiroComponente = () => {
  const [filtroStatus, setFiltroStatus] = useState('semFiltroDeStatus');
  const [filtroText, setFiltroText] = useState('');
 
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
    setFiltroStatus(selectedStatus);

    
  }


  const handleFiltroTextChange = (text: string) => {
    setFiltroText(text);
        
    
  };

  return (
    <div>
      <FiltroBuscaMedicamentos onStatusChange={handleFiltroStatusChange} onNameChange={handleFiltroTextChange} status={filtroStatus} />
      <ListaInteracoes items={listaDeMedicamentosCompleta.filter(item => (item.status === filtroStatus || filtroStatus === 'semFiltroDeStatus') && 
      item.name.toLowerCase().includes(filtroText.toLowerCase()) )} />
    </div>
  );
};

export default TerceiroComponente;
