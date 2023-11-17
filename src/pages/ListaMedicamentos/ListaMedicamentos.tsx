import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './ListaMedicamentos.css';
import ThinkEmoji from '../../assets/ThinkingEmoji.svg'
import CardRemedio from '../../components/CardRemedio/CardRemedio';
import CustomButton from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useState, useEffect } from 'react';
import SelectFrequencia from '../../components/Modal/Components/SelectFrequencia/SelectFrequencia';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import { motion } from "framer-motion";
import MedicinenameModal from '../../components/Modal/Components/medicinenameModal/medicinenameModal';
import Checkbox from '@mui/material/Checkbox';
import DosagemModal from '../../components/Modal/Components/DosagemModal/dosagemModal';
import { Box } from '@mui/system';
import { getAllDosages, getAllMedicines, saveDosage } from '../../utils/apiService';
import { useNavigate } from 'react-router-dom';

interface Medicamento {
  id: string,
  label: string;
  dosagem?: string;
  frequencia?: string;
  dataFinal?: string;
}

const fadeInOut = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};


export default function ListaMedicamentos() {
  const navigate = useNavigate()
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
  const [medicamentosLista, setMedicamentosLista] = useState<{ name: string, id: number }[]>([]);

  const [unidadeMedida, setUnidadeMedida] = useState('mg');

  const [dosages, setDosages] = useState<Medicamento[]>([]);

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
    setUnidadeMedida('mg');
  };

  useEffect(() => {
    getAllMedicines()
      .then((data) => {
        setMedicamentosLista(data)
      })
    loadDosages()
  }, [])


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

  const loadDosages = async () => {
    const data = await getAllDosages();
    const formattedMedicamentos = data.map((dosage: any) => ({
      id: dosage.id,
      label: dosage.medicineName,
      dosagem: dosage.quantity,
      frequencia: dosage.frequency,
      dataFinal: dosage.finalDate
    }));
    setDosages(formattedMedicamentos);
    return true;
  }

  const handleAddMedicamento = () => {

    if (!medicamentoNome || !medicamentoNome.label.trim()) {
      setErroMedicamentoNome(true);
      setMensagemErroMedicamentoNome("Campo obrigatório");
      return;
    } else {
      setErroMedicamentoNome(false);
      setMensagemErroMedicamentoNome("");
    }
    const medicamento = medicamentosLista.find(it => it.name == medicamentoNome.label)
    if (!medicamento) {
      setErroMedicamentoNome(true);
      setMensagemErroMedicamentoNome("Medicamento não encontrado, selecione de acordo com a lista");
      return
    }

    if (!dataFinal && !usoContinuo) {
      setErroData(true);
      setMensagemErroData("Por favor, selecione um dos campos em vermelho");
      return;
    } else {
      setErroData(false);
      setMensagemErroData("");
    }

    const novaDosagem = {
      medicineId: medicamento.id,
      quantity: dosagem && unidadeMedida ? `${dosagem}${unidadeMedida}` : '',
      frequency: frequencia,
      finalDate: usoContinuo ? undefined : dataFinal,
    };

    saveDosage(novaDosagem)
      .then(loadDosages)
      .then(() => {
        setIsModalOpen(false);
        resetModal();

        setMedicamentoNome(null);
        setDosagem('');
        setFrequencia('');
        setDataFinal('');
        setUsoContinuo(false);

        setShowSuccessMessage(true);
      })
  };

  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <p className="title-list-medicine">Meus Remedios</p>
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
        {dosages.length == 0
          ?
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', minHeight: '350px' }}>
            <p style={{ fontFamily: 'Poppins', color: '#a8a8a8', fontSize: '25px' }}>Nenhum remédio adicionado</p>
            <img style={{ transform: 'scale(2)' }} src={ThinkEmoji} />
          </Box>
          :
          <Box style={{ minHeight: '350px' }}>
            {dosages.map((dosage, index) => (
              <CardRemedio
                key={index}
                label={dosage.label.length >= 18 ? dosage.label.substring(0, 15) + "..." : dosage.label}
                onClick={() => navigate(`/lista/medicamentos/${dosage.id}`)}
              />
            ))}
          </Box>
        }
      </div>
      <div className='button-add-list-medicament'>
        <CustomButton
          label="Adicionar"
          variant="contained"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        title="Medicamento"
        isClose={() => { setIsModalOpen(false); resetModal(); }}
      >
        <form>
          <div className='content-texto-modal'>
            <MedicinenameModal
              label="Nome do Medicamento"
              options={medicamentosLista.length == 0 ? [] : medicamentosLista.map(medicamento => medicamento.name)}
              value={medicamentoNome?.label || null}
              onChange={(newValue: string | null) => setMedicamentoNome(newValue ? { label: newValue } : null)}
              error={erroMedicamentoNome}
              helperText={mensagemErroMedicamentoNome}
              width='270px'
            />
            <DosagemModal
              dosagem={dosagem}
              unidadeMedida={unidadeMedida}
              onDosagemChange={(novaDosagem: string) => setDosagem(novaDosagem)}
              onUnidadeMedidaChange={(novaUnidade: string) => setUnidadeMedida(novaUnidade)}
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
            <Checkbox
              id="uso-continuo"
              className={erroData ? 'checkbox-error' : ''}
              checked={usoContinuo}
              onChange={() => setUsoContinuo(!usoContinuo)}
              inputProps={{ 'aria-label': 'Uso contínuo' }}
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
      </Modal >
      <Footer user="patient" />
    </>
  );
}
