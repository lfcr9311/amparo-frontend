import './VisualizarPerfil.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { PatientProfileCard } from '../../components/ProfilePatientCard/ProfilePatientCard';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import CustomButton from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import { Button } from '@mui/material';
import { getPatient } from '../../utils/apiService';

const VisualizacaoPerfilPaciente = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nSus, setNSus] = useState('');
  const [ddd, setDdd] = useState('');
  const [cellphone, setCellphone] = useState('');
  const navigate = useNavigate()
  const handleDeletar = () => {
    console.log("im here");
    
    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    navigate(ROUTES.LOGIN())
  }
  useEffect(() =>{
    getPatient().then((response) =>{
      const att = response.data
      setName(att.name)
      setEmail(att.email)
      setDataNascimento(att.birthDate)
      setNSus(att.numSus)
      setCpf(att.cpf)     
    })
  }, [])
  return (
    <>
      <div className="header-container">
        <HeaderHome type="headerPage" title="Perfil" />
      </div>
      <div className="container">
        <div className="profile-card-container">
          <PatientProfileCard
            name={name}
            email={email}
            cpf={cpf}
            dataNascimento={dataNascimento}
            onClickChangePassword={() => console.log('Change Password')}
            onClickEditProfile={() => setIsModalOpen(!isModalOpen)}
            numSus={nSus}
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          title="Perfil"
          isClose={() => setIsModalOpen(!isModalOpen)}
        >
          <form>
            <div className="content-modal">
              <TextfieldModal
                label="Seu nome"
                value={name}
                type="text"
                onChange={(value) => setName(value)}
              />
              <TextfieldModal
                label="CPF"
                value={cpf}
                type="text"
                onChange={(value) => setCpf(value)}
              />
              <TextfieldModal
                label="Data de Nascimento"
                value={dataNascimento}
                type="text"
                onChange={(value) => setDataNascimento(value)}
              />
              <TextfieldModal
                label="Nº do SUS"
                value={nSus}
                type="text"
                onChange={(value) => setNSus(value)}
              />
              <div className="cellphone-container">
                <TextfieldModal
                  label="DDD"
                  value={ddd}
                  type="text"
                  width="65.5px"
                  onChange={(value) => setDdd(value)}
                />
                <TextfieldModal
                  label="Telefone"
                  value={cellphone}
                  type="text"
                  width="195.5px"
                  onChange={(value) => setCellphone(value)}
                />
              </div>
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={() => console.log('Salvar')}
              />
            </div>
          </form>
        </Modal>
        <div >
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
      <div className="footer-container">
        <Footer user="patient" />
      </div>
    </>
  );
};

export default VisualizacaoPerfilPaciente;
