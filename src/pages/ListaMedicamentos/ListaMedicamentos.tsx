import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './ListaMedicamentos.css';
import CardRemedio from '../../components/CardRemedio/CardRemedio';
import CustomButton from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import SelectFrequencia from '../../components/Modal/Components/SelectFrequencia/SelectFrequencia';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';

export default function ListaMedicamentos() {
  const [usoContinuo, setUsoContinuo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicamentoNome, setMedicamentoNome] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <p className="title-page">Meus Remedios</p>
      <div className="meus-remedios-container">
        <CardRemedio
          label="Remedio 1"
          onClick={() => console.log('Remedio 1')}
        />
        <CardRemedio
          label="Remedio 2"
          onClick={() => console.log('Remedio 2')}
        />
        <CardRemedio
          label="Remedio 3"
          onClick={() => console.log('Remedio 3')}
        />
        {/* ... e outros cards de remédios se necessário */}
      </div>
      <CustomButton
        label="Adicionar"
        variant="contained"
        onClick={() => setIsModalOpen(true)}  // Abre o modal
      />
      <Modal
        isOpen={isModalOpen}
        title=" Medicamento"
        isClose={() => setIsModalOpen(false)}  // Fecha o modal
      >
        <form>
          <div className='content-texto-modal'>
            <TextfieldModal
              label="Nome do Medicamento"
              value={medicamentoNome}
              type="text"
              onChange={(value) => setMedicamentoNome(value)}
            />
            <TextfieldModal
              label="Dosagem"
              value={dosagem}
              type="text"
              onChange={(value) => setDosagem(value)}
            />
          </div>
          <div className='frequencia-data'>
            <SelectFrequencia
              value={frequencia}
              onChange={(selectedValue) => setFrequencia(selectedValue)}
            />
            <DateModal
              value={dataFinal}
              onChange={(selectedDate) => setDataFinal(selectedDate)}
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="uso-continuo"
              checked={usoContinuo}
              onChange={() => setUsoContinuo(!usoContinuo)}
            />
            <label htmlFor="uso-continuo">Uso contínuo</label>
          </div>
          <div className="button-center">
            <CustomButton
              label="Salvar"
              variant="contained"
              onClick={() => {
                console.log('Medicamento adicionado');
                setIsModalOpen(false);
              }}
            />
          </div>
        </form>
      </Modal>
      <Footer user="patient" />
    </>
  );
}
