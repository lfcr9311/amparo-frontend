import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import "./CardMedicine.css"
import { IconButton, ListItem, ListItemText } from "@mui/material";

interface CardMedicineProps {
    exam: string;
    onChange: () => void;
}

export default function CardMedicine({ exam, onChange }: CardMedicineProps) {
    return (
        <div className="medicine-frame" onClick={onChange}>
          <ListItem
            key={'key'}
            className="card-medicine-item"
            disableGutters
            secondaryAction={
              <IconButton >
                <ArrowForwardIos sx={{ width: "20px", height: "17px"}}/>
              </IconButton>
            }
          >
            <ListItemText
              primary={exam}
              sx={{
                '& .MuiTypography-root': {
                  width: '193px',
                  fontFamily: 'Poppins',
                  color: '#000',
                  fontSize: '13px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                  overflow: 'hidden',
                },
              }}
            />
          </ListItem>
        </div>
      );
}