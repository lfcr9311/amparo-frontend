import React, { useState } from 'react';
import Modal from '../../Modal';
import './SolicitacaoEnviada.css';
import CustomButton from '../../../Button/Button';

export default function SolicitacaoEnviada() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <Modal
      isClose={() => setIsModalOpen(!isModalOpen)}
      isOpen={isModalOpen}
      title=""
    >
      <p className="text-modal">Solicitação de conexão enviada!</p>
      <CustomButton
        variant="outlined"
        label="Solicitar"
        onClick={() => console.log('Solicitar')}
      />
    </Modal>
  );
}
