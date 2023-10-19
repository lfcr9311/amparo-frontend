import { useState } from 'react';
import './DateModal.css';

interface DateModalProps {
  dateValue?: string;
  dateExist?: boolean;
}

export default function DateModal({ dateValue, dateExist }: DateModalProps) {
  const [date, setDate] = useState('');
  const [dateValueChange, setDateValueChange] = useState(dateValue);

  const handleValue = (value: string) => {
    setDate(value);
  };

  const handleDateValue = (value: string) => {
    setDateValueChange(value);
  };

  return (
    <input
      type="date"
      className="date-picker"
      value={dateExist ? dateValueChange : date}
      onChange={
        dateExist
          ? (e) => handleDateValue(e.target.value)
          : (e) => handleValue(e.target.value)
      }
    />
  );
}
