import Modal from '../../Modal';
import TextfieldModal from '../TextfieldModal';
import CustomButton from '../../../Button/Button';
import './Solicitacao.css';

interface SolicitacaoProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}
export default function Solicitacao({
  isModalOpen,
  setIsModalOpen,
}: SolicitacaoProps) {
  return (
    <Modal
      isClose={() => setIsModalOpen(!isModalOpen)}
      isOpen={isModalOpen}
      title="Adicionar médico"
    >
      <div className="modal-content">
        <TextfieldModal
          label="Buscar por nome ou CRM..."
          value=""
          type="text"
          onChange={() => {}}
        />
        <div style={{ padding: '10px' }}></div>
        <CustomButton
          variant="outlined"
          label="Solicitar"
          onClick={() => console.log('Solicitar')}
        />
      </div>
    </Modal>
  );
}
