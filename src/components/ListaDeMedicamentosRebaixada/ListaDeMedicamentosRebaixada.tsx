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

interface ListaInteracoesProps {
  name: string;
  items: Items[];
}

interface Items {
  id: number;
  name: string;
  status: number;
}

const classificandoIcones: Record<string, React.ReactNode> = {
  1: <img src={IconeMedicamentoBom} alt="Bom" style={{ height: '26px' }} />,
  2: <img src={IconeMedicamentoMedio} alt="Médio" style={{ height: '26px' }} />,
  3: (
    <img
      src={IconeMedicamentoRuim}
      alt="Ruim"
      style={{ marginRight: '-3.5px', height: '33px' }}
    />
  ),
};

export const ListaInteracoesRebaixada: React.FC<ListaInteracoesProps> = ({
  items,
  name,
}) => {
  const tiposDeClassificacao = [1, 2, 3];

  const listaDeMedicamentosRecebida = items
    .slice()
    .sort((a, b) => {
      const orderA = tiposDeClassificacao.indexOf(a.status);
      const orderB = tiposDeClassificacao.indexOf(b.status);
      if (orderA !== orderB) {
        return orderB - orderA;
      }
      return a.name.localeCompare(b.name);
    })
    .slice(0, 5);

  const navigate = useNavigate();

  const handleLinkClick = (items: Items[], nome: string) => {
    navigate(ROUTES.LISTA_INTERACAO_MEDICAMENTO(), {
      state: { items: items, nome: nome },
    });
  };
  return (
    <div>
      <List
        sx={{
          width: 260,
          bgcolor: '#DCDCDC',
          position: 'relative',
          overflow: 'auto',
          height: 272,
          
          fontFamily: 'Poppins',
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {listaDeMedicamentosRecebida.map((medicamento, index) => (
          <div key={`item-${index}`}>
            <Divider />
            <ListItem>
              <ListItemText
                primary={medicamento.name.substring(0, 15) + '...'}
                sx={{
                  color: medicamento.status === 3 ? 'red' : 'inherit',
                }}
              />
              {classificandoIcones[medicamento.status]}
            </ListItem>
          </div>
        ))}
        <div style={{ textAlign: 'center' }}>
          <a
            href="/medicamentos/interacao"
            style={{ textDecoration: 'none' }}
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
