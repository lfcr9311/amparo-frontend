import './SelectMedicamento.css';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface SelectMedicamentoProps {
  onChange: (nomeDoRemedio: string) => void;
  value: string;
  medicationList?: string[];
}

export default function SelectMedicamento({onChange, value, medicationList} : SelectMedicamentoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nomeDoRemedio = e.target.value;
    onChange(nomeDoRemedio);
  }

  const exemploList = [
    "Remédio 1",
    "Remédio 2",
    "Remédio 3"
  ]

  const list = (medicationList == null || medicationList == undefined) ? exemploList : medicationList;

  return (
    <div className='select-container'>
        <select
          className='caixa-de-selecao'
          onChange={handleChange}
          value={value}
        >
          <option value="" disabled selected>Selecione o medicamento...</option>
          {list.map((remedios) => (
            <option
              key={remedios}
              value={remedios}
            >
              {remedios}
            </option>
          ))}
        </select>
        <ArrowForwardIosRoundedIcon className='arrow-icon' />
    </div>
  )
}