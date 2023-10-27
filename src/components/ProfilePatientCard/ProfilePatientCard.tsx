import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Box, Button, Switch } from '@mui/material';
import { ProfileCardStyles } from './ProfilePatientCardStyles';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  name: string;
  cpf: string;
  email: string;
  dataNascimento: string;
  numSus?: string;
  profilePicture?: string;
  onClickDoctors?: () => void;
  onClickChangePassword?: () => void;
  onClickEditProfile?: () => void;
}

// @ts-ignore
export function PatientProfileCard({
  name,
  cpf,
  email,
  dataNascimento,
  numSus,
  profilePicture,
  onClickChangePassword,
  onClickDoctors,
  onClickEditProfile,
}: CardProps) {
  const [notifications, setNotifications] = useState(false);

  const navigate = useNavigate();
  const changeNotifications = (notifications: boolean) => {
    if (notifications) console.log('Notificações desabilitadas');
    else console.log('Notificações habilitadas');
  };

  return (
    <Box>
      <Card sx={ProfileCardStyles.cardStyle}>
        <Box sx={ProfileCardStyles.contentStyle}>
          <Avatar
            alt="Avatar"
            src="url-da-sua-imagem"
            sx={ProfileCardStyles.avatarStyle}
          >
            <IconButton>
              <AccountCircleIcon sx={ProfileCardStyles.avatarIconStyle} />
            </IconButton>
          </Avatar>
          <Typography
            component="div"
            sx={ProfileCardStyles.nameTypographyStyle}
          >
            {name}
          </Typography>
        </Box>
        <Box sx={ProfileCardStyles.infoBoxStyle}>
          <Box sx={ProfileCardStyles.infoContainerStyle}>
            <Typography sx={ProfileCardStyles.cardContentTextStyle}>
              CPF:&nbsp;
            </Typography>
            <Typography sx={ProfileCardStyles.cardValueTextStyle}>
              {cpf}
            </Typography>
          </Box>
          <Box sx={ProfileCardStyles.infoContainerStyle}>
            <Typography sx={ProfileCardStyles.cardContentTextStyle}>
              E-mail:&nbsp;
            </Typography>
            <Typography sx={ProfileCardStyles.cardValueTextStyle}>
              {email}
            </Typography>
          </Box>
          <Box sx={ProfileCardStyles.infoContainerStyle}>
            <Typography sx={ProfileCardStyles.cardContentTextStyle}>
              Data de Nascimento:&nbsp;{' '}
            </Typography>
            <Typography sx={ProfileCardStyles.cardValueTextStyle}>
              {' '}
              {dataNascimento}
            </Typography>
          </Box>
          <Box sx={ProfileCardStyles.switchContainerStyle}>
            <Typography sx={ProfileCardStyles.cardContentTextStyle}>
              Nº SUS:&nbsp;
            </Typography>
            <Typography sx={ProfileCardStyles.cardValueTextStyle}>
              {numSus}
            </Typography>
          </Box>
        </Box>
        <Box sx={ProfileCardStyles.switchContainerStyle}>
          <Box sx={ProfileCardStyles.boxStyle}>
            <Typography
              variant="body1"
              sx={ProfileCardStyles.notificationTypographyStyle}
            >
              Habilitar Notificações:
            </Typography>
          </Box>
          <Switch
            checked={notifications}
            onChange={() => {
              setNotifications(!notifications);
              changeNotifications(notifications);
            }}
            color={notifications ? 'primary' : 'default'}
          />
        </Box>
        <IconButton
          sx={ProfileCardStyles.editButtonStyle}
          color="error"
          aria-label="Editar"
          onClick={onClickEditProfile}
        >
          <EditIcon sx={ProfileCardStyles.editIconStyle} />
        </IconButton>
        <Button
          sx={ProfileCardStyles.myDoctorButtonStyle}
          onClick={() => navigate('/perfil/paciente/meus-medicos')}
        >
          Meus Médicos
        </Button>
        <Button
          sx={ProfileCardStyles.buttonStyle}
          onClick={onClickChangePassword}
        >
          Alterar Senha
        </Button>
      </Card>
    </Box>
  );
}
