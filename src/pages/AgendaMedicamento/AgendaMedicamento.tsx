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
  const [tempTime, setTempTime] = useState();

  const handleValues = () => {
    setTempTime(tempTime);
  };

  return (
    <>
      <HeaderHome title="Agenda" type="headerPage" />

      // Criar página aqui

      <Modal
        isOpen={true}
        isClose={() => setModalIsOpen(!modalIsOpen)}
        title="Medicamento"
      >
        <div className="medication-info">
          <SelectMedicamento value="" onChange={() => { }} />
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
