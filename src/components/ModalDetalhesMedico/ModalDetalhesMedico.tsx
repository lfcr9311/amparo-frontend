import DefaultProfilePicture from '../../assets/DefaultProfilePicture.svg';
import { Dispatch, SetStateAction } from 'react';

interface Medico {
  id: number;
  email: string;
  name: string;
  cellphone: string;
  profilePicture?: string;
  isAnonymous: boolean;
  crm: string;
  uf: string;
}

interface ModalDetalhesMedicoProps {
  medico?: Medico;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setMedico: Dispatch<SetStateAction<any>>;
}

const ModalDetalhesMedico = ({
  medico,
  isModalOpen,
  setIsModalOpen,
  setMedico,
}: ModalDetalhesMedicoProps) => {
  return (
    <div className="modal-content-container">
      <div className="avatar-container">
        <img
          src={medico?.profilePicture || DefaultProfilePicture}
          alt="Doctor Avatar"
          className="avatar-image"
        />
      </div>
      <h2>Dr. {medico?.name}</h2>
      <p className="crm">
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          CRM / UF:
        </span>{' '}
        {`${medico?.crm}/${medico?.uf}`}
      </p>

      <div className="contact-info">
        <div className="contact-group">
          <p>
            <span role="img" aria-label="email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clip-path="url(#clip0_403_1584)">
                  <path
                    d="M11.66 1.86083C6.07748 1.46667 1.46665 6.0775 1.86081 11.66C2.19081 16.5092 6.42581 20.1667 11.2841 20.1667H14.6666C15.1708 20.1667 15.5833 19.7542 15.5833 19.25C15.5833 18.7458 15.1708 18.3333 14.6666 18.3333H11.3025C7.88331 18.3333 4.74831 16.115 3.89581 12.8058C2.52998 7.48917 7.47998 2.53 12.7966 3.905C16.115 4.74833 18.3333 7.88333 18.3333 11.3025V12.3108C18.3333 13.035 17.6825 13.75 16.9583 13.75C16.2341 13.75 15.5833 13.035 15.5833 12.3108V11.165C15.5833 8.86417 13.9516 6.7925 11.6783 6.47167C8.56165 6.0225 5.93081 8.7175 6.48998 11.8525C6.80165 13.6033 8.16748 15.0517 9.89998 15.4642C11.5866 15.8583 13.1908 15.3175 14.245 14.245C15.0608 15.3633 16.6925 15.95 18.1866 15.3542C19.415 14.8683 20.1666 13.6125 20.1666 12.2925V11.2933C20.1666 6.42583 16.5091 2.19083 11.66 1.86083ZM11 13.75C9.47831 13.75 8.24998 12.5217 8.24998 11C8.24998 9.47833 9.47831 8.25 11 8.25C12.5216 8.25 13.75 9.47833 13.75 11C13.75 12.5217 12.5216 13.75 11 13.75Z"
                    fill="#343131"
                  />
                </g>
              </svg>
            </span>{' '}
            {medico?.email}
          </p>
          <p>
            <span role="img" aria-label="phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clip-path="url(#clip0_403_1590)">
                  <path
                    d="M17.6275 13.9883L15.2991 13.7225C14.74 13.6583 14.19 13.8508 13.7958 14.245L12.1091 15.9317C9.51498 14.6117 7.38831 12.4942 6.06831 9.89084L7.76414 8.195C8.15831 7.80084 8.35081 7.25084 8.28664 6.69167L8.02081 4.38167C7.91081 3.45584 7.13164 2.75917 6.19664 2.75917H4.61081C3.57498 2.75917 2.71331 3.62084 2.77748 4.65667C3.26331 12.485 9.52414 18.7367 17.3433 19.2225C18.3791 19.2867 19.2408 18.425 19.2408 17.3892V15.8033C19.25 14.8775 18.5533 14.0983 17.6275 13.9883Z"
                    fill="#343131"
                  />
                </g>
              </svg>
            </span>{' '}
            {medico?.cellphone}
          </p>
        </div>
      </div>

      <button
        className="close-button"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
          setMedico(undefined);
        }}
      >
        Fechar
      </button>
    </div>
  );
};

export default ModalDetalhesMedico;
