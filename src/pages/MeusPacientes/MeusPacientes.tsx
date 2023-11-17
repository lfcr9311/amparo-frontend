import { useEffect, useState } from 'react';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './MeusPacientesStyle.css';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import CardUsuario from '../../components/CardUsuario/CardUsuario';
import ModalDetalhesPaciente from '../../components/ModalDetalhesPaciente/ModalDetalhesPaciente.tsx';
import { fetchMeusPacientes } from '../../utils/apiService.tsx';
import { CircularProgress } from '@mui/material';

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

const MeusPacientes: React.FC = () => {
  const [isModalDetalhesOpen, setisModalDetalhesOpen] = useState(false);
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
      const pacientes = await fetchMeusPacientes();
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
      <HeaderHome title='Meus Pacientes' type='headerPage' />
      {isLoading && <CircularProgress color='error' />}
      {!isLoading && (
        <>
          <div className='search-container'>
            <input
              className='search-input'
              type='text'
              placeholder='Buscar...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
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
                <h3 className='warning'>Não foram encontrados pacientes.</h3>
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
        <ModalDetalhesPaciente
          paciente={paciente}
          isModalOpen={isModalDetalhesOpen}
          setIsModalOpen={setisModalDetalhesOpen}
          setpaciente={setPaciente}
        />
      </Modal>
      <Footer user='doctor' />
    </>
  );
};

export default MeusPacientes;