import React, { useState } from 'react';
import Modal from '../../Modal';
import TextfieldModal from '../TextfieldModal';
import CustomButton from '../../../Button/Button';
import './Solicitacao.css'

export default function Solicitacao() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <Modal
      isClose={() => setIsModalOpen(!isModalOpen)}
      isOpen={isModalOpen}
      title="Adicionar médico"
    >
      <div className='modal-content'>
        <TextfieldModal
          label="Buscar por nome ou CRM..."
          value=""
          type="text"
          onChange={() => {}}
        />
        <div style={{padding: '10px'}}></div>
        <CustomButton
          variant="contained"
          label="Solicitar"
          onClick={() => console.log('Solicitar')}
        />
      </div>
    </Modal>
  );
}
