import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  variant: 'outlined' | 'contained';
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset"; 
}

const CustomButton: React.FC<CustomButtonProps> = ( props ) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#E10E17",
    margin: '8px',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    borderRadius: "16px",
    height: "39px",
    width: "152px",
  };

  return (
    <Button
      variant={props.variant}
      color='primary'
      style={buttonStyle}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.label}
    </Button>
  );
};

export default CustomButton;
