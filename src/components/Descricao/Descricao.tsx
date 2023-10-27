import './Descricao.css';

interface DescricaoProps {
  value: string;
}

export default function Descricao({ value }: DescricaoProps) {
  return <textarea value={value} className="descricao-container" />;
}
