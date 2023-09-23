import { useState } from 'react';
import './DateModal.css';

export default function DateModal() {
  const [date, setDate] = useState('');

  const handleValue = (value: string) => {
    setDate(value);
  };

  return (
    <input
      type="date"
      className="date-picker"
      value={date}
      onChange={(event) => handleValue(event.target.value)}
    />
  );
}
