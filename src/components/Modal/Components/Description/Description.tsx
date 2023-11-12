import './Description.css';

interface DescriptionProps {
  value?: string;
  onChange: (value: string) => void;
}

export default function Description({ value, onChange }: DescriptionProps) {
  const handleValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      value={value || ''}
      onChange={handleValue}
      placeholder="Descrição..."
      className="description-container"
    />
  );
}
