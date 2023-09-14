import React from 'react';
import { Button } from '@mui/material';

interface MenuButtonProps {
  onClick: () => void;
  title: string;
  image: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, title, image }) => {
  const buttonStyle: React.CSSProperties = {
    width: '143px',
    height: '143px',
    backgroundColor: '#E76553',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonImage: React.CSSProperties = {
    maxHeight: '50%',
    maxWidth: '50%'
  };
 const buttonText: React.CSSProperties ={
  marginTop: '8px',
  fontFamily: 'Poppins',
  fontSize: '17px',
  color: '#ffff'
 }
  return (
    <button style={buttonStyle} onClick={onClick}>
      <img src={image} style={buttonImage}></img>
      <a style={buttonText}> {title}</a>
    </button>
  );
};

export default MenuButton;