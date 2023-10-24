import './CardMedico.css';
import RightArrow from '../../assets/CardRemedioIcon.svg';
import Modal from '../Modal/Modal';

import DefaultProfilePicture from '../../assets/DefaultProfilePicture.svg';

interface CardMedicoProps {
  id?: string;
  name?: string;
  profilePicture?: string;
  onClick?: () => void;
}

export default function CardMedico({
  id,
  name,
  profilePicture,
  onClick,
}: CardMedicoProps) {
  return (
    <>
      <button className="cardStyle" onClick={onClick}>
        <img
          src={profilePicture || DefaultProfilePicture}
          className="avatarStyle"
        />
        <span className="cardValueTextStyle">{name}</span>

        <img src={RightArrow} alt="Right Arrow" className="rightArrowStyle" />
      </button>
    </>
  );
}
