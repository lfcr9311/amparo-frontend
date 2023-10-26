import './HomePaciente.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import MenuButton from '../../components/MenuButton/MenuButton';
import ExameIcon from '../../assets/ExameIcon.svg';
import MedicamentosIcon from '../../assets/MedicationIcon.svg';
import InfoIcon from '../../assets/InfoIcon.svg';
import PacientIcon from '../../assets/PacientIcon.svg';
import ConsultIcon from '../../assets/ConsultIcon.svg';
import { ROUTES } from '../../routes/constans';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import logoLogin from '../../assets/amparo.svg';

const HomePaciente = () => {
  const navigate = useNavigate();
  const userIsPatient = true;
  const handleClickExames = () => {
    navigate(ROUTES.EXAMES_VAZIO());
  };

  const handleClickMedicamentos = () => {
    navigate(ROUTES.MENU_MEDICAMENTOS());
  };

  const handleClickInfo = () => {
    console.log('Cheguei aqui!!!');
  };

  const handleClickConsutas = () => {
    console.log('Cheguei aqui!!!');
  };

  return (
    <div className="container-home">
      <HeaderHome type="headerHome" title="Olá, Martin!"></HeaderHome>
      <div className="body">
        <div className="sub-header">
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
              onClick={handleClickExames}
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
      <Footer user="patient" />
    </div>
  );
};

export default HomePaciente;
