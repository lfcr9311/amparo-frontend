import './DateModal.css';

interface DateModalProps {
  value?: string;
  onChange: (value: string) => void;
}

export default function DateModal({ value, onChange }: DateModalProps) {
  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="date"
      className="date-picker"
      value={value || ''}
      onChange={handleValue}
    />
  );
}
