import React, { useState } from 'react';
import './Description.css';

interface DescriptionProps {
  descriptValue?: string;
  descriptExist?: boolean;
}

export default function Description({
  descriptValue,
  descriptExist,
}: DescriptionProps) {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <textarea
      value={descriptExist ? descriptValue : description}
      onChange={handleDescriptionChange}
      placeholder="Descrição..."
      className="description-container"
    />
  );
}
