import './SelectMedicamento.css';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface SelectMedicamentoProps {
  onChange: (nomeDoRemedio: string) => void;
  value: string;
  medicationList?: string[];
  showError: boolean;
  errorMessage: string;
}

export default function SelectMedicamento({
  onChange,
  value,
  medicationList,
  showError,
  errorMessage
}: SelectMedicamentoProps) {
  const exemploList = ['Remédio 1', 'Remédio 2', 'Remédio 3']

  const list = medicationList ?? exemploList

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nomeDoRemedio = e.target.value;
    onChange(nomeDoRemedio);
  };

  return (
    <div className="select-container">
      <select
        className={`caixa-de-selecao ${showError ? 'error' : ''}`}
        onChange={handleChange}
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
      {showError && <div className="error-message">{errorMessage}</div>}
      <ArrowForwardIosRoundedIcon className="arrow-icon" />
    </div>
  );
}
