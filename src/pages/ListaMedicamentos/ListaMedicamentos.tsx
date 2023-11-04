import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './ListaMedicamentos.css';
import CardRemedio from '../../components/CardRemedio/CardRemedio';
import CustomButton from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useState, useEffect } from 'react';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import SelectFrequencia from '../../components/Modal/Components/SelectFrequencia/SelectFrequencia';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import { motion } from "framer-motion";
import MedicinenameModal from '../../components/Modal/Components/medicinenameModal/medicinenameModal';


interface Medicamento {
  label: string;
  dosagem?: string;
  frequencia?: string;
  dataFinal?: string | "Uso contínuo";
}

const fadeInOut = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

//dados mocados
const mockedMedicationsList = [
  { label: 'Tenofovir' },
  { label: 'Emtricitabina' },
  { label: 'Efavirenz' },
  { label: 'Lamivudina' },
  { label: 'Zidovudina' },
  { label: 'Abacavir' },
  { label: 'Darunavir' },
  { label: 'Ritonavir' },
  { label: 'Dolutegravir' },
  { label: 'Raltegravir' },
  { label: 'Paracetamol' },
  { label: 'Ibuprofeno' },
  { label: 'Amoxicilina' },
  { label: 'Aspirina' },
  { label: 'Atorvastatina' },
  { label: 'Metformina' },
  // ...outros medicamentos
];


export default function ListaMedicamentos() {
  const [usoContinuo, setUsoContinuo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicamentoNome, setMedicamentoNome] = useState<{ label: string } | null>(null);
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [erroMedicamentoNome, setErroMedicamentoNome] = useState(false);
  const [mensagemErroMedicamentoNome, setMensagemErroMedicamentoNome] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [erroData, setErroData] = useState(false);
  const [mensagemErroData, setMensagemErroData] = useState('');




  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([
    { label: "Remedio 1" },
    { label: "Remedio 2" },
    { label: "Remedio 3" }
  ]);

  const resetModal = () => {
    setMedicamentoNome(null);
    setDosagem('');
    setFrequencia('');
    setDataFinal('');
    setUsoContinuo(false);
    setErroMedicamentoNome(false);
    setMensagemErroMedicamentoNome('');
    setErroData(false);
    setMensagemErroData('');
  };


  useEffect(() => {
    if (medicamentoNome && medicamentoNome.label.trim()) {
      setErroMedicamentoNome(false);
      setMensagemErroMedicamentoNome("");
    }
  }, [medicamentoNome]);

  useEffect(() => {
    if (usoContinuo) {
      setErroData(false);
      setMensagemErroData('');
    }
  }, [usoContinuo]);

  useEffect(() => {
    if (dataFinal) {
      setErroData(false);
      setMensagemErroData('');
    }
  }, [dataFinal]);


  const handleAddMedicamento = () => {

    if (!medicamentoNome || !medicamentoNome.label.trim()) {
      setErroMedicamentoNome(true);
      setMensagemErroMedicamentoNome("Campo obrigatório");
      return;
    } else {
      setErroMedicamentoNome(false);
      setMensagemErroMedicamentoNome("");
    }

    if (!dataFinal && !usoContinuo) {
      setErroData(true);
      setMensagemErroData("Por favor, selecione um dos campos em vermelho");
      return;
    } else {
      setErroData(false);
      setMensagemErroData("");
    }

    const novoMedicamento = {
      label: medicamentoNome.label,
      dosagem: dosagem,
      frequencia: frequencia,
      dataFinal: usoContinuo ? "Uso contínuo" : dataFinal
    };

    setMedicamentos(prevMedicamentos => [...prevMedicamentos, novoMedicamento]);

    setIsModalOpen(false);

    setMedicamentoNome(null);
    setDosagem('');
    setFrequencia('');
    setDataFinal('');
    setUsoContinuo(false);

    //imprime a lista completa de medicamentos e suas informaçoes
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

    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };



  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <p className="title-page">Meus Remedios</p>

      {showSuccessMessage && (
        <motion.div
          className="success-message"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeInOut}
        >
          Medicamento adicionado com sucesso!
        </motion.div>
      )}

      <div className="meus-remedios-container">
        {medicamentos.map((medicamento, index) => (
          <CardRemedio
            key={index}
            medicamento={medicamento}
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
        isClose={() => { setIsModalOpen(false); resetModal(); }}
      >
        <form>
          <div className='content-texto-modal'>
            <MedicinenameModal
              label="Nome do Medicamento"
              options={mockedMedicationsList.map(medicamento => medicamento.label)}
              value={medicamentoNome?.label || null}
              onChange={(newValue: string | null) => setMedicamentoNome(newValue ? { label: newValue } : null)}
              error={erroMedicamentoNome}
              helperText={mensagemErroMedicamentoNome}
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
              error={erroData}
              helperText={mensagemErroData}
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="uso-continuo"
              className={erroData ? 'checkbox-error' : ''}
              checked={usoContinuo}
              onChange={() => setUsoContinuo(!usoContinuo)}
            />
            <label htmlFor="uso-continuo">Uso contínuo</label>
          </div>
          <div className="button-save">
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
