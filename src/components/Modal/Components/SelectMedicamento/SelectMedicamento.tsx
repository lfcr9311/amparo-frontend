import './SelectMedicamento.css';

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
    <>
      <select
        className='caixa-de-selecao'
        onChange={handleChange}
        value={value}
        >
        <option className='opcao' value='' disabled selected>
          Selecione seu medicamento...
        </option>
        {list.map((remedios) => (
          <option 
          className='opcao-medication'
          key={remedios}
          value={remedios}
          >
            {remedios}
          </option>
        ))}
      </select>
    </>
  )
}