import React, { useState } from 'react';
import './DateModal.css';

type DateModalProps = {
  value?: string;
  onChange?: (selectedDate: string) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}

const DateModal: React.FC<DateModalProps> = ({ value = '', onChange, disabled, error, helperText }) => {
  const [date, setDate] = useState(value);

  const handleValueChange = (newDate: string) => {
    setDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  return (
    <div>
      <input
        type="date"
        className={`date-picker ${error ? 'date-error' : ''}`}
        value={date}
        onChange={(event) => handleValueChange(event.target.value)}
        disabled={disabled}
      />
      {error && <p className="error-text">{helperText}</p>}
    </div>
  );
}

export default DateModal;
