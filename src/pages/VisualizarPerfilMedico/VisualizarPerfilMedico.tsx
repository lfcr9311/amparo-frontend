import './VisualizarPerfilMedico.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import ProfileDoctorCard from '../../components/ProfileDoctorCard/ProfileDoctorCard';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import SelectConvenios from '../../components/Modal/Components/SelectConvenios/SelectConvenios';
import SelectModal from '../../components/Modal/Components/SelectModal/SelectModal';
import CustomButton from '../../components/Button/Button';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import { getDoctor } from '../../utils/apiService';

const VisualizacaoPerfilMedico = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [uf, setUf] = useState('');
  const [crm, setCrm] = useState('');
  const [ddd, setDdd] = useState('');
  const [phone, setPhone] = useState('');
  const [convenios, setConvenios] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    getDoctor().then((response) => {
      const att = response.data
      setName(att.name)
      setUf(att.uf)
      setCrm(att.crm)
      setEmail(att.email)
      setPhone(att.cellphone)
    })
  }, [])
  const handleDeletar = () => {
    console.log("im here");

    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    navigate(ROUTES.LOGIN())
  }

  return (
    <>
      <div className="header-container">
        <HeaderHome title="Perfil" type="headerPage" />
      </div>
      <div className="container">
        <div className="profile-card-container">
          <ProfileDoctorCard
            name={name}
            specialty="Infectologista"
            agreements="Unimed Sul"
            crm={crm + " - " + uf}
            email={email}
            phone={phone}
            edit={() => setIsModalOpen(!isModalOpen)}
            alterarSenha={() => console.log('Alterar Senha')}
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          title="Pefil"
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
              <SelectConvenios
                onChange={(value) => setConvenios(value)}
                value={convenios}
              />
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={() =>
                  console.log(name, uf, crm, ddd, phone, convenios)
                }
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
        <Footer user="doctor" />
      </div>
    </>
  );
};

export default VisualizacaoPerfilMedico;
