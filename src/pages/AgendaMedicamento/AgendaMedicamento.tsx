import CustomButton from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SelectMedicamento from '../../components/Modal/Components/SelectMedicamento/SelectMedicamento';
import SelectTime from '../../components/Modal/Components/SelectTime/SelectTime';
import Modal from '../../components/Modal/Modal';
import './AgendaMedicamento.css';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function AgendaMedicamento() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState('');
  const [usoContinuo, setUsoContinuo] = useState(false)
  const [horario, setHorario] = useState('00:00');

  const resetModal = () => {
    setMedicamentoSelecionado('');
    setHorario('00:00');
    setUsoContinuo(false);
  };

  const handleValues = () => {
    console.log('Medicamento Selecionado:', medicamentoSelecionado);
    console.log('Uso Contínuo:', usoContinuo);
    console.log('Horário:', horario);

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

  return (
    <>
      <HeaderHome title="Agenda" type="headerPage" />

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
