import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import IconeMedicamentoBom from '../../assets/IconeMedicamentoBom.svg';
import IconeMedicamentoMedio from '../../assets/IconeMedicamentoMedio.svg';
import IconeMedicamentoRuim from '../../assets/IconeMedicamentoRuim.svg';



interface CustomListaInteracoesProps {

}
const styleIcon: React.CSSProperties = {

}

const listaDeMedicamentosRecebida = [
  //aqui vou pegar e desmantelar a lista para atribuir os icones
  //falta colocar a linha+arrumar o 3 icone bugado

  {
    name: "Item 1",
    icon: <img src={IconeMedicamentoBom} />
  },

  {
    name: "Item 2",
    icon: <img src={IconeMedicamentoMedio} />
  },
  {
    name: "Item 3",
    icon: <img src={IconeMedicamentoRuim} />
  },
  

];

export const ListaInteracoes: React.FC<CustomListaInteracoesProps> = ({ }) => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 297,
        bgcolor: '#DCDCDC',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 355,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {listaDeMedicamentosRecebida.map((medicamento,index) => (

        <ListItem key={`item-${index}`} >
          <ListItemText primary={medicamento.name} />
          {medicamento.icon}
          <Divider />

        </ListItem>

      )
      )}
    </List>

  );
}



