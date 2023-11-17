import './VisualizarPerfilMedico.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import ProfileDoctorCard from '../../components/ProfileDoctorCard/ProfileDoctorCard';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import SelectModal from '../../components/Modal/Components/SelectModal/SelectModal';
import CustomButton from '../../components/Button/Button';
import { Alert, Button, CircularProgress, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import { getDoctor, updateDoctor } from "../../utils/apiService.tsx";

interface Doctor {
  cellphone: string;
  crm?: string;
  email?: string;
  id?: string;
  isAnonymous?: boolean;
  name?: string;
  profilePicture?: string;
  uf?: string;
}

const VisualizacaoPerfilMedico = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctor, setDoctor] = useState<Doctor>();
  const [name, setName] = useState('');
  const [uf, setUf] = useState('');
  const [crm, setCrm] = useState('');
  const [ddd, setDdd] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const navigate = useNavigate()

  const handleDeletar = () => {
    console.log("im here");

    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    navigate(ROUTES.LOGIN())
  }

  const resetFields = () => {
    setName('');
    setUf('');
    setCrm('');
    setDdd('');
    setPhone('');
  }

  useEffect(() => {
    setIsLoading(true)
    getDoctor().then((response) => {
      setDoctor(response.data)
      setIsLoading(false)

    }).catch((error) => {
      console.log(error)
      setIsLoading(false)

    })
  }, []);

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

  // @ts-ignore
  return (<>
    <div className="header-container">
      <HeaderHome title="Perfil" type="headerPage" />
    </div>
    {isLoading && <CircularProgress color='error' />}
    {!isLoading && (<>

      <div className="container">
        <div className="profile-card-container">
          <ProfileDoctorCard
            name={`Dr. ${doctor?.name}`}
            uf={doctor?.uf}
            crm={doctor?.crm}
            email={doctor?.email}
            phone={doctor?.cellphone?.replace(/^(\d{2})(\d+)$/, '($1) $2')}
            edit={() => setIsModalOpen(!isModalOpen)}
            alterarSenha={() => console.log('Alterar Senha')}
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          title="Pefil"
          isClose={() => {
            setIsModalOpen(!isModalOpen);
            setName('');
            setUf('');
            setCrm('');
            setDdd('');
            setPhone('');
          }}
        >
          <form>
            <div className="content-modal">
              <TextfieldModal
                label="Seu nome"
                value={name}
                type="text"
                onChange={(value) => setName(value)}
              />
              <div className="container-aux">
                <SelectModal onChange={(value) => setUf(value)} value={uf} />
                <TextfieldModal
                  label="CRM"
                  value={crm}
                  type="text"
                  onChange={(value) => setCrm(value)}
                  width="195.5px"
                />
              </div>
              <div className="container-aux">
                <TextfieldModal
                  label="DDD"
                  value={ddd}
                  type="text"
                  onChange={(value) => setDdd(value)}
                  width="65.5px"
                />
                <TextfieldModal
                  label="Telefone"
                  value={phone}
                  type="text"
                  onChange={(value) => setPhone(value)}
                  width="195.5px"
                />
              </div>
              {/*<SelectConvenios*/}
              {/*    onChange={(value) => setConvenios(value)}*/}
              {/*    value={convenios}*/}
              {/*/>*/}
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={() => {
                  console.log('ddd: ', ddd);
                  let newPhone: string | undefined = '';

                  if (ddd !== '' && phone !== '') {
                    newPhone = ddd + phone;
                  } else if (ddd === '' && phone !== '') {
                    newPhone = doctor?.cellphone?.substring(0, 2) + phone;
                  } else if (ddd !== '' && phone === '') {
                    newPhone = ddd + doctor?.cellphone;
                  } else {
                    newPhone = doctor?.cellphone;
                  }

                  updateDoctor(name, uf, crm, newPhone, doctor).then(() => {
                    resetFields();
                    setIsModalOpen(!isModalOpen);
                    setSuccessSnackbar(true);
                    window.location.reload();
                  }).catch((err) => {
                    resetFields();
                    setErrorSnackbar(true);
                    console.error(err);
                    window.location.reload();
                  })
                }}
              />
            </div>
          </form>
        </Modal>
        <div>
          <Button
            sx={{
              color: '#e10e17',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              textDecoration: 'none',
              textTransform: 'none',
            }}
            onClick={handleDeletar}
          >
            Sair da Conta
          </Button>
        </div>
      </div>
      <Snackbar open={successSnackbar} autoHideDuration={6000}>
        <Alert onClose={() => {
          setSuccessSnackbar(false);
        }} severity="success" sx={{ width: '100%' }}>
          Informações editadas com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={errorSnackbar} autoHideDuration={6000}>
        <Alert onClose={() => {
          setErrorSnackbar(false);
        }} severity="error" sx={{ width: '100%' }}>
          Erro ao editar informações!
        </Alert>
      </Snackbar>
    </>)}
    <div className="footer-container">
      <Footer user="doctor" />
    </div>
  </>);
};

export default VisualizacaoPerfilMedico;
