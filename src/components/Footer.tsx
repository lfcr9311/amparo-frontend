import React from "react";
import { useNavigate } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import HomeIcon from '../assets/Home.svg';
import ChatIcon from '../assets/Chat.svg';
import ProfileIcon from '../assets/Profile.svg';
import Icon from "@mui/material/Icon";


const containerStyle: React.CSSProperties = {
  width: "auto",
  height: "109px",
  gap: "75px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //marginTop: "50px",
  position: 'absolute',
  bottom: 0, // Position at the bottom of the nearest positioned ancestor
  left: 0,   // Position at the left edge of the nearest positioned ancestor
  right: 0,  // Positi
};

const iconStyle: React.CSSProperties = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: "50px",
  height: "27px",
};

const textStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "5px",
  fontFamily: "Poppins, sans-serif",
  fontSize: "12px",
  justifyContent: "center",
  alignItems: "center",
};

// interface FooterProps {
//   onClickHome: () => void;
//   onClickChat: () => void;
//   onClickPerfil: () => void;
// }

export const Footer: React.FC = ({}) => {
  const navigate = useNavigate();

  const handleCLickPerfil = () => {
    navigate('/perfil/paciente')
  }

  const handleClickHome = () => {
    navigate("/home/paciente")
  }
  return (
    <footer style={containerStyle}>
      <IconButton onClick={handleClickHome} //onClickHome
        sx={{ color: "#000000" }}>
        <div>
          <Icon style={iconStyle}>
            <img src={HomeIcon} />
          </Icon>
          <div style={textStyle}>Home</div>
        </div>
      </IconButton>
      <IconButton onClick={handleClickHome} //onClickChat
        sx={{ color: "#000000" }}>
        <div>
          <Icon style={iconStyle}>
            <img src={ChatIcon} />
          </Icon>
          <div style={textStyle}>Chat
          </div>
        </div>
      </IconButton>
      <IconButton onClick={handleCLickPerfil} //onClickPerfil
        sx={{ color: "#000000" }}>
        <div>
          <Icon style={iconStyle}>
            <img src={ProfileIcon} />
          </Icon>
          <div style={textStyle}>Perfil</div>
        </div>
      </IconButton>
    </footer>
  );
}

export default Footer;
