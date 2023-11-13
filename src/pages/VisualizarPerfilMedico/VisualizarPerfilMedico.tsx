import './VisualizarPerfilMedico.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import ProfileDoctorCard from '../../components/ProfileDoctorCard/ProfileDoctorCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import { getDoctor } from '../../utils/apiService';

const VisualizacaoPerfilMedico = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [uf, setUf] = useState('');
  const [crm, setCrm] = useState('');
  const [ddd, setDdd] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleDeletar = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    navigate(ROUTES.LOGIN())
  }

  useEffect(() => {
    getDoctor().then((response) => {
      const att = response.data
      setName(att.name)
      setEmail(att.email)
      setUf(att.uf)
      setCrm(att.crm)
      setDdd(att.ddd)
      setPhone(att.phone)
    })
  });

  return (
    <>
      <div className="header-container">
        <HeaderHome title="Perfil" type="headerPage" />
      </div>
      <div className="container">
        <div className="profile-card-container">
          <ProfileDoctorCard
            name={name}
            crm={crm + " / " + uf}
            email={email}
            phone={"(" + ddd + ") " + phone}
            edit={() => setIsModalOpen(!isModalOpen)}
            alterarSenha={() => console.log('Alterar Senha')}
          />
        </div>
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
