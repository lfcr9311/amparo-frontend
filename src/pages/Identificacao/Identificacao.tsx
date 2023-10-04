import Logo from '../../assets/amparo.svg';
import './Identificacao.css';
import { ROUTES } from '../../routes/constans';
import MenuButton from '../../components/MenuButton/MenuButton';
import PacientCardIcon from '../../assets/PacientCardIcon.svg';
import MedicoIcon from '../../assets/MedicoIcon.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export const Identificacao: React.FC = () => {
  const navigate = useNavigate();

  const HandleClickPaciente = () => {
    console.log('Paciente');
    navigate(ROUTES.CADASTRO_PACIENTE());
  };
  const HandleClickMedico = () => {
    console.log('Medico');
    navigate(ROUTES.CADASTRO_MEDICO());
  };
  const handleGoBack = () => {
    navigate(ROUTES.LOGIN());
  };
  return (
    <div className="identificacao-container">
      <img src={Logo} alt="Logo Amparo" />
      <br />
      <a className="frase">Quem é você?</a>
      <div className="buttons-group">
        <MenuButton
          onClick={HandleClickPaciente}
          title={'Paciente'}
          image={PacientCardIcon}
        ></MenuButton>
        <MenuButton
          onClick={HandleClickMedico}
          title={'Médico'}
          image={MedicoIcon}
        ></MenuButton>
      </div>
      <div className="go-back" onClick={handleGoBack}>
        <ArrowBackIcon style={{ width: '28px', height: '28px' }} />
        <a>Voltar</a>
      </div>
    </div>
  );
};
