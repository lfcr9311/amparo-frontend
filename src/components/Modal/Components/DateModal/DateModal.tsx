import React, { useState } from 'react';
import './DateModal.css';

type DateModalProps = {
  value?: string;
  onChange?: (selectedDate: string) => void;
  disabled?: boolean;
}

const DateModal: React.FC<DateModalProps> = ({ value = '', onChange, disabled }) => {
  const [date, setDate] = useState(value);

  const handleValueChange = (newDate: string) => {
    setDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  return (
    <input
      type="date"
      className="date-picker"
      value={date}
      onChange={(event) => handleValueChange(event.target.value)}
      disabled={disabled}
    />
  );
}

export default DateModal;
