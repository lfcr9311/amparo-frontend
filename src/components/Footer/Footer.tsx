import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeIconSelected from '../../assets/HomeIconSelected.svg';
import HomeIconNormal from '../../assets/HomeIconNormal.svg';
import ChatIconNormal from '../../assets/ChatIconNormal.svg';
import ProfileIconNormal from '../../assets/ProfileIconNormal.svg';
import ProfileIconSelected from '../../assets/ProfileIconSelected.svg';
import Icon from '@mui/material/Icon';
import { ROUTES } from '../../routes/constans';
import { useEffect, useState } from 'react';

const containerStyle: React.CSSProperties = {
  width: 'auto',
  height: '109px',
  backgroundColor: '#ffffff',
  gap: '75px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
};

const iconStyle: React.CSSProperties = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  display: 'flex',
  width: '50px',
  height: '27px',
};

const textStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '5px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '12px',
  justifyContent: 'center',
  alignItems: 'center',
};

interface FooterProps {
  user: 'patient' | 'doctor';
}

export default function Footer({ user }: FooterProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSelectedHome, setIsSelectedHome] = useState(true);
  const [isSelectedProfile, setIsSelectedProfile] = useState(false);
  const isSelectedChat = true;

  useEffect(() => {
    const pathname = location.pathname;
    setIsSelectedHome(
      pathname === ROUTES.HOME_PACIENTE() || pathname === ROUTES.HOME_MEDICO()
    );
    setIsSelectedProfile(
      pathname === ROUTES.PERFIL_PACIENTE() || pathname === ROUTES.PERFIL_MEDICO()
    );
  }, [location.pathname]);

  const handleCLickPerfilPaciente = () => {
    navigate(ROUTES.PERFIL_PACIENTE());
  };

  const handleClickHomePaciente = () => {
    navigate(ROUTES.HOME_PACIENTE());
  };

  const handleCLickPerfilMedico = () => {
    navigate(ROUTES.PERFIL_MEDICO());
  };

  const handleClickHomeMedico = () => {
    navigate(ROUTES.HOME_MEDICO());
  };

  return (
    <footer style={containerStyle}>
      <IconButton
        onClick={
          user === 'patient' ? handleClickHomePaciente : handleClickHomeMedico
        }
      >
        <div>
          <Icon style={iconStyle}>
            <img src={isSelectedHome ? HomeIconSelected : HomeIconNormal} />
          </Icon>
          <div style={textStyle}>Home</div>
        </div>
      </IconButton>
      <IconButton
        onClick={
          user === 'patient' ? handleClickHomePaciente : handleClickHomeMedico
        }
      >
        <div>
          <Icon style={iconStyle}>
            <img src={isSelectedChat ? ChatIconNormal : ChatIconNormal} />
          </Icon>
          <div style={textStyle}>Chat</div>
        </div>
      </IconButton>
      <IconButton
        onClick={
          user === 'patient'
            ? handleCLickPerfilPaciente
            : handleCLickPerfilMedico
        }
      >
        <div>
          <Icon style={iconStyle}>
            <img
              src={isSelectedProfile ? ProfileIconSelected : ProfileIconNormal}
            />
          </Icon>
          <div style={textStyle}>Perfil</div>
        </div>
      </IconButton>
    </footer>
  );
}
