import { TextField } from "@mui/material";
import { useState } from "react";

interface TextfieldModalProps {
  label: string;
  value: string;
  type: string;
  onChange: (value: any) => void;
  error?: boolean;
  width?: string;
  helperText?: string;
  classname?: string;
}

const TextfieldModal: React.FC<TextfieldModalProps> = ({
  label,
  value,
  onChange,
  type,
  error,
  helperText,
  classname,
  width = 270,
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleValue = (value: string) => {
    onChange(value);
    setInternalValue(value);
  };

  return (
    <TextField
      className={classname}
      label={label}
      value={internalValue}
      type={type}
      error={error}
      helperText={helperText}
      onChange={(event) => handleValue(event.target.value)}
      size="small"
      variant="filled"
      sx={{
        width: { width },
        "& .MuiInputBase-input": {
          color: "#696969",
          fontFamily: "Poppins, sans-serif",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
        },
        "& .MuiFormLabel-root": {
          color: "#696969",
          fontFamily: "Poppins, sans-serif",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
        },
        "& .MuiInputBase-root": {
          borderRadius: "3px",
          color: "#696969",
          fontFamily: "Poppins, sans-serif",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          borderBottomColor: "#696969",
        },
        "& label.Mui-focused": {
          color: "#696969",
          fontFamily: "Poppins, sans-serif",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
        },
        "& .MuiFilledInput-underline": {
          "&:before": {
            borderBottom: "none !important",
          },
          "&:after": {
            borderBottom: "none !important",
          },
        },
      }}
    />
  );
};

export default TextfieldModal;
