import { Autocomplete, TextField } from "@mui/material";
import { FC, useState } from "react";

interface MedicinameModalProps {
    label: string;
    options: string[];
    value: string | null;
    onChange: (value: string | null) => void;
    error?: boolean;
    width?: string;
    helperText?: string;
    classname?: string;
}

const MedicinenameModal: FC<MedicinameModalProps> = ({
    label,
    options,
    value,
    onChange,
    error = false,
    helperText,
    classname,
    width = 300,
}) => {
    const [internalValue, setInternalValue] = useState(value);

    return (
        <Autocomplete
            freeSolo
            value={internalValue}
            options={options}
            onInputChange={(_event, newValue) => {
                setInternalValue(newValue);
                onChange(newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    className={classname}
                    label={label}
                    error={error}
                    helperText={helperText}
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
            )}
        />
    );
};

export default MedicinenameModal;
