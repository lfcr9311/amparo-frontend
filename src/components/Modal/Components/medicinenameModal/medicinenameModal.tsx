import { Autocomplete, TextField } from "@mui/material";
import { FC, useState } from "react";

interface medicinenameModalProps {
    label: string;
    options: string[];
    value: string | null;
    onChange: (value: string | null) => void;
    error?: boolean;
    width?: string;
    helperText?: string;
    classname?: string;
}

const medicinenameModal: FC<medicinenameModalProps> = ({
    label,
    options,
    value,
    onChange,
    error = false,
    helperText,
    classname,
    width = 270,
}) => {
    const [internalValue, setInternalValue] = useState(value);

    const handleValue = (value: string | null) => {
        onChange(value);
        setInternalValue(value);
    };

    return (
        <Autocomplete
            value={internalValue}
            options={options}
            onChange={(_event, newValue) => handleValue(newValue)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    className={classname}
                    label={label}
                    value={internalValue}
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

export default medicinenameModal;
