import './CardRemedio.css';
import CardRemedioIcon from '../../assets/CardRemedioIcon.svg';

interface CardRemedioProps {
  label: string;
  onClick: () => void;
}

export default function CardRemedio({ label, onClick }: CardRemedioProps) {
  return (
    <button className="card-remedio" onClick={onClick}>
      <p className="label-card">{label}</p>
      <div className="icon-wrapper">
        <img className="card-remedio-icon" src={CardRemedioIcon} />
      </div>
    </button>
  );
}
