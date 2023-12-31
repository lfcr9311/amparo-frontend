import './ProfileDoctorCard.css';
import EditIcon from '../../assets/EditIcon.svg';
import IconProfile from '../../assets/IconProfile.svg';
import EmailIcon from '../../assets/EmailIcon.svg';
import PhoneIcon from '../../assets/PhoneIcon.svg';
import {Switch} from '@mui/material';
import {useState} from 'react';

interface ProfileDoctorCardProps {
  name: string;
  crm?: string;
  profilePicture?: string;
  email?: string;
  phone?: string;
  edit: () => void;
  alterarSenha: () => void;
  uf?: string;
}

export default function ProfileDoctorCard({
                                            name, uf, crm, email, phone, edit, alterarSenha, profilePicture,
                                          }: ProfileDoctorCardProps) {
  const [notifications, setNotifications] = useState(false);

  const changeNotifications = (notifications: boolean) => {
    if (notifications) console.log('Notificações desabilitadas'); else console.log('Notificações habilitadas');
  };

  return (<div className="card-container">
    <button onClick={edit} className="edit-button">
      <img src={EditIcon}/>
    </button>
    <img
      src={profilePicture ? profilePicture : IconProfile}
      className="profile-icon"
    />
    <p className="name">{name}</p>
    <p className="specialty">Infectologista</p>
    <div className="text-box">
      <div>
        <label className="label">Convênios:</label>
        <p className="agreements">Unimed SulaAmerica</p>
      </div>

      <div>
        <label className="label">CRM / UF:</label>
        <p className="agreements">{`${crm}/${uf}`}</p>
      </div>
      <div className="notifications-container">
        <p className="notifications">Habilitar Notificacoes</p>
        <Switch
          sx={{marginLeft: '80px', marginTop: '5px'}}
          checked={notifications}
          onChange={() => {
            setNotifications(!notifications);
            changeNotifications(notifications);
          }}
        />
      </div>
    </div>
    <div className="aux-box">
        <span className="itens">
          <img
            src={EmailIcon}
            className="aux-box-icon email-icon"
            alt="Email"
          />
          {email}
        </span>
      <span className="itens">
          <img
            src={PhoneIcon}
            className="aux-box-icon phone-icon"
            alt="Phone"
          />
        {phone}
        </span>
    </div>
    <button className="alterar-senha-button" onClick={alterarSenha}>
      Alterar senha
    </button>
  </div>);
}
