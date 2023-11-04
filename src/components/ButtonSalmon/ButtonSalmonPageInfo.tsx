import React from 'react';
import { ButtonSalmon } from './ButtonSalmon';
import { Button, Box } from '@mui/material';
import { ArrowForwardIos, CheckCircleOutline } from '@mui/icons-material';



export const ButtonSalmonPageInfo: React.FC = () => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#E76553",
        display: 'flex',
        margin: '8px',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '19px',
        borderRadius: "10px",
        height: "124px",
        width: "307px",
        gap: '10px'
    };
    return (
        <Button
            sx={{
                '& > :not(style)': {
                    m: 1,
                    marginTop: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'start'
                    
                },
                

            }}
            style={buttonStyle}
            onClick={() => { }}
            variant='contained'
            endIcon={<Box><ArrowForwardIos sx={{ fontSize: 30 }} /> </Box>}
        >
            <div>
                <p style={{ fontSize: '19px', lineHeight: '18px', fontWeight: '400' }}>
                    Como se previnir de doenças respiratórias
                </p>
                <p style={{ fontSize: '11px', lineHeight: '12px', fontWeight: '100' }}>
                    Há 5 dias | Dr. Marcelo Igansi (CRM/UF 010203)
                </p>
            </div>
        </Button>
    )
} 
