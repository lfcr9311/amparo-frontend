import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconeMedicamentoBom from '../../assets/IconeMedicamentoBom.svg';
import IconeMedicamentoMedio from '../../assets/IconeMedicamentoMedio.svg';
import IconeMedicamentoRuim from '../../assets/IconeMedicamentoRuim.svg';

interface CustomFiltroBuscaMedicamentosProps {
  onStatusChange: (status: number) => void;
  onNameChange: (name: string) => void; 
  status : number;
}

const FiltroBuscaMedicamentos: React.FC<CustomFiltroBuscaMedicamentosProps> = ({ onStatusChange,onNameChange ,status}) => {

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value ;
    console.log(name);
    onNameChange(name);

  };
 
  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedStatus = event.target.value as number;
    console.log(selectedStatus);
    onStatusChange(selectedStatus);
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

      <FormControl sx={{ width: 'auto', height: '100%' }}>
        <Select
          value={status}
          onChange={(event) => handleStatusChange(event as React.ChangeEvent<{ value: unknown }>)}
          displayEmpty
          sx={{
            minWidth: '70px',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '80px',
            marginRight: '3px',
            '& .MuiSelect-icon': {
              right: 'auto',
              left: '3px',
              fontSize: '30px',
            },
          }}
        >
          <MenuItem value="semFiltroDeStatus">  </MenuItem>
          <MenuItem value="bom">
            <img src={IconeMedicamentoBom} alt="bom" style={{ marginRight: '-20px', marginLeft: '20px' }} />
          </MenuItem>
          <MenuItem value="medio">
            <img src={IconeMedicamentoMedio} alt="medio" style={{ marginRight: '-20px', marginLeft: '20px' }} />
          </MenuItem>
          <MenuItem value="ruim" >
            <img src={IconeMedicamentoRuim} alt="ruim" style={{ marginRight: '-20px', marginLeft: '11px' }} />
          </MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default FiltroBuscaMedicamentos;
