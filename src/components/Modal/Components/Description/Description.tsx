import React, { useState } from 'react';
import './Description.css';

interface DescriptionProps {
  descriptionValue?: string;
  descriptionExist?: boolean;
}

export default function Description({
  descriptionValue,
  descriptionExist,
}: DescriptionProps) {
  const [description, setDescription] = useState('');
  const [descriptionValueChange, setDescriptionValueChange] =
    useState(descriptionValue);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleDescriptionValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionValueChange(event.target.value);
  };

  return (
    <textarea
      value={descriptionExist ? descriptionValueChange : description}
      onChange={
        descriptionExist
          ? handleDescriptionValueChange
          : handleDescriptionChange
      }
      placeholder="Descrição..."
      className="description-container"
    />
  );
}
