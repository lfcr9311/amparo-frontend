import React, { useState } from 'react';
import SetaDataDireita from '../../assets/SetaDataDireita.svg';
import SetaDataEsquerda from '../../assets/SetaDataEsquerda.svg';


const DateSelector: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    };
    const formattedDate = date.toLocaleDateString('pt-BR', options);

    return formattedDate.replace(/^(.)(.*)(\s)(.)(.*)$/, (match, p1, p2, p3, p4, p5) => {
      return p1.toUpperCase() + p2 + p3 + p4.toUpperCase() + p5;
    });
  };

  return (
    <div className="date-selector-container">
      <button className="prev-button" onClick={handlePrevDay}>
        <img src={SetaDataEsquerda} alt="Anterior" />
      </button>
      <span className="date-text">{formatDate(selectedDate)}</span>
      <button className="next-button" onClick={handleNextDay}>
        <img src={SetaDataDireita} alt="Seguinte" />
      </button>
    </div>
  );
};

export default DateSelector;
