import React from 'react';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

interface CustomCardMedicamentos{
    label: string;
    icon?:boolean;  
    onClick: () => void;
}

export const CardMedicamentos: React.FC<CustomCardMedicamentos> = ({ label, icon, onClick, },props: SvgIconProps) => {

    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#E76553",
        display: 'flex',
        margin: '8px',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '17px',
        fontWeight: '500',
        borderRadius: "10px",
        height: "180px",
        width: "316px",
        textTransform: 'none',
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
        const rotatedIconStyle: React.CSSProperties = {
            transform: 'rotate(13deg) scaleY(1.1)', 
            fontSize: 150,
            marginRight: '-50px',
          };
      
          return (
            <Button
              style={buttonStyle}
              onClick={onClick}
              variant="contained"
              endIcon={
                <Box>
                  <BookOutlinedIcon sx={rotatedIconStyle} />
                </Box>
              }
            >
              {label}
            </Button>
            
        );
    }

} 
