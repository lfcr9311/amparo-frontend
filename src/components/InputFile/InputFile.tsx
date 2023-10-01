import { ChangeEvent } from 'react';
import AddImageIcon from '../../assets/AddImageIcon.svg';
import AddFileIcon from '../../assets/AddFileIcon.svg';
import './InputFile.css';

interface FileInputProps {
  type: 'image' | 'pdf';
}

export default function InputFile({ type }: FileInputProps) {
  return (
    <label className="file-input-label">
      <input
        type="file"
        accept={type === 'image' ? 'image/*' : 'application/pdf'}
        className="file-input"
      />
      <img src={type === 'image' ? AddImageIcon : AddFileIcon} />
      {type === 'image' ? 'Adicionar Imagem/Foto' : 'Adicionar Arquivo PDF'}
    </label>
  );
}
