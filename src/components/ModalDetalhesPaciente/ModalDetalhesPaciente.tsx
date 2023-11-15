import DefaultProfilePicture from '../../assets/DefaultProfilePicture.svg';
import { Dispatch, SetStateAction } from 'react';
import './ModalDetalhesPaciente.css';
import ExameIcon from '../../assets/ExameIcon.svg';
import MedicamentosIcon from '../../assets/MedicationIcon.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
interface Paciente {
  id: number;
  email: string;
  name: string;
  cellphone: string;
  profilePicture?: string;
  isAnonymous: boolean;
  cpf: string;
  birthDate: string;
  numSus: string;
}

interface ModalDetalhesPacienteProps {
  paciente?: Paciente;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setpaciente: Dispatch<SetStateAction<any>>;
}

const ModalDetalhesPaciente = ({
  paciente,
  isModalOpen,
  setIsModalOpen,
  setpaciente,

}: ModalDetalhesPacienteProps) => {
  
  const navigate = useNavigate();

  const handleClickMedicamentos = () => {
  };
  
  const handleClickExames = () => {
    navigate(ROUTES.ACESSAR_EXAMES_PACIENTE(), { state: { paciente: paciente }})
  };

  return (
    <div className="modal-content-container">
      <div className="avatar-container">
        <img
          src={paciente?.profilePicture || DefaultProfilePicture}
          alt="Patient Avatar"
          className="avatar-image"
        />
      </div>
      <h2>{paciente?.name}</h2>
      <p className="crm">
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          CPF:
        </span>{' '}
        {`${paciente?.cpf}`}
      </p>
      <p className="crm">
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          Email:
        </span>{' '}
        {`${paciente?.email}`}
      </p>
      <p className="crm">
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          NºSUS:
        </span>{' '}
        {`${paciente?.numSus == null ? 'Não informado' : paciente?.numSus}`}  
      </p>
      <div className='buttons-box'>
          <div className='button-card'>
            <button className='button' onClick={handleClickExames}>
              <img className='icon' src={ExameIcon} />
            </button>
            <h4 className='text-button'>Exames</h4>
          </div>
          <div className='button-card'>
            <button className='button' onClick={handleClickMedicamentos}>
              <img className='icon' src={MedicamentosIcon} />
            </button>
            <h4 className='text-button'>Medicamentos</h4>
          </div>
      </div>
      <button
        className="close-button"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
          setpaciente(undefined);
        }}
      >
        Fechar
      </button>
    </div>
  );
};

export default ModalDetalhesPaciente;