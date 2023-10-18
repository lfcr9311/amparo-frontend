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

interface Medicamento {
  label: string;
  dosagem?: string;
  frequencia?: string;
  dataFinal?: string | "Uso contínuo";
}


export default function ListaMedicamentos() {
  const [usoContinuo, setUsoContinuo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicamentoNome, setMedicamentoNome] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([
    { label: "Remedio 1" },
    { label: "Remedio 2" },
    { label: "Remedio 3" }
  ]);

  const handleAddMedicamento = () => {

    if (!medicamentoNome.trim()) {
      alert("O nome do medicamento não pode estar vazio.");
      return;
    }

    const novoMedicamento = {
      label: medicamentoNome,
      dosagem: dosagem,
      frequencia: frequencia,
      dataFinal: usoContinuo ? "Uso contínuo" : dataFinal
    };

    setMedicamentos(prevMedicamentos => [...prevMedicamentos, novoMedicamento]);

    setIsModalOpen(false);
    setMedicamentoNome('');
    setDosagem('');
    setFrequencia('');
    setDataFinal('');
    setUsoContinuo(false);

    setTimeout(() => {
      console.log("Lista de Medicamentos:");
      [...medicamentos, novoMedicamento].forEach(medicamento => {
        console.log(`
                Nome do medicamento: ${medicamento.label}
                Dosagem: ${medicamento.dosagem}
                Frequência: ${medicamento.frequencia}
                Data Final: ${medicamento.dataFinal}
            `);
      });
    }, 0);
  };



  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <p className="title-page">Meus Remedios</p>
      <div className="meus-remedios-container">
        {medicamentos.map((medicamento, index) => (
          <CardRemedio
            key={index}
            label={medicamento.label}
            onClick={() => console.log(medicamento.label)}
          />
        ))}
      </div>
      <CustomButton
        label="Adicionar"
        variant="contained"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        isOpen={isModalOpen}
        title=" Medicamento"
        isClose={() => setIsModalOpen(false)}
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
              disabled={usoContinuo}
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
              onClick={handleAddMedicamento}
            />
          </div>
        </form>
      </Modal>
      <Footer user="patient" />
    </>
  );
}
