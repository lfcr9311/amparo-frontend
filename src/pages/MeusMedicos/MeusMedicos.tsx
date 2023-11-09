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

interface Medico {
  id: number;
  email: string;
  name: string;
  cellphone: string;
  profilePicture?: string;
  isAnonymous: boolean;
  crm: string;
  uf: string;
}

const MeusMedicos: React.FC = () => {
  const [isModalDetalhesOpen, setisModalDetalhesOpen] = useState(false);
  const [isModalSolicitacaoOpen, setisModalSolicitacaoOpen] = useState(false);
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [originalMedicos, setOriginalMedicos] = useState<Medico[]>([]);
  const [medico, setMedico] = useState<Medico>();
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [uf, setUf] = useState('');
  const [crm, setCrm] = useState('');
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const doctors = await fetchMeusMedicos();
      setOriginalMedicos(doctors);
      setMedicos(doctors);
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

    const filteredMedicos = originalMedicos.filter((medico) =>
      normalizeText(medico.name ?? '').includes(normalizedSearchText)
    );

    setMedicos(filteredMedicos);
  }, [searchText, originalMedicos]);

  const handleCardClick = (selectedMedico: Medico) => {
    setisModalDetalhesOpen(!isModalDetalhesOpen);
    setMedico(selectedMedico);
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

  const onClickButton = () => {
    searchDoctor(crm, uf).then((response) => {
      addDoctor(response.data.id).then((response) => {
        console.log(`Médico adicionado com sucesso ${response}`);
        setisModalSolicitacaoOpen(false);
        setSuccessSnackbar(true);
        setisModalSolicitacaoOpen(false);
        setCrm('');
        setUf('')
        fetchData();
      }).catch((err) => {
        console.log(`Erro ao adicionar Médico ${err}`);
        setErrorSnackbar(true);
        setCrm('');
        setUf('')
      });
    }).catch((err) => {
      console.log(`Erro ao pesquisar Médico ${err}`);
      setErrorSnackbar(true);
      setCrm('');
      setUf('')
    });
  };

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
            {medicos.length > 0 ? (
              medicos.map((medico) => (
                <CardUsuario
                  key={medico.id}
                  name={medico.name}
                  profilePicture={medico.profilePicture}
                  onClick={() => handleCardClick(medico)}
                />
              ))
            ) : (
              <div className='no-doctors'>
                <h3>Não foram encontrados médicos.</h3>
                <p>Clique no botão de adicionar para adicionar um novo médico.</p>
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