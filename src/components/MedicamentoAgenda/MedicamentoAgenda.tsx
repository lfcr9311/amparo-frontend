import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete'; // Supondo que este seja o ícone da lixeira

interface MedicamentoAgendaProps {
    title: React.ReactNode;
    content: React.ReactNode;
    onInfoClick: () => void;
    onDeleteClick: () => void;
}

const MedicamentoAgenda: React.FC<MedicamentoAgendaProps> = ({
    title, content, onInfoClick, onDeleteClick
}) => {
    return (
        <Accordion
            sx={{
                width: 314,
                backgroundColor: '#FFEBEB',
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
                '&:not(:last-child)': { borderBottom: 0 },
                '&:before': { display: 'none' },
                mb: 2,
                borderRadius: '10px',
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    height: 87,
                    padding: '8px 19px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '10px',
                    backgroundColor: '#FFEBEB',
                    '&.Mui-expanded': {
                        minHeight: '87px',
                        backgroundColor: '#FFEBEB',
                    },
                    '& .MuiAccordionSummary-content.Mui-expanded': {
                        margin: '12px 0',
                    },
                }}
            >
                <Typography sx={{
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: '19px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    marginRight: 'auto',
                }}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    flexDirection: 'column',
                    padding: '0 19px 8px',
                    backgroundColor: '#cecccc',
                    '&:not(:last-child)': { borderBottom: '1px solid rgba(0, 0, 0, .125)' },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <Typography sx={{
                        color: '#3D3D3D',
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal',
                    }}>
                        Horário de Administração:
                    </Typography>
                    <Typography sx={{
                        color: '#3D3D3D',
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: 'normal',
                    }}>
                        {content}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '43px',
                        padding: '0px 5px',
                        borderRadius: '5px',
                        background: 'var(--Cor-de-Fundo, #FBF8F8)',
                        marginRight: '30px',
                        marginLeft: '-5px'
                    }}>
                        <Typography sx={{
                            color: '#4D4C4C',
                            fontFamily: 'Poppins',
                            fontSize: '13px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                        }}>
                            Informações do Medicamento
                        </Typography>
                    </Box>
                    <IconButton onClick={onDeleteClick} aria-label="deletar medicamento" sx={{ padding: 0, marginLeft: '8px' }}>
                        <svg
                            width="21"
                            height="25"
                            viewBox="0 0 21 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="lixeira-icon"
                        >
                            <path
                                d="M1.92857 22.2222C1.92857 23.75 3.21429 25 4.78571 25H16.2143C17.7857 25 19.0714 23.75 19.0714 22.2222V8.33333C19.0714 6.80556 17.7857 5.55556 16.2143 5.55556H4.78571C3.21429 5.55556 1.92857 6.80556 1.92857 8.33333V22.2222ZM6.21429 8.33333H14.7857C15.5714 8.33333 16.2143 8.95833 16.2143 9.72222V20.8333C16.2143 21.5972 15.5714 22.2222 14.7857 22.2222H6.21429C5.42857 22.2222 4.78571 21.5972 4.78571 20.8333V9.72222C4.78571 8.95833 5.42857 8.33333 6.21429 8.33333ZM15.5 1.38889L14.4857 0.402778C14.2286 0.152778 13.8571 0 13.4857 0H7.51429C7.14286 0 6.77143 0.152778 6.51429 0.402778L5.5 1.38889H1.92857C1.14286 1.38889 0.5 2.01389 0.5 2.77778C0.5 3.54167 1.14286 4.16667 1.92857 4.16667H19.0714C19.8571 4.16667 20.5 3.54167 20.5 2.77778C20.5 2.01389 19.8571 1.38889 19.0714 1.38889H15.5Z"
                                fill="#BD1E08"
                            />
                        </svg>
                    </IconButton>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default MedicamentoAgenda;
