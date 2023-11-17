import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomButton from '../Button/Button';


export interface MedicamentoAgendaType {
    id: string;
    nome: string;
    frequency: string;
    quantity: string;
    medicineId: number;
    usoContinuo: boolean;
    dataFinal: string;
    ultimaDataConsumida: string;
}

interface MedicamentoAgendaProps {
    title: React.ReactNode;
    content: MedicamentoAgendaType;
    onInfoClick: () => void;
    onAdministrate: (dosagem: MedicamentoAgendaType) => Promise<boolean>;
}

const MedicamentoAgenda: React.FC<MedicamentoAgendaProps> = ({
    title, content, onAdministrate
}) => {

    const [updating, setUpdating] = useState<boolean>(false)


    const formatDate = (date: string) => {
        return date ? new Date(date).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }) : undefined
    }

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
                    padding: '16px 19px 8px',
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
                        Última Administração:
                    </Typography>
                    <Typography sx={{
                        color: '#3D3D3D',
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: updating ? '500' : '700',
                        lineHeight: 'normal',
                    }}>
                        {content.ultimaDataConsumida || 'Nenhuma'}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
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
                            fontWeight: '700',
                            lineHeight: 'normal',
                        }}>
                            Informações do Medicamento:
                        </Typography>
                        <Typography sx={{
                            color: '#4D4C4C',
                            fontFamily: 'Poppins',
                            fontSize: '13px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                        }}>
                            Nome: <b>{content.nome}</b>
                        </Typography>
                        <Typography sx={{
                            color: '#4D4C4C',
                            fontFamily: 'Poppins',
                            fontSize: '13px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                        }}>
                            Frequencia: <b>{content.frequency}</b>
                        </Typography>
                        <Typography sx={{
                            color: '#4D4C4C',
                            fontFamily: 'Poppins',
                            fontSize: '13px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                        }}>
                            Dosagem: <b>{content.quantity}</b>
                        </Typography>
                        {
                            content.usoContinuo ?
                                <Typography sx={{
                                    color: '#4D4C4C',
                                    fontFamily: 'Poppins',
                                    fontSize: '13px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal',
                                }}>
                                    Uso continuo: <b>Sim</b>
                                </Typography>
                                :
                                <>
                                    <Typography sx={{
                                        color: '#4D4C4C',
                                        fontFamily: 'Poppins',
                                        fontSize: '13px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal',
                                    }}>
                                        Uso continuo: <b>Nao</b>
                                    </Typography>
                                    <Typography sx={{
                                        color: '#4D4C4C',
                                        fontFamily: 'Poppins',
                                        fontSize: '13px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal',
                                    }}>
                                        Data Final: <b>{formatDate(content.dataFinal)}</b>
                                    </Typography> </>
                        }
                    </Box>
                </Box>
                <CustomButton
                    label="Adiministrar"
                    variant="contained"
                    onClick={() => {
                        setUpdating(true)
                        onAdministrate(content).then(() => setUpdating(false))
                    }}
                />
            </AccordionDetails>
        </Accordion>
    );
};

export default MedicamentoAgenda;
