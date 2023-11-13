import CustomButton from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SelectMedicamento from '../../components/Modal/Components/SelectMedicamento/SelectMedicamento';
import SelectTime from '../../components/Modal/Components/SelectTime/SelectTime';
import Modal from '../../components/Modal/Modal';
import './AgendaMedicamento.css';
import { useState } from 'react';

export default function AgendaMedicamento() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState('');

  const handleValues = () => {
    console.log(medicamentoSelecionado);

    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
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
          <input type="checkbox" />
          <label>Uso contínuo</label>
        </div>
        <div className="administration">
          <SelectTime />
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
