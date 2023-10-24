import React, { useEffect, useState } from 'react';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './MeusMedicosStyle.css';
import Footer from '../../components/Footer/Footer';
import CardMedico from '../../components/CardMedico/CardMedico';
import Modal from '../../components/Modal/Modal';
import ModalDetalhesMedico from '../../components/ModalDetalhesMedico/ModalDetalhesMedico';
import Solicitacao from '../../components/Modal/Components/Solicitacao/SolicitacaoModal';

interface Medico {
  id?: number;
  name?: string;
  profilePicture?: string;
  crm?: string;
  uf?: string;
  email?: string;
  telefone?: string;
}

const medicosMock: Medico[] = [
  {
    id: 1,
    name: 'João da Silva',
    profilePicture: '',
    crm: '123456',
    uf: 'SP',
    email: 'joao@email.com',
    telefone: '(11) 99999-9999',
  },
  {
    id: 2,
    name: 'Maria Fernanda',
    profilePicture: '',
    crm: '123457',
    uf: 'RJ',
    email: 'maria@email.com',
    telefone: '(21) 88888-8888',
  },
  {
    id: 3,
    name: 'Carlos Roberto',
    profilePicture: '',
    crm: '123458',
    uf: 'MG',
    email: 'carlos@email.com',
    telefone: '(31) 77777-7777',
  },
  {
    id: 4,
    name: 'Lucia Helena',
    profilePicture: '',
    crm: '123459',
    uf: 'RS',
    email: 'lucia@email.com',
    telefone: '(51) 66666-6666',
  },
  {
    id: 5,
    name: 'Paulo Ricardo',
    profilePicture: '',
    crm: '123460',
    uf: 'PE',
    email: 'paulo@email.com',
    telefone: '(81) 55555-5555',
  },
  {
    id: 6,
    name: 'Ana Clara',
    profilePicture: '',
    crm: '123461',
    uf: 'BA',
    email: 'ana@email.com',
    telefone: '(71) 44444-4444',
  },
  {
    id: 7,
    name: 'Roberto Souza',
    profilePicture: '',
    crm: '123462',
    uf: 'SC',
    email: 'roberto@email.com',
    telefone: '(48) 33333-3333',
  },
  {
    id: 8,
    name: 'Juliana Menezes',
    profilePicture: '',
    crm: '123463',
    uf: 'CE',
    email: 'juliana@email.com',
    telefone: '(85) 22222-2222',
  },
];

const MeusMedicos: React.FC = () => {
  const [isModalDetalhesOpen, setisModalDetalhesOpen] = useState(false);
  const [isModalSolicitacaoOpen, setisModalSolicitacaoOpen] = useState(false);
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [medico, setMedico] = useState<Medico>();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // TODO: Buscar médicos do usuário logado
    setMedicos(medicosMock);
  }, []);

  function handleCardClick(medico: Medico) {
    setisModalDetalhesOpen(!isModalDetalhesOpen);
    setMedico(medico);
  }

  function handleAddButtonClick() {
    setisModalSolicitacaoOpen(!isModalSolicitacaoOpen);
  }

  useEffect(() => {
    const filteredMedicos = medicosMock.filter((medico) =>
      medico.name?.toLowerCase().includes(searchText.toLowerCase())
    );

    setMedicos(filteredMedicos);
  }, [searchText]);

  return (
    <>
      <HeaderHome title="Meus Médicos" type="headerPage" />
      <div className="search-container">
        {/* TODO: temporário, componente de busca está em desenvolvimento */}
        <input
          type="text"
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          onClick={() => handleAddButtonClick()}
        >
          <path
            d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM27 19.8H19.8V27H16.2V19.8H9V16.2H16.2V9H19.8V16.2H27V19.8Z"
            fill="#E10E17"
          />
        </svg>
      </div>
      <div className="body-container">
        {medicos.map((medico) => (
          <>
            <CardMedico
              key={medico.id}
              name={medico.name}
              profilePicture={medico.profilePicture}
              onClick={() => handleCardClick(medico)}
            />
          </>
        ))}
      </div>

      <Modal
        isOpen={isModalDetalhesOpen}
        title=""
        isClose={() => setisModalDetalhesOpen(!isModalDetalhesOpen)}
        children={
          <ModalDetalhesMedico
            medico={medico}
            isModalOpen={isModalDetalhesOpen}
            setIsModalOpen={setisModalDetalhesOpen}
            setMedico={setMedico}
          />
        }
      />
      <Solicitacao
        isModalOpen={isModalSolicitacaoOpen}
        setIsModalOpen={setisModalSolicitacaoOpen}
      />

      <Footer user="patient" />
    </>
  );
};

export default MeusMedicos;
