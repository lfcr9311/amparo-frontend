import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

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
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)', // Adiciona sombra para suavizar
                '&:not(:last-child)': { borderBottom: 0 },
                '&:before': { display: 'none' },
                mb: 2,
                borderRadius: '10px', // Bordas mais arredondadas
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
                    borderRadius: '10px', // Assegura que o borderRadius seja consistente
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
                <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary', mb: 1 }}>
                    Horário do Medicamento: {content}
                </Typography>
                <IconButton onClick={onInfoClick} aria-label="informações do medicamento">
                    <InfoIcon />
                </IconButton>
                <IconButton onClick={onDeleteClick} aria-label="deletar medicamento">
                    <DeleteIcon />
                </IconButton>
            </AccordionDetails>
        </Accordion>
    );
};

export default MedicamentoAgenda;
