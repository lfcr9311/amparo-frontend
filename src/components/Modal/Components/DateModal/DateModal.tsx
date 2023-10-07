import { useState } from 'react';
import './DateModal.css';

interface DateModalProps {
  dateValue?: string;
  dateExist?: boolean;
}

export default function DateModal({ dateValue, dateExist }: DateModalProps) {
  const [date, setDate] = useState('');

  const handleValue = (value: string) => {
    setDate(value);
  };

  return (
    <input
      type="date"
      className="date-picker"
      value={dateExist ? dateValue : date}
      onChange={(event) => handleValue(event.target.value)}
    />
  );
}
