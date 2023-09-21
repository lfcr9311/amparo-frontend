import React, { useState } from 'react';
import './Description.css';

export default function Description() {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <input
      type="text"
      value={description}
      onChange={handleDescriptionChange}
      placeholder="Descrição..."
      className="description-container"
    />
  );
}
