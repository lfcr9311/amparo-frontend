import { useState } from 'react';
import FiltroBuscaMedicamentos from '../../components/FiltroBuscaMedicamentos/FiltroBuscaMedicamentos';
import { ListaInteracoes } from '../../components/ListaInteracoes/ListaInteracoes';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './ListaDeInteracaoDomedicamento.css';
import { useLocation } from 'react-router-dom';



const ListaDeInteracaoMedicamentos = () => {
  const [filtroStatus, setFiltroStatus] = useState(0);
  const location = useLocation();
  const listaDeMedicamentosCompleta = location.state.items;
  const nomeDoMedicamentoQuePossuiInteracao = location.state.nome;
  const [filtroText, setFiltroText] = useState('');

  const handleFiltroStatusChange = (selectedStatus: number) => {
    setFiltroStatus(selectedStatus);
  }

  const handleFiltroTextChange = (text: string) => {
    setFiltroText(text);
  };

  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <div className='body-container'>

        <div className='title-body' >{nomeDoMedicamentoQuePossuiInteracao}</div>

        <div className='body-filtro'>
          <FiltroBuscaMedicamentos onStatusChange={handleFiltroStatusChange} onNameChange={handleFiltroTextChange} status={filtroStatus} />
        </div>
        <div className='body-lista'>
          <ListaInteracoes items={listaDeMedicamentosCompleta.filter((item: { status: number; name: string; }) => (item.status === filtroStatus || filtroStatus === 0) &&
            item.name.toLowerCase().includes(filtroText.toLowerCase()))}
            name='' />
        </div>

      </div>
      <Footer user="patient" />
    </>
  );
};

export default ListaDeInteracaoMedicamentos;
