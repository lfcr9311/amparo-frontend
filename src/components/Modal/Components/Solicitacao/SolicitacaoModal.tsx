import Modal from '../../Modal';
import CustomButton from '../../../Button/Button';
import './Solicitacao.css';
import SelectModal from "../SelectModal/SelectModal.tsx";

interface SolicitacaoProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  onClickButton?: () => void;
  crm: string;
  setCrm: (value: string) => void;
  uf: string;
  setUf: (value: string) => void;
}

export default function Solicitacao({
                                      isModalOpen,
                                      setIsModalOpen,
                                      crm,
                                      setCrm,
                                      uf,
                                      setUf,
                                      onClickButton
                                    }: SolicitacaoProps) {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCrm(event.target.value);
  };

  return (
    <Modal
      isClose={() => setIsModalOpen(!isModalOpen)}
      isOpen={isModalOpen}
      title="Adicionar médico"
    >
      <div className="modal-content">

        <div className="solicitacao-search-container">
          <SelectModal onChange={setUf} value={uf} />

          <input
            placeholder={'Inserir CRM...'}
            value={crm}
            type="text"
            onChange={handleInputChange}
            className='solicitacao-input'
          />
        </div>

        <div style={{padding: '10px'}}></div>
        <CustomButton
          variant="outlined"
          label="Solicitar"
          onClick={onClickButton}
        />
      </div>
    </Modal>
  );
}