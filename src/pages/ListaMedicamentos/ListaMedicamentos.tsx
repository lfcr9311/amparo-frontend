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

export default function ListaMedicamentos() {
  const [usoContinuo, setUsoContinuo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicamentoNome, setMedicamentoNome] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [erroMedicamentoNome, setErroMedicamentoNome] = useState(false);
  const [mensagemErroMedicamentoNome, setMensagemErroMedicamentoNome] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([
    { label: "Remedio 1" },
    { label: "Remedio 2" },
    { label: "Remedio 3" }
  ]);

  const resetModal = () => {
    setMedicamentoNome('');
    setDosagem('');
    setFrequencia('');
    setDataFinal('');
    setUsoContinuo(false);
    setErroMedicamentoNome(false);
    setMensagemErroMedicamentoNome('');
  };

  useEffect(() => {
    if (medicamentoNome.trim()) {
      setErroMedicamentoNome(false);
      setMensagemErroMedicamentoNome("");
    }
  }, [medicamentoNome]);

  const handleAddMedicamento = () => {

    if (!medicamentoNome.trim()) {
      setErroMedicamentoNome(true);
      setMensagemErroMedicamentoNome("Campo obrigatório");
      return;
    } else {
      setErroMedicamentoNome(false);
      setMensagemErroMedicamentoNome("");
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
        isClose={() => { setIsModalOpen(false); resetModal(); }}
      >
        <form>
          <div className='content-texto-modal'>
            <TextfieldModal
              label="Nome do Medicamento"
              value={medicamentoNome}
              type="text"
              onChange={(value) => setMedicamentoNome(value)}
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
