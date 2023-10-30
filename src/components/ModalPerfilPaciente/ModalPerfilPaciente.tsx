import './Modal.css';
import Close from '../../assets/Close.svg';
import { Informacoes } from './ComponentsModalPaciente/DadosPessoais/DadosPessoais';
import { Botoes } from './ComponentsModalPaciente/ButtonsDoModal/ButtonsDoModal';
import { Nome } from './ComponentsModalPaciente/NomePerfil/NomePerfil';
import IconProfile from '../../assets/IconProfile.svg';


interface ModalProps {
  isOpen: boolean;
  isClose: any;
  name: string;
  cpf: string;
  email: string;
  nSus: string;
  onclickExames: () => void;
  onclickMedicamentos: () => void;
}

export default function ModalPerfilPaciente({
  isOpen,
  isClose,
  name,
  cpf,
  email,
  nSus,
  onclickExames,
  onclickMedicamentos,

}: ModalProps) {
  if (isOpen) {
    return (
      <div className="background-container">
        <div className="modal-container">
          <div className="header-modal-container">
            <img src={IconProfile} alt="Profile" className="profile-image" />
            <button className="button-close" onClick={isClose}>
              <img src={Close} alt="Close" />
            </button>

          </div>
          <div className="neck-profile-name">
            <Nome name={name} />
          </div>
          <div className="body-modal-container">
            <Informacoes cpf={cpf} email={email} nSus={nSus} />

          </div>
          <div className="footer-modal-container">
            <Botoes
              onclickExames={onclickExames}
              onclickMedicamentos={onclickMedicamentos}
            />
          </div>
        </div>
      </div>
    );
  }
}
