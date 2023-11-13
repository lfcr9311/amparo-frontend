import CustomButton from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SelectMedicamento from '../../components/Modal/Components/SelectMedicamento/SelectMedicamento';
import SelectTime from '../../components/Modal/Components/SelectTime/SelectTime';
import Modal from '../../components/Modal/Modal';
import MedicamentoAgenda from '../../components/MedicamentoAgenda/MedicamentoAgenda';
import './AgendaMedicamento.css';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

interface Medicamento {
  id: string;
  nome: string;
  horario: string;
  usoContinuo: boolean;
}

export default function AgendaMedicamento() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState('');
  const [usoContinuo, setUsoContinuo] = useState(false)
  const [horario, setHorario] = useState('00:00');
  const [medicamentosAgenda, setMedicamentosAgenda] = useState<Medicamento[]>([]);

  const resetModal = () => {
    setMedicamentoSelecionado('');
    setHorario('00:00');
    setUsoContinuo(false);
  };

  const handleValues = () => {
    const novoMedicamento = {
      nome: medicamentoSelecionado,
      usoContinuo,
      horario,
    };

    setMedicamentosAgenda([...medicamentosAgenda, novoMedicamento]);
    setModalIsOpen(false);
    resetModal();
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    resetModal();
  };

  const handleUsoContinuoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsoContinuo(event.target.checked);
  };

  const handleInfoClick = (medicamentoId: string) => {
    console.log("Informações do medicamento com ID:", medicamentoId);
  };

  const handleDeleteClick = (medicamentoId: string) => {
    setMedicamentosAgenda(medicamentosAgenda.filter(medicamento => medicamento.id !== medicamentoId));
  };


  return (
    <>

      <HeaderHome title="Agenda" type="headerPage" />

      {medicamentosAgenda.map((medicamento, index) => (
        <MedicamentoAgenda
          key={index}
          title={medicamento.nome}
          content={`${medicamento.horario}`}
          onInfoClick={() => handleInfoClick(medicamento.id)}
          onDeleteClick={() => handleDeleteClick(medicamento.id)}
        />
      ))}

      // Criar página aqui

      <CustomButton
        label="Adicionar"
        variant="contained"
        onClick={() => setModalIsOpen(true)}
      />
      <Modal
        isOpen={modalIsOpen}
        isClose={handleCloseModal}
        title="Medicamento"
      >
        <div className="medication-info">
          <SelectMedicamento value={medicamentoSelecionado}
            onChange={setMedicamentoSelecionado} />
        </div>
        <div className="continuo">
          <Checkbox
            checked={usoContinuo}
            onChange={handleUsoContinuoChange}
          />
          <label>Uso contínuo</label>
        </div>
        <div className="administration">
          <SelectTime value={horario} onChange={setHorario} />
        </div>
        <div className="botao">
          <CustomButton
            variant="contained"
            label="Salvar"
            onClick={handleValues}
          />
        </div>
      </Modal>
      <Footer user="patient" />
    </>
  );
}
