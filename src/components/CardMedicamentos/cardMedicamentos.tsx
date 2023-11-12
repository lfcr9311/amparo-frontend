import React from 'react';
import Button from '@mui/material/Button';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import Box from '@mui/material/Box';

interface CustomCardMedicamentos{
    iconType?: 'icon1' | 'icon2'; 
     onClick: () => void;
}

export const CardMedicamentos: React.FC<CustomCardMedicamentos> = ({  iconType, onClick, }) => {

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
    if (!iconType || iconType === 'icon1'){
      const rotatedIconStyle: React.CSSProperties = {
        transform: 'rotate(13deg) scaleY(1.1)', 
        fontSize: 150,
        marginRight: '-30px',
        marginTop: '10px',
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
          {'Minha Lista'}
        </Button>
        
    );
    }
    else if (iconType === 'icon2'){
        const rotatedIconStyle: React.CSSProperties = {
            transform: 'rotate(13deg) scaleY(1.1)', 
            fontSize: 150,
            marginRight: '-10px',
            marginTop: '10px',
          };
      
          return (
            <Button
              style={buttonStyle}
              onClick={onClick}
              variant="contained"
              endIcon={
                <Box>
                  <DateRangeRoundedIcon sx={rotatedIconStyle} />
                </Box>
              }
            >
              {'Agenda de Remédios'}
            </Button>
            
        );
    }

} 
