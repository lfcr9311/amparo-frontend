import { TextField } from "@mui/material";
import { useState } from "react";

interface TextfieldProps {
  label: string;
  value: string;
  type: string;
  onChange: (value: any) => void;
  error?: boolean;
  width?: string;
  helperText?: string;
  classname?: string;
}

const Textfield: React.FC<TextfieldProps> = ({ label, value, onChange, type, error, helperText, classname, width = 330 }) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleValue = (value: string) => {
    onChange(value);
    setInternalValue(value);
  }

  return (
    <TextField
      className={classname}
      label={label}
      value={internalValue}
      type={type}
      error={error}
      helperText={helperText}
      InputLabelProps={type === "date" ? { shrink: true } : {} }
      onChange={(event) => handleValue(event.target.value)}
      size="small"
      sx={{
        width: {width},
        "& .MuiInputBase-input": {
          color: "#341331",
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'light',
        },
        "& .MuiFormLabel-root": {
          color: "#191919", 
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'light',
        },
        "& .MuiInputBase-root": {
          borderRadius: "8px",
          color: "#191919",
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'light',
        },
        "& label.Mui-focused": {
          color: "#191919",
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'light',
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
