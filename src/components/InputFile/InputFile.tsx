import { ChangeEvent } from 'react';
import AddImageIcon from '../../assets/AddImageIcon.svg';
import AddFileIcon from '../../assets/AddFileIcon.svg';
import './InputFile.css';

interface FileInputProps {
  type: 'image' | 'pdf';
  onChange: (file: File | null) => void;
}

export default function InputFile({ type, onChange }: FileInputProps) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <label className="file-input-label">
      <input
        type="file"
        accept={type === 'image' ? 'image/*' : 'application/pdf'}
        className="file-input"
        onChange={handleFileChange}
      />
      <img src={type === 'image' ? AddImageIcon : AddFileIcon} />
      {type === 'image' ? 'Adicionar Imagem/Foto' : 'Adicionar Arquivo PDF'}
    </label>
  );
}
