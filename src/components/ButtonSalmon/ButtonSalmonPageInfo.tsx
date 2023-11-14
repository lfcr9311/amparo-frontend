import React from 'react';
import { Button, Box, createTheme, ThemeProvider } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

interface ButtonSalmonPageInfoProps {
    infoTitle: string;
    dateAndDoctorInfo: string;
    onClick: () => void;
}

export const ButtonSalmonPageInfo: React.FC<ButtonSalmonPageInfoProps> = ({ infoTitle, dateAndDoctorInfo, onClick }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#E76553",
        display: 'flex',
        margin: '8px',
        color: 'white',
        fontFamily: 'Poppins',
        borderRadius: "10px",
        height: "144px",
        textAlign: 'start',
        width: "327px",
    };
    const theme = createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Button
                style={buttonStyle}
                onClick={onClick}
                variant='contained'
                endIcon={<Box><ArrowForwardIos sx={{ fontSize: 30 }} /> </Box>}
            >
                <div>
                    <p style={{ fontSize: '19px', lineHeight: '28px', fontWeight: '400', marginBottom: '10px' }}>
                        {infoTitle}
                    </p>
                    <p style={{ fontSize: '11px', lineHeight: '16px', fontWeight: '200' }}>
                        {dateAndDoctorInfo}
                    </p>
                </div>
            </Button>
        </ThemeProvider>
    )
} 
