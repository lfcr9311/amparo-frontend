import React from 'react';
import './SelectFrequencia.css';

interface StateSelectProps {
  onChange: (selectedState: string) => void;
  value: string;
}

const SelectFrequencia: React.FC<StateSelectProps> = ({ onChange, value }) => {
  const frequencias = ['Diariamente'];
  for (let i = 2; i <= 30; i++) {
    frequencias.push(` ${i} dias`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    onChange(selectedState);
  };

  return (
    <div className="box-container-frequencia">
      <select
        className="select-component-frequencia"
        onChange={handleChange}
        value={value} 
      >
        <option className="option" value="" disabled>
          Frequência 
        </option>
        {frequencias.map((frequencia) => (
          <option
            className="option-frequencia"
            key={frequencia}
            value={frequencia}
          >
            {frequencia}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFrequencia;
