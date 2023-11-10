import { TextField, MenuItem, SxProps } from '@mui/material';

interface DosagemProps {
    dosagem: string;
    unidadeMedida: string;
    onDosagemChange: (dosagem: string) => void;
    onUnidadeMedidaChange: (unidade: string) => void;
    erroDosagem?: boolean;
    mensagemErroDosagem?: string;
}

const sx: SxProps = {
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
    width: 130
};

const DosagemModal = ({
    dosagem,
    unidadeMedida,
    onDosagemChange,
    onUnidadeMedidaChange,
    erroDosagem,
    mensagemErroDosagem
}: DosagemProps) => {
    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <TextField
                label="Quantidade"
                type="number"
                value={dosagem}
                onChange={(e) => onDosagemChange(e.target.value)}
                error={erroDosagem}
                helperText={mensagemErroDosagem}
                size="small"
                variant="filled"
                sx={{
                    ...sx,
                    width: 'calc(100% - 75px)',

                }}
            />
            <TextField
                select
                label="Unidade"
                value={unidadeMedida}
                onChange={(e) => onUnidadeMedidaChange(e.target.value)}
                size="small"
                variant="filled"
                sx={{
                    ...sx,
                    width: '85px',
                }}

            >
                <MenuItem value="mg">mg</MenuItem>
                <MenuItem value="g">g</MenuItem>
            </TextField>
        </div>
    );
};

export default DosagemModal;
