import { useState } from 'react';
import FiltroBuscaMedicamentos from '../../components/FiltroBuscaMedicamentos/FiltroBuscaMedicamentos';
import { ListaInteracoes } from '../../components/ListaInteracoes/ListaInteracoes';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './ListaDeInteracaoDoMedicamento.css';



const US21ListaDeInteracaoMedicamentos = () => {
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
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <div className='body-container'>
        <div className='title-body'>Paracetamol</div>

        <div className='body-filtro'>
          <FiltroBuscaMedicamentos onStatusChange={handleFiltroStatusChange} onNameChange={handleFiltroTextChange} status={filtroStatus} />
        </div>
        <div className='body-lista'>

          <ListaInteracoes items={listaDeMedicamentosCompleta.filter(item => (item.status === filtroStatus || filtroStatus === 'semFiltroDeStatus') &&
            item.name.toLowerCase().includes(filtroText.toLowerCase()))} />
        </div>

      </div>



      <Footer user="patient" />

    </>
  );
};

export default US21ListaDeInteracaoMedicamentos;
