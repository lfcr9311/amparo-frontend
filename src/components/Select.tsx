import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectProps {
  label: string;
  value: string;
  onChange: () => any;
}

const SelectComponent: React.FC<SelectProps> = ({ label, value, onChange }) => {

  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  return (
    <Box
      sx={{"& .MuiInputBase-root": {
        borderRadius: "8px",
        borderColor: "#E76553"
      }
      }}>
      <FormControl
      sx={{
        height: "37px",
        width: "88px",
        "& .MuiInputBase-root": {
          borderRadius: "8px",
          borderColor: "#E76553"
        }

      }}>
        <InputLabel id="select-label">UF</InputLabel>
        <Select
          labelId="select-label"
          value={value}
          label={label}
          onChange={onChange}
        >
          {estados.map((estado) => (
            <MenuItem key={estado} value={estado}>
              {estado}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectComponent;
