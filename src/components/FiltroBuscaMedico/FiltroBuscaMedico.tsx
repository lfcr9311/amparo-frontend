import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

interface CustomFiltroBuscaMedicoProps {
  onNameChange: (name: string) => void; 
}

const FiltroBuscaMedico: React.FC<CustomFiltroBuscaMedicoProps> = ({ onNameChange }) => {

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value ;
    console.log(name);
    onNameChange(name);

  };
 
 
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 293,
        height: 48,
        borderRadius: 80,
        backgroundColor: '#DCDCDC',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="   Buscar..."
        onChange={handleSearchTextChange}
        inputProps={{ 'aria-label': 'Buscar...' }}
      />

    </Paper>
  );
};

export default FiltroBuscaMedico;
