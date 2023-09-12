import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Item {
  label: string;
  value: string | number;
}
interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: Item[]
  isRequired?: boolean;
}

export const SelectComponent:React.FC<SelectProps> = ({value, onChange, items, label, isRequired}) => {  
  const handleValue = (event: SelectChangeEvent) => {
    onChange(event.target.value)
  }

  return (
    <Box
      sx={{
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
      <FormControl size="small" sx={{width: "90px"}}>
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
          required={isRequired}
          onChange={handleValue}
        >
          {items.map((label, value) => (
            <MenuItem sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
            key={value} value={label.value}>
              {label.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectComponent;