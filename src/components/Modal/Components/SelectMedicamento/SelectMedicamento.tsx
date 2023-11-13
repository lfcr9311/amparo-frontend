import { useState } from 'react';
import './SelectMedicamento.css';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface SelectMedicamentoProps {
  onChange: (nomeDoRemedio: string) => void;
  value: string;
  medicationList?: string[];
}

export default function SelectMedicamento({
  onChange,
  value,
  medicationList,
}: SelectMedicamentoProps) {
  const exemploList = ['Remédio 1', 'Remédio 2', 'Remédio 3']

  const list = medicationList ?? exemploList

  const [selectedOption, setSelectedOption] = useState(value);


  return (
    <div className="select-container">
      <select
        className="caixa-de-selecao"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        <option value="" disabled>
          Selecione o medicamento...
        </option>
        {list.map((remedios) => (
          <option key={remedios} value={remedios}>
            {remedios}
          </option>
        ))}
      </select>
      <ArrowForwardIosRoundedIcon className="arrow-icon" />
    </div>
  );
}
