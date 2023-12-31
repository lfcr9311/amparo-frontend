import './HomeMedico.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import MenuButton from '../../components/MenuButton/MenuButton';
import ExameIcon from '../../assets/ExameIcon.svg';
import MedicamentosIcon from '../../assets/MedicationIcon.svg';
import InfoIcon from '../../assets/InfoIcon.svg';
import PacientIcon from '../../assets/PacientIcon.svg';
import ConsultIcon from '../../assets/ConsultIcon.svg';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import logoLogin from '../../assets/Amparo.svg';
import { useNavigate } from 'react-router-dom';
import { getDoctor } from '../../utils/apiService';
import { ROUTES } from '../../routes/constans';

const HomeMedico = () => {
  const navigate = useNavigate();
  const userIsPatient = false;
  const [name, setName] = useState('');
  useEffect(() => {
    getDoctor().then((response) => {
      const att = response.data
      setName(att.name)
    })
  }, [])
  const handleClickMedicamentos = () => {
   navigate(ROUTES.TELA_BUSCA_MEDICAMENTO());
  };

  const handleClickInfo = () => {
    navigate(ROUTES.INFORMACOES_MEDICO(), { state: { update: false } });
  };

  const handleClickConsutas = () => {
    
  };

  const handleClickPaciente = () => {
    navigate(ROUTES.MEUS_PACIENTES())
  }

  return (
    <>
      <HeaderHome type="headerHome" title={"Olá, Dr(a). " + name.split(' ')[0]}></HeaderHome>
      <div className="home-medico-container">
        <div className="sub-header-home-medico">
          <img
            style={{ width: '25px', height: '32px' }}
            src={logoLogin}
            alt="Logo Amparo"
          ></img>
          <a className="logo-title">Amparo</a>
        </div>
        <div className="button-container">
          <div className="menu-button">
            <MenuButton
              title={userIsPatient ? 'Exames' : 'Pacientes'}
              image={userIsPatient ? ExameIcon : PacientIcon}
              onClick={handleClickPaciente}
            />
          </div>
          <MenuButton
            title="Medicamentos"
            image={MedicamentosIcon}
            onClick={handleClickMedicamentos}
          />
        </div>
        <div className="button-container">
          <div className="menu-button">
            <MenuButton
              title="Informações"
              image={InfoIcon}
              onClick={handleClickInfo}
            />
          </div>
          <MenuButton
            title="Consultas"
            image={ConsultIcon}
            onClick={handleClickConsutas}
          />
        </div>
      </div>
      <Footer user="doctor" />
    </>
  );
};

export default HomeMedico;
