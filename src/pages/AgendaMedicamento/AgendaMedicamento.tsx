import CustomButton from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SelectMedicamento from '../../components/Modal/Components/SelectMedicamento/SelectMedicamento';
import SelectTime from '../../components/Modal/Components/SelectTime/SelectTime';
import Modal from '../../components/Modal/Modal';
import MedicamentoAgenda from '../../components/MedicamentoAgenda/MedicamentoAgenda';
import './AgendaMedicamento.css';
import { useState } from 'react';



interface Medicamento {
  id: string;
  nome: string;
  horario: string;
  usoContinuo: boolean;
}

export default function AgendaMedicamento() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [horario, setHorario] = useState('00:00');
  const [medicamentosAgenda, setMedicamentosAgenda] = useState<Medicamento[]>([]);
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [isMedicineError, setIsMedicineError] = useState(false);

  const botaoAddPosition = Math.max(45 - (medicamentosAgenda.length * 8), 15);


  const resetModal = () => {
    setSelectedMedicine('');
    setHorario('00:00');
    setIsMedicineError(false);
  };

  const handleMedicineChange = (medicine: string) => {
    setSelectedMedicine(medicine);
    setIsMedicineError(!medicine);
  };

  const handleValues = () => {

    if (!selectedMedicine) {
      setIsMedicineError(true);
      return;
    }
    const novoMedicamento = {
      id: Date.now().toString(), // Isso irá gerar um ID baseado no timestamp atual
      nome: selectedMedicine,
      horario,
      usoContinuo: false,
    };

    setMedicamentosAgenda([...medicamentosAgenda, novoMedicamento]);

    setModalIsOpen(false);
    resetModal();
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    resetModal();
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

      <div className="meus-remedios-container">
        {medicamentosAgenda.map((medicamento) => (
          <MedicamentoAgenda
            key={medicamento.id}
            title={medicamento.nome}
            content={`${medicamento.horario}`}
            onInfoClick={() => handleInfoClick(medicamento.id)}
            onDeleteClick={() => handleDeleteClick(medicamento.id)}
          />
        ))}
      </div>

      <div className='botao-add' style={{ bottom: `${botaoAddPosition}%` }}>
        <CustomButton
          label="Adicionar"
          variant="contained"
          onClick={() => setModalIsOpen(true)}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        isClose={handleCloseModal}
        title="Medicamento"
      >
        <div className="medication-info">
          <SelectMedicamento
            value={selectedMedicine}
            onChange={handleMedicineChange}
            showError={isMedicineError}
            errorMessage="Por favor, selecione um medicamento"
          />
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
