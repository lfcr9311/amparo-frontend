import './CardMedico.css';
import RightArrow from '../../assets/CardRemedioIcon.svg';
import Modal from '../Modal/Modal';

interface CardMedicoProps {
  id?: string;
  name?: string;
  profilePicture?: string;
  onClick?: () => void;
}

export default function CardMedico({
  id,
  name = 'Nome do Médico',
  profilePicture = '',
  onClick,
}: CardMedicoProps) {
  return (
    <>
      <button className="cardStyle" onClick={onClick}>
        <img src={profilePicture || ''} className="avatarStyle" />
        <span className="cardValueTextStyle">Dr. {name}</span>

        <img src={RightArrow} alt="Right Arrow" className="rightArrowStyle" />
      </button>
    </>
  );
}
