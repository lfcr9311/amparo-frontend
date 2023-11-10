import './HomeMedico.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import MenuButton from '../../components/MenuButton/MenuButton';
import ExameIcon from '../../assets/ExameIcon.svg';
import MedicamentosIcon from '../../assets/MedicationIcon.svg';
import InfoIcon from '../../assets/InfoIcon.svg';
import PacientIcon from '../../assets/PacientIcon.svg';
import ConsultIcon from '../../assets/ConsultIcon.svg';
import Footer from '../../components/Footer/Footer';
import logoLogin from '../../assets/Amparo.svg';
import { ROUTES } from '../../routes/constans';
import { useNavigate } from 'react-router-dom';

const HomeMedico = () => {
  const userIsPatient = false;
  const navigate = useNavigate();


  const handleClickMedicamentos = () => {
   navigate(ROUTES.TELA_BUSCA_MEDICAMENTO());
  };

  const handleClickInfo = () => {
    
  };

  const handleClickConsutas = () => {
    
  };

  const handleClickPaciente = () => {
    console.log('ir para tela de exames de pacientes.')
  };

  const handleClickPaciente = () => {
    console.log('ir para tela de exames de pacientes.')
  };

  return (
    <>
      <HeaderHome type="headerHome" title="Olá, Dr. Fulano!"></HeaderHome>
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
