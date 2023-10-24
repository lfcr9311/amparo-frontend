import React from 'react';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';

interface CustomButtonSalmonProps {
  label: string;
  icon?: boolean; //Testar
  onClick: () => void;
}

export const ButtonSalmon: React.FC<CustomButtonSalmonProps> = ({ label, icon, onClick, }) => {

    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#E76553",
        display: 'flex',
        margin: '8px',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '19px',
        fontWeight: '500',
        borderRadius: "10px",
        height: "53px",
        width: "164px",
    };
    if (!icon){
        return (
            <Button
                style={buttonStyle}            
                onClick={onClick}
                variant='contained'
            >
                {label}
            </Button>
        );
    }
    else{
        return(
            <Button

            
            sx={{
                '& > :not(style)': {
                  m: 1,
                  marginTop:2.5,
                },
              }}


            style={buttonStyle}            
            onClick={onClick}
            variant='contained'
            
            startIcon = {<Box><CheckCircleOutlineIcon sx={{fontSize: 30}}/> </Box>}
            
                  
            >
                {label}
            </Button>
            
        );
    }

} 
