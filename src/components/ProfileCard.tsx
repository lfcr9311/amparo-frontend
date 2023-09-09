import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { Switch } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface CardProps {
  name: string;
  cpf: string;
  email: string;
  dataNascimento: string;
  numSus?: string;
  profilePicture?: string;
}

class CardBase extends React.Component<
  CardProps,
  { isNotificationsTrue: boolean }
> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      isNotificationsTrue: false, // Define o estado inicial do Switch
    };
  }

  toggleNotifications = () => {
    this.setState((prevState) => ({
      isNotificationsTrue: !prevState.isNotificationsTrue,
    }));
  };

  render() {
    const cardStyles: React.CSSProperties = {
      display: "flex",
      width: "339px",
      height: "509px",
      padding: "25px 0px 5px 0px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "-25px",
      flexShrink: 0,
      position: "relative",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    };

    const contentStyles: React.CSSProperties = {
      bottom: "332px",
      top: "25px",
      display: "flex",
      padding: "10px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    };

    const editButtonStyles: React.CSSProperties = {
      position: "absolute",
      width: "32px",
      height: "32px",
      top: "20px",
      right: "28.5px",
    };

    const switchContainerStyles: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      flexDirection: "row", // Alinhar os elementos verticalmente
    };

    const boxStyles: React.CSSProperties = {
      width: "250px",
      height: "23px",
      display: "flex",
      alignItems: "start",
      flexDirection: "column",
    };

    const infoBoxStyles: React.CSSProperties = {
      width: "308px",
      display: "flex",
      alignItems: "start",
      flexDirection: "column",
    };

    const infoContainerStyles: React.CSSProperties = {
      display: "flex",
      alignItems: "start",
    };


    const nameTypographyStyles: React.CSSProperties = {
      color: "var(--Cor-de-Tipografia-4, #343131)",
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "25px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    };

    const notificationTypographyStyles: React.CSSProperties = {
      color: "var(--Cor-de-Tipografia-4, #343131)",
      fontFamily: "Poppins",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    };

    const buttonStyles: React.CSSProperties = {
      fontSize: "13px",
      fontFamily: "Poppins",
      cursor: "pointer",
      color: "#656363",
      bottom: "20px",
      border: "none",
      background: "none",
      outline: "none",
    };

    const cardContentTextStyles: React.CSSProperties = {
      color: 'var(--Cor-de-Tipografia-4, #343131)',
      fontFamily: 'Poppins',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    };

    const myDoctorButtonStyles: React.CSSProperties = {
      display: "flex",
      width: "212px",
      height: "57px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      fontSize: "13px",
      fontFamily: "Poppins",
      cursor: "pointer",
      color: "#FFFFFF",
      bottom: "20px",
      border: "none",
      backgroundColor: "#E76553",
      outline: "none",
    };

    return (
      <div>
        <Card style={cardStyles}>
        <div style={contentStyles}>
            <Avatar
              alt="Avatar"
              src="url-da-sua-imagem"
              sx={{ width: 95, height: 95 }}
            >
              <IconButton>
                <AccountCircleIcon
                  color="error"
                  sx={{ width: 120, height: 120 }}
                />
              </IconButton>
            </Avatar>
            <Typography component="div" style={nameTypographyStyles}>
              {this.props.name}
            </Typography>
          </div>
          <div style={infoBoxStyles}>
            <div style={infoContainerStyles}>
              <Typography sx={cardContentTextStyles}>CPF:&nbsp;</Typography>
              <Typography sx={cardContentTextStyles}>{this.props.cpf}</Typography>
            </div>
            <div style={infoContainerStyles}>
              <Typography sx={cardContentTextStyles}>E-mail:&nbsp;</Typography>
              <Typography sx={cardContentTextStyles}>{this.props.email}</Typography>
            </div>
            <div style={infoContainerStyles}>
              <Typography sx={cardContentTextStyles}>Data de Nascimento:&nbsp; </Typography>
              <Typography sx={cardContentTextStyles}> {this.props.dataNascimento}</Typography>
            </div>
            <div style={switchContainerStyles}>
              <Typography sx={cardContentTextStyles}>Nº SUS:&nbsp;</Typography>
              <Typography sx={cardContentTextStyles}>{this.props.numSus}</Typography>
            </div>
          </div>
          <div style={switchContainerStyles}>
            <div style={boxStyles}>
              <Typography variant="body1" style={notificationTypographyStyles}>
                Habilitar Notificações:
              </Typography>
            </div>
            <Switch
              checked={this.state.isNotificationsTrue}
              onChange={this.toggleNotifications}
              color="default"
            />
          </div>
          <IconButton style={editButtonStyles} color="error" aria-label="Editar">
            <EditIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
          
          //Todo: Alterar para componente
          <button style={myDoctorButtonStyles}>Seu Texto do Botão</button>
          <button style={buttonStyles}>Alterar Senha</button>
        </Card>
      </div> 
    );
  }
}

export default CardBase;
