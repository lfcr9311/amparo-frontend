import { useState } from 'react';
import FiltroBuscaMedicamentos from '../../components/FiltroBuscaMedicamentos/FiltroBuscaMedicamentos';
import { ListaInteracoes } from '../../components/ListaInteracoes/ListaInteracoes';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './ListaDeInteracaoDomedicamento.css';

interface ListaDeInteracaoDoMedicamentoProps {
  nomeDoMedicamentoQuePossuiInteracao?: string;
  listaRecebidaDeInteracoesDoMedicamento?: { name: string; status: string }[];
}

const US21ListaDeInteracaoMedicamentos = ({ nomeDoMedicamentoQuePossuiInteracao = "Medicamento" }: ListaDeInteracaoDoMedicamentoProps) => {
  const [filtroStatus, setFiltroStatus] = useState('semFiltroDeStatus');

  const [filtroText, setFiltroText] = useState('');
  const [listaDeMedicamentosCompleta] = useState([
    { name: 'Paracetamol', status: 'bom' },
    { name: 'Ibuprofeno', status: 'medio' },
    { name: 'Amoxicilina', status: 'ruim' },
    { name: 'Omeprazol', status: 'bom' },
    { name: 'Sertralina', status: 'medio' },
    { name: 'Metformina', status: 'ruim' },
    { name: 'Atorvastatina', status: 'bom' },
    { name: 'Loratadina', status: 'medio' },
    { name: 'Lisinopril', status: 'ruim' },
    { name: 'Diclofenaco', status: 'bom' },
    { name: 'Ranitidina', status: 'medio' },
    { name: 'Pantoprazol', status: 'ruim' },
    { name: 'Ciprofloxacino', status: 'bom' },
    { name: 'Metronidazol', status: 'medio' },
    { name: 'Furosemida', status: 'ruim' },
    { name: 'Dexametasona', status: 'bom' },
    { name: 'Fluoxetina', status: 'medio' },
    { name: 'Tramadol', status: 'ruim' }
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
        <div className='title-body' title={nomeDoMedicamentoQuePossuiInteracao}>{nomeDoMedicamentoQuePossuiInteracao}</div>

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