import DefaultProfilePicture from '../../assets/DefaultProfilePicture.svg';
import { Dispatch, SetStateAction } from 'react';

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
          Cpf:
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
        {`${paciente?.numSus}`}
      </p>

     

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
