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
      <p className="text-modal" style={{ marginBottom: '10px' }}>
        Solicitação de conexão enviada!
      </p>
      <div style={{ textAlign: 'center' }}>
        <button
          className="close-button"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          Fechar
        </button>
      </div>
    </Modal>
  );
}
