import { ChangeEvent, useState } from 'react';
import './SelectTime.css';

interface SelectTimeProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SelectTime({ value, onChange }: SelectTimeProps) {

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="componente-time">
      <label className="horario">
        Horário de Administração:
        <input
          className="hora-minuto"
          type="time"
          value={value}
          onChange={handleTimeChange}
        />
      </label>
    </div>
  );
}
