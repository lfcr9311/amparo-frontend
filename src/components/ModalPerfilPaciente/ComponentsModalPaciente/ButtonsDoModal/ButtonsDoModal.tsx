import MedicationIcon from '../../../../assets/MedicationIcon.svg';
import ExameIcon from '../../../../assets/ExameIcon.svg';

interface BotoesProps {
  onclickExames: () => void;
  onclickMedicamentos: () => void;
}

const buttonStyle = {
  width: '129px',
  height: '68px',
  borderRadius: '5px',
  backgroundColor: '#E76553',
  border: 'none',
};

const containerStyle = {
  alignItems: 'center',
};

const iconStyle = {
  width: '38px',
  height: '42px',
  marginTop: '8px',

};
const labelStyle = {
  fontFamily: 'Poppins',
  fontSize: '17px',
  fontStyle: 'italic',
  fontWeight: 500,
  lineHeight: '26px',
  marginTop: '20px',
  marginLeft: '-5px',

};

export function Botoes({ onclickExames, onclickMedicamentos }: BotoesProps) {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <button style={buttonStyle} onClick={onclickExames}>
        <div style={containerStyle}>
          <img src={ExameIcon} alt="ExamesIcon" style={iconStyle} />
        </div>
        <p style={labelStyle}>Exames</p>
      </button>
      <button style={buttonStyle} onClick={onclickMedicamentos}>
        <div style={containerStyle}>
          <img src={MedicationIcon} alt="MedicamentosIcon" style={iconStyle} />
        </div>
        <p style={labelStyle}>Medicamentos</p>

      </button>
    </div>

  );
}
