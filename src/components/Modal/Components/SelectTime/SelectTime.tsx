import { ChangeEvent, useState } from 'react';
import './SelectTime.css';

export default function SelectTime() {
  const [selectedTime, setSelectedTime] = useState('00:00');

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="componente-time">
      <label className="horario">
        Horário de Administração:
        <input
          className="hora-minuto"
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </label>
    </div>
  );
}
