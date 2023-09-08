import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

export default function SelectComponent({ label, value, onChange }: SelectProps) {
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
      sx={{
        width: "88px",
        height: "37px",
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        color: "#191919",
        "& .MuiInputBase-input": {
          color: "#191919",
          fontFamily: 'Poppins, sans-serif',
        },
        "& .MuiFormLabel-root": {
          color: "#191919",
          fontFamily: 'Poppins, sans-serif',
        },
        "& .MuiInputBase-root": {
          borderRadius: "8px",
          color: "#191919",
          fontFamily: 'Poppins, sans-serif',
        },
        "& label.Mui-focused": {
          color: "#191919",
          fontFamily: 'Poppins, sans-serif',
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#E76553",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#E76553",
          },
          "&:hover fieldset": {
            borderColor: "#E76553",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#E76553",
          },
          borderRadius: "8px",
          borderColor: "#E76553",
        }
      }}>
      <FormControl fullWidth>
        <InputLabel id="select-label"
        
        sx={{
          color: "#191919",
          fontFamily: 'Poppins, sans-serif',
        }}>UF</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          label={label}
          value={value}
          onChange={onChange}
        >
          {estados.map((estado) => (
            <MenuItem sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
            key={estado} value={estado}>
              {estado}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}