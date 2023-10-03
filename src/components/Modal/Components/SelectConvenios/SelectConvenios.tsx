import './SelectConvenios.css';

interface StateSelectProps {
  onChange: (selectedState: string) => void;
}

const SelectConvenios: React.FC<StateSelectProps> = ({ onChange }) => {
  const convenios = [
    'Unimed',
    'Amil',
    'Bradesco Saúde',
    'SulAmérica Saúde',
    'Golden Cross',
    'Hapvida',
    'NotreDame Intermédica',
    'Porto Seguro Saúde',
    'Prevent Senior',
    'Santa Casa Saúde',
    'Allianz Saúde',
    'São Francisco Saúde',
    'Camed',
    'Greenline',
    'Samcil',
    'Cassi',
    'Saúde Caixa',
    'Cemig Saúde',
    'Postal Saúde',
    'Care Plus',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    onChange(selectedState);
  };

  return (
    <div className="box-container-convenios">
      <select className="select-component-convenios" onChange={handleChange}>
        <option className="option" value="" disabled selected>
          Convênios
        </option>
        {convenios.map((convenios) => (
          <option
            className="option-convenios"
            key={convenios}
            value={convenios}
          >
            {convenios}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectConvenios;
