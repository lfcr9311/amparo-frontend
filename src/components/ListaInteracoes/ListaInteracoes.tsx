import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import IconeMedicamentoBom from '../../assets/IconeMedicamentoBom.svg';
import IconeMedicamentoMedio from '../../assets/IconeMedicamentoMedio.svg';
import IconeMedicamentoRuim from '../../assets/IconeMedicamentoRuim.svg';

interface CustomListaInteracoesProps {
  items: { name: string; status: number }[];
}

const classificandoIcones: Record<string, React.ReactNode> = {
  1: <img src={IconeMedicamentoBom} alt="Bom"  style={ { height: '26px'}}/>,
  2: <img src={IconeMedicamentoMedio} alt="Médio" style={ { height: '26px'}}/>,
  3: <img src={IconeMedicamentoRuim} alt="Ruim" style={{ marginRight: '-3.5px', height: '33px' }} />,
};

export const ListaInteracoes: React.FC<CustomListaInteracoesProps> = ({ items }) => {
  const tiposDeClassificacao = [1,2,3];

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

  return (
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
          <ListItem  >
            <ListItemText primary={medicamento.name}
              sx={{
                color: medicamento.status === 3 ? 'red' : 'inherit',
              }}
            />
            {classificandoIcones[medicamento.status]}
          </ListItem>
          <Divider />
        </div>
      )
      )}
    </List>
  );
};

