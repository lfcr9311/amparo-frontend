import { TextField } from "@mui/material";
import { useState } from "react";

interface TextFieldRemediosProps {
  value: string;
  onChange: (value: any) => void;
  classname?: string;
}

export default function TextFieldRemedios({ value, onChange, classname}: TextFieldRemediosProps ) {
  const [internalValue, setInternalValue] = useState(value);

  const handleValue = (value: string) => {
    onChange(value);
    setInternalValue(value);
  }

  return (
    <TextField
      className={classname}
      placeholder="Buscar..."
      value={internalValue}
      onChange={(event) => handleValue(event.target.value)}
      size="small"
      sx={{
        "& .MuiInputBase-input": {
          width: "312px",
          height: "30px",
          color: "#4D4C4C",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontStyle: "italic",
          fontWeight: "400",
          lineHeight: "normal",
          backgroundColor: "#DCDCDC",
          borderRadius: "50px",
        },
        "& .MuiFormLabel-root": {
          color: "#191919", 
          fontFamily: 'Poppins, sans-serif',
        },
        "& .MuiInputBase-root": {
          borderRadius: "50px",
          color: "#4D4C4C",
          fontFamily: 'Poppins, sans-serif',
        },
        "& label.Mui-focused": {
          color: "#4D4C4C",
          fontFamily: 'Poppins, sans-serif',
        },
        "& .MuiInput-underline:after": {
          border: "none",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
      }}
    />
  );
};
