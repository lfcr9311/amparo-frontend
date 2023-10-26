import './VisualizarPerfil.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { PatientProfileCard } from '../../components/ProfilePatientCard/ProfilePatientCard';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import CustomButton from '../../components/Button/Button';
import { getUser } from '../../utils/apiService';

const VisualizacaoPerfilPaciente = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nSus, setNSus] = useState('');
  const [ddd, setDdd] = useState('');
  const [cellphone, setCellphone] = useState('');
  const firstAndLastName = name.split(' ');
  let displayName = name;

  if (firstAndLastName.length > 1) {
    const firstName = firstAndLastName[0];
    const lastName = firstAndLastName[firstAndLastName.length - 1];
    displayName = `${firstName} ${lastName}`;
  }

  async function fetchData() {
    try {
      const result = await getUser();
      setName(result.data.name);
      setCpf(result.data.cpf);
      setEmail(result.data.email);
      setDataNascimento(result.data.dataNascimento);
      setNSus(result.data.nSus);
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  }

  useEffect(() => {
    fetchData();
    console.log();
  }, []);

  return (
    <>
      <div className="header-container">
        <HeaderHome type="headerPage" title="Perfil" />
      </div>
      <div className="container">
        <div className="profile-card-container">
          <PatientProfileCard
            name={displayName}
            cpf={ cpf }
            email={ email }
            dataNascimento={ dataNascimento }
            onClickChangePassword={() => console.log('Change Password')}
            onClickDoctors={() => console.log('Click Doctors')}
            onClickEditProfile={() => setIsModalOpen(!isModalOpen)}
            numSus={ nSus }
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          title="Perfil"
          isClose={() => setIsModalOpen(!isModalOpen)}
        >
          <form>
            <div className="content-modal">
              <TextfieldModal
                label="Seu nome"
                value={name}
                type="text"
                onChange={(value) => setName(value)}
              />
              <TextfieldModal
                label="CPF"
                value={cpf}
                type="text"
                onChange={(value) => setCpf(value)}
              />
              <TextfieldModal
                label="Email"
                value={email}
                type="text"
                onChange={(value) => setEmail(value)} 
              />
              <TextfieldModal
                label="Data de Nascimento"
                value={dataNascimento}
                type="text"
                onChange={(value) => setDataNascimento(value)}
              />
              <TextfieldModal
                label="Nº do SUS"
                value={nSus}
                type="text"
                onChange={(value) => setNSus(value)}
              />
              <div className="cellphone-container">
                <TextfieldModal
                  label="DDD"
                  value={ddd}
                  type="text"
                  width="65.5px"
                  onChange={(value) => setDdd(value)}
                />
                <TextfieldModal
                  label="Telefone"
                  value={cellphone}
                  type="text"
                  width="195.5px"
                  onChange={(value) => setCellphone(value)}
                />
              </div>
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={() => console.log('Salvar')}
              />
            </div>
          </form>
        </Modal>
        <span>
          <a className="delete-container" href="">
            Deletar Conta
          </a>
        </span>
      </div>
      <div className="footer-container">
        <Footer user="patient" />
      </div>
    </>
  );
};

export default VisualizacaoPerfilPaciente;
