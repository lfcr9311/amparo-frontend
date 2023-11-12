import { useState } from 'react';
import './SolicitacaoEnviada.css';

export default function SolicitacaoEnviada() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div className="background-container">
      <div className="modal-container">
        {/* <div className="header-modal-container">
            <p className="title-modal">{title}</p>
            <button className="button-close" onClick={isClose}>
              <img src={Close} />
            </button>
          </div> */}
        <div className="body-modal-container">
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
        </div>
      </div>
    </div>
  );
}
