import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


interface CustomListaMedicoProps {
  items: { name: string;}[];
}



export const ListaMedico: React.FC<CustomListaMedicoProps> = ({ items }) => {
  const listaDeMedicamentosRecebida = items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <List
      sx={{
        width: 297,
        bgcolor: '#DCDCDC',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 355,
        fontFamily: 'Poppins',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >

      {listaDeMedicamentosRecebida.map((medicamento, index) => (
        <div key={`item-${index}`}>
          <ListItem  >
            <ListItemText primary={medicamento.name}
              
            />
          </ListItem>
          <Divider />
        </div>
      )
      )}
    </List>
  );
};

