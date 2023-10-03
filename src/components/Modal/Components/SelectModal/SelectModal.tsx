import './SelectModal.css';

interface StateSelectProps {
  onChange: (selectedState: string) => void;
}

const SelectModal: React.FC<StateSelectProps> = ({ onChange }) => {
  const states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    onChange(selectedState);
  };

  return (
    <div className="box-container">
      <select className="select-component" onChange={handleChange}>
        <option className="option" value="" disabled selected>
          UF
        </option>
        {states.map((state) => (
          <option className="option" key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectModal;
