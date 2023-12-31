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
import logoLogin from '../../assets/Amparo.svg';
import { useEffect, useState } from 'react';
import { getPatient } from '../../utils/apiService';

const HomePaciente = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const userIsPatient = true;
  useEffect(() => {
    getPatient().then((response) => {
      const att = response.data
      setName(att.name)
    })
  }, [])
  const handleClickExames = () => {
    navigate(ROUTES.EXAMES());
  };

  const handleClickMedicamentos = () => {
    navigate(ROUTES.MENU_MEDICAMENTOS());
  };

  const handleClickInfo = () => {
    navigate(ROUTES.INFORMACOES_PACIENTE());
  };

  const handleClickConsutas = () => {
    console.log('Cheguei aqui!!!');
  };

  return (
    <>
      <HeaderHome type="headerHome" title={"Olá, " + name.split(' ')[0]}></HeaderHome>
      <div className="home-paciente-container">
        <div className="sub-header-home-paciente">
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
    </>
  );
};

export default HomePaciente;
