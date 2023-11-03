import './CardUsuario.css';
import RightArrow from '../../assets/CardRemedioIcon.svg';

import DefaultProfilePicture from '../../assets/DefaultProfilePicture.svg';

interface CardMedicoProps {
  id?: string;
  name?: string;
  profilePicture?: string;
  onClick?: () => void;
}

export default function CardUsuario({
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
        <span className="cardValueTextStyle">Dr. {name}</span>

        <img src={RightArrow} alt="Right Arrow" className="rightArrowStyle" />
      </button>
    </>
  );
}
