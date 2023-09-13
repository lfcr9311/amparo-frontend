import React from "react";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const containerStyle: React.CSSProperties = {
  width: "auto",
  height: "109px",
  gap: "75px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // marginTop: 'auto',
  position: 'fixed',
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

interface FooterProps {
  onClickHome: () => void;
  onClickChat: () => void;
  onClickPerfil: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onClickHome, onClickChat, onClickPerfil }) => {
  return (
    <footer style={containerStyle}>
      <IconButton onClick={onClickHome}
        sx={{ color: "#000000" }}>
        <div>
          <HomeIcon style={iconStyle} />
          <div style={textStyle}>Home</div>
        </div>
      </IconButton>
      <IconButton onClick={onClickChat}
        sx={{ color: "#000000" }}>
        <div>
          <ChatIcon style={iconStyle} />
          <div style={textStyle}>Chat
          </div>
        </div>
      </IconButton>
      <IconButton onClick={onClickPerfil}
        sx={{ color: "#000000" }}>
        <div>
          <AccountBoxIcon style={iconStyle} />
          <div style={textStyle}>Perfil</div>
        </div>
      </IconButton>
    </footer>
  );
}

export default Footer;
