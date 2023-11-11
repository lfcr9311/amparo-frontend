import { useEffect, useState } from 'react';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './MeusMedicosStyle.css'; // Importe o arquivo CSS
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import ModalDetalhesMedico from '../../components/ModalDetalhesMedico/ModalDetalhesMedico';
import Solicitacao from '../../components/Modal/Components/Solicitacao/SolicitacaoModal';
import CardUsuario from '../../components/CardUsuario/CardUsuario';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import { addDoctor, fetchMeusMedicos, searchDoctor } from '../../utils/apiService.tsx';

interface Paciente {
  id: number;
  email: string;
  name: string;
  cellphone: string;
  profilePicture?: string;
  isAnonymous: boolean;
  cpf: string;
  birthDate: string;
  numSus: string;
}

const MeusMedicos: React.FC = () => {
  const [isModalDetalhesOpen, setisModalDetalhesOpen] = useState(false);
  const [isModalSolicitacaoOpen, setisModalSolicitacaoOpen] = useState(false);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [originalPaciente, setOriginalPaciente] = useState<Paciente[]>([]);
  const [paciente, setPaciente] = useState<Paciente>();
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pacientes = await fetchMeusMedicos();
      setOriginalPaciente(pacientes);
      setPacientes(pacientes);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const normalizeText = (text: string) =>
      text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const normalizedSearchText = normalizeText(searchText);

    const filteredPaciente = originalPaciente.filter((paciente) =>
      normalizeText(paciente.name ?? '').includes(normalizedSearchText)
    );

    setPacientes(filteredPaciente);
  }, [searchText, originalPaciente]);

  const handleCardClick = (selectedPaciente: Paciente) => {
    setisModalDetalhesOpen(!isModalDetalhesOpen);
    setPaciente(selectedPaciente);
  };

  const handleAddButtonClick = () => {
    setisModalSolicitacaoOpen(!isModalSolicitacaoOpen);
  };

  useEffect(() => {
    if (setSuccessSnackbar) {
      setTimeout(() => {
        setSuccessSnackbar(false);
      }, 2000);
    }
  }, [successSnackbar]);

  useEffect(() => {
    if (errorSnackbar) {
      setTimeout(() => {
        setErrorSnackbar(false);
      }, 2000);
    }
  }, [errorSnackbar]);

  return (
    <>
      <HeaderHome title='Meus Médicos' type='headerPage' />
      {isLoading && <CircularProgress color='error' />}
      {!isLoading && (
        <>
          <div className='search-container'>
            <input
              className='search-input' // Adicione a classe CSS para o input
              type='text'
              placeholder='Buscar...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='36'
              viewBox='0 0 36 36'
              fill='none'
              onClick={handleAddButtonClick}
            >
              <path
                d='M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM27 19.8H19.8V27H16.2V19.8H9V16.2H16.2V9H19.8V16.2H27V19.8Z'
                fill='#E10E17'
              />
            </svg>
          </div>
          <div className='my-doctors-container'>
            {pacientes.length > 0 ? (
              pacientes.map((paciente) => (
                <CardUsuario
                  key={paciente.id}
                  name={paciente.name}
                  profilePicture={paciente.profilePicture}
                  onClick={() => handleCardClick(paciente)}
                />
              ))
            ) : (
              <div className='no-doctors'>
                <h3>Não foram encontrados pacientes.</h3>
              </div>
            )}
          </div>
        </>
      )}

      <Modal
        isOpen={isModalDetalhesOpen}
        title=''
        isClose={() => setisModalDetalhesOpen(!isModalDetalhesOpen)}
      >
        <ModalDetalhesMedico
          medico={medico}
          isModalOpen={isModalDetalhesOpen}
          setIsModalOpen={setisModalDetalhesOpen}
          setMedico={setMedico}
        />
      </Modal>
      <Solicitacao
        isModalOpen={isModalSolicitacaoOpen}
        setIsModalOpen={setisModalSolicitacaoOpen}
        onClickButton={onClickButton}
        setCrm={setCrm}
        crm={crm}
        setUf={setUf}
        uf={uf}
      />

      <Snackbar open={successSnackbar} autoHideDuration={6000}>
        <Alert onClose={() => {
          setSuccessSnackbar(false);
        }} severity="success" sx={{ width: '100%' }}>
          Solicitação enviada com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={errorSnackbar} autoHideDuration={6000}>
        <Alert onClose={() => {
          setErrorSnackbar(false);
        }} severity="error" sx={{ width: '100%' }}>
          Erro ao enviar solicitação!
        </Alert>
      </Snackbar>
      <Footer user='patient' />
    </>
  );
};

export default MeusMedicos;