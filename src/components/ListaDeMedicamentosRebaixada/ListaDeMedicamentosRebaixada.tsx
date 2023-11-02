import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import IconeMedicamentoBom from '../../assets/IconeMedicamentoBom.svg';
import IconeMedicamentoMedio from '../../assets/IconeMedicamentoMedio.svg';
import IconeMedicamentoRuim from '../../assets/IconeMedicamentoRuim.svg';
import { ROUTES } from '../../routes/constans';

interface CustomListaInteracoesProps {
    name: string;
    items: { name: string; status: string }[];
}

const classificandoIcones: Record<string, React.ReactNode> = {
    bom: <img src={IconeMedicamentoBom} alt="Bom" />,
    medio: <img src={IconeMedicamentoMedio} alt="Médio" />,
    ruim: <img src={IconeMedicamentoRuim} alt="Ruim" style={{ marginRight: '-3.5px' }} />,
};

export const ListaInteracoes: React.FC<CustomListaInteracoesProps> = ({ items, name }) => {
    const listaDeMedicamentosRecebida = items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
    
    const navigate = useNavigate();
    
    
    
    const handleLinkClick = (items: { name: string, status: string }[], nome: string) => {
        navigate(ROUTES.LISTADEINTERACAODOMEDICAMENTO(), { state: { items: items, nome: nome } });
    };
    return (
        <div>
            <List
                sx={{
                    width: 297,
                    bgcolor: '#DCDCDC',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 355,
                    height: 'auto',
                    fontFamily: 'Poppins',
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                {listaDeMedicamentosRecebida.map((medicamento, index) => (
                    <div key={`item-${index}`}>
                        <ListItem>
                            <ListItemText
                                primary={medicamento.name}
                                sx={{
                                    color: medicamento.status === 'ruim' ? 'red' : 'inherit',
                                }}
                            />
                            {classificandoIcones[medicamento.status.toLowerCase()]}
                        </ListItem>
                        <Divider />
                    </div>
                ))}
                <div style={{ textAlign: 'center' }}>
                    <a href="/medicamentos/interacao" style={{ textDecoration: 'none' }}
                        onClick={() => handleLinkClick(items, name)}
                    >
                        <Typography
                            variant="body1"
                            component="span"
                            style={{
                                cursor: 'pointer',
                                fontFamily: 'Poppins',
                                fontSize: '14px',
                                fontStyle: 'italic',
                                fontWeight: 400,
                                lineHeight: '21px',
                                color: ' #4D4C4C',
                            }}
                        >
                            Outras Interações
                        </Typography>
                    </a>
                </div>
            </List>
        </div>
    );
};
