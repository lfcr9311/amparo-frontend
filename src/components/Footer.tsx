import React from "react";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const containerStyle: React.CSSProperties = {
  backgroundColor: '#FFFFFF',
  width: "375px",
  height: "109px",
};

const iconStyle: React.CSSProperties = {
    height: "27px",
    width: "27px",
    marginLeft: "12px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: '35px',
}

interface FooterProps {
    onClickHome: () => void;
    onClickChat: () => void;
    onClickPerfil: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onClickHome, onClickChat, onClickPerfil }) => { 
  return (
    <footer style={containerStyle}>    
      <IconButton onClick={onClickHome} >
        <HomeIcon style={iconStyle}/>
      </IconButton>
      <IconButton onClick={onClickChat}>
        <ChatIcon style={iconStyle}/>
      </IconButton>
      <IconButton onClick={onClickPerfil}>        
        <AccountBoxIcon style={iconStyle}/>
      </IconButton>
    </footer>
  );
}

export default Footer;
