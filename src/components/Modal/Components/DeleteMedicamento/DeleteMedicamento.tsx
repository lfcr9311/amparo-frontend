import './DeleteMedicamento.css';

interface DeleteMedicamentoProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export default function DeleteMedicamento({
  isModalOpen,
  setIsModalOpen
}: DeleteMedicamentoProps) {
  return (
    <div className="background-container">
      <div className="modal-container">
        <div className="body-modal-container">
          <p className="text-modal" style={{ marginBottom: '15px', fontFamily: 'Poppins' }}>
            Deletar este medicamento?
          </p>
          <div style={{ textAlign: 'center' }}>
            <button
              className="close-button"
              style={{ fontWeight: '500', fontFamily: 'Poppins' }}
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
            > Voltar </button>
            <button
              className="delete-button"
              style={{ fontWeight: '500', fontFamily: 'Poppins' }}
              onClick={() => {
                console.log("deletado !")
              }}
            > Deletar </button>
          </div>
        </div>
      </div>
    </div>
  );
}
