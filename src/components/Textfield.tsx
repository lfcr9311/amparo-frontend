import { TextField } from "@mui/material";
import { useState } from "react";

interface TextfieldProps {
  label: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
}

const Textfield: React.FC<TextfieldProps> = ({ label, value, onChange, type }) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleValue = (value: string) => {
    onChange(value);
    setInternalValue(value);
  }
  
  return (
    <TextField
      label={label}
      value={internalValue}
      type={type}
      focused
      onChange={(event) => handleValue(event.target.value)}
      sx={{
        "& .MuiInputBase-input": {
          color: "#191919",
          fontFamily: 'Poppins, sans-serif',
        },
        "& .MuiFormLabel-root": {
          color: "red", // Troque para a cor desejada para a label
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
        },
      }}
    />
  );
};

export default Textfield;
