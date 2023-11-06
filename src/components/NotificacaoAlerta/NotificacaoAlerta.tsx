import { IconButton, ListItem, ListItemText } from "@mui/material";
import "./NotificacaoAlerta.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface NotificacaoAlertaProps {
    nameDoctor: String;
    onClick: () => void;
}

export default function NotificacaoAlerta({ nameDoctor, onClick }: NotificacaoAlertaProps) {
    const message = `Dr ${nameDoctor} mandou uma mensagem!`

    return (
        <div className="frame" onClick={onClick}>
            <ListItem
                key={'key'}
                className="notifications-container"
                disableGutters
                secondaryAction={
                    <IconButton>
                        <ArrowForwardIosIcon sx={{ color: '#FBF8F8' }} />
                    </IconButton>
                }
            >
                <ListItemText
                    primary={message}
                    sx={{
                        '& .MuiTypography-root': {
                            fontFamily: 'Poppins',
                            color: '#FBF8F8',
                            textAlign: 'center',
                            width: '164px',
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: 'normal',
                            marginRight: '23px',
                        },
                    }}
                />
            </ListItem>
        </div>
    )
}