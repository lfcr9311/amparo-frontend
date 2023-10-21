import React, { useEffect, useState } from 'react';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './MeusMedicosStyle.css';
import Footer from '../../components/Footer/Footer';
import CardMedico from '../../components/CardMedico/CardMedico';
import Modal from '../../components/Modal/Modal';
import ModalDetalhesMedico from '../../components/ModalDetalhesMedico/ModalDetalhesMedico';

interface Medico {
  id?: number;
  name?: string;
  profilePicture?: string;
  especialidade?: string;
  crm?: string;
  uf?: string;
  email?: string;
  telefone?: string;
}

const medicosMock: Medico[] = [
  {
    id: 1,
    name: 'João da Silva',
    profilePicture: 'https://i.imgur.com/8Km9tLL.png',
    especialidade: 'Cardiologista',
    crm: '123456',
    uf: 'SP',
    email: 'joao@email.com',
    telefone: '(11) 99999-9999',
  },
  {
    id: 2,
    name: 'Maria Fernanda',
    profilePicture: 'https://i.imgur.com/8Km9tLL.png',
    especialidade: 'Dermatologista',
    crm: '123457',
    uf: 'RJ',
    email: 'maria@email.com',
    telefone: '(21) 88888-8888',
  },
  {
    id: 3,
    name: 'Carlos Roberto',
    profilePicture: 'https://i.imgur.com/8Km9tLL.png',
    especialidade: 'Pediatra',
    crm: '123458',
    uf: 'MG',
    email: 'carlos@email.com',
    telefone: '(31) 77777-7777',
  },
  {
    id: 4,
    name: 'Lucia Helena',
    profilePicture: 'https://i.imgur.com/8Km9tLL.png',
    especialidade: 'Endocrinologista',
    crm: '123459',
    uf: 'RS',
    email: 'lucia@email.com',
    telefone: '(51) 66666-6666',
  },
  {
    id: 5,
    name: 'Paulo Ricardo',
    profilePicture: 'https://i.imgur.com/8Km9tLL.png',
    especialidade: 'Otorrinolaringologista',
    crm: '123460',
    uf: 'PE',
    email: 'paulo@email.com',
    telefone: '(81) 55555-5555',
  },
  {
    id: 6,
    name: 'Ana Clara',
    profilePicture: 'https://i.imgur.com/8Km9tLL.png',
    especialidade: 'Ortopedista',
    crm: '123461',
    uf: 'BA',
    email: 'ana@email.com',
    telefone: '(71) 44444-4444',
  },
  {
    id: 7,
    name: 'Roberto Souza',
    profilePicture: 'https://i.imgur.com/8Km9tLL.png',
    especialidade: 'Neurologista',
    crm: '123462',
    uf: 'SC',
    email: 'roberto@email.com',
    telefone: '(48) 33333-3333',
  },
  {
    id: 8,
    name: 'Juliana Menezes',
    profilePicture: 'https://i.imgur.com/8Km9tLL.png',
    especialidade: 'Ginecologista',
    crm: '123463',
    uf: 'CE',
    email: 'juliana@email.com',
    telefone: '(85) 22222-2222',
  },
];

const MeusMedicos: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [medico, setMedico] = useState<Medico>();

  useEffect(() => {
    setMedicos(medicosMock);
  }, []);

  function handleCardClick(medico: Medico) {
    setIsModalOpen(!isModalOpen);
    setMedico(medico);
  }

  return (
    <>
      <HeaderHome title="Meus Médicos" type="headerPage" />
      <div className="body-container">
        {medicos.map((medico) => (
          <>
            <CardMedico
              name={medico.name}
              profilePicture={medico.profilePicture}
              onClick={() => handleCardClick(medico)}
            />
          </>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        title=""
        isClose={() => setIsModalOpen(!isModalOpen)}
        children={
          <ModalDetalhesMedico
            medico={medico}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setMedico={setMedico}
          />
        }
      />

      <Footer user="patient" />
    </>
  );
};

export default MeusMedicos;
