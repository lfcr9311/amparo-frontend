import './ProfileDoctorCard.css';
import EditIcon from '../../assets/EditIcon.svg';
import IconProfile from '../../assets/IconProfile.svg';
import { Switch } from '@mui/material';

interface ProfileDoctorCardProps {
  name: string;
  specialty: string;
  agreements: string;
  crm: number;
  email: string;
  phone: string;
  edit: () => void;
}

export default function ProfileDoctorCard({
  name,
  specialty,
  agreements,
  crm,
  email,
  phone,
  edit,
}: ProfileDoctorCardProps) {
  return (
    <div className="card-container">
      <button onClick={edit} className="edit-button">
        <img src={EditIcon} alt="Edit Icon" />
      </button>
      <img src={IconProfile} className="profile-icon" alt="Profile Icon" />
      <p className="name">{name}</p>
      <p className="specialty">{specialty}</p>
      <div className="text-box">
        <div>
          <label className="label">Convênios:</label>
          <p className="agreements">{agreements}</p>
        </div>
        <div>
          <label className="label">CRM / UF:</label>
          <p className="agreements">{crm}</p>
        </div>
        <div className="notifications-container">
          <p className="notifications">Habilitar Notificacoes</p>
          <Switch sx={{ marginLeft: '80px' }} />
        </div>
      </div>
    </div>
  );
}
