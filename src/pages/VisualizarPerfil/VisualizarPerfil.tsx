import './VisualizarPerfil.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { PatientProfileCard } from '../../components/ProfilePatientCard/ProfilePatientCard';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import CustomButton from '../../components/Button/Button';
import { editUser, getUser } from '../../utils/apiService';

interface patientApiInfo {
  cellphone: string,
  cpf: string,
  email: string,
  id: string,
  isAnonymous: boolean,
  name: string,
  profilePicture: null
}

const VisualizacaoPerfilPaciente = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiInfo, setApiInfo] = useState({
    cellphone: '92108392832',
    cpf: '398239823',
    email: 'a@email.com',
    id: '',
    isAnonymous: false,
    name: '',
    profilePicture: null
  } as patientApiInfo);
  const getInfo = async () => {
    try {
      const response = await getUser();
      console.log(response);
      setApiInfo(response);
    }
    catch(e) {
      console.log(e)
    }
    
    // setApiInfo(response);
}
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nSus, setNSus] = useState('');
  const [ddd, setDdd] = useState('');
  const [cellphone, setCellphone] = useState('');
  useEffect(() => {
    const getUsers = async () => {
      await getInfo();
    }
    getUsers();
  }, [])

  
  return (
    <>
      <div className="header-container">
        <HeaderHome type="headerPage" title="Perfil" />
      </div>
      <div className="container">
        <div className="profile-card-container">
          <PatientProfileCard
            name={apiInfo.name}
            email={apiInfo.email}
            cpf={apiInfo.cpf}
            dataNascimento="23/02/1980"
            onClickChangePassword={() => console.log('Change Password')}
            onClickDoctors={() => console.log('Click Doctors')}
            onClickEditProfile={() => setIsModalOpen(!isModalOpen)}
            numSus="012345678901235"
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
                value={apiInfo.name}
                type="text"
                onChange={(value) => setName(value)}
              />
              <TextfieldModal
                label="CPF"
                value={apiInfo.cpf}
                type="text"
                onChange={(value) => setCpf(value)}
              />
              <TextfieldModal
                label="Data de Nascimento"
                value={dataNascimento}
                type="text"
                onChange={(value) => setDataNascimento(value)}
              />
              <TextfieldModal
                label="E-mail"
                value={apiInfo.email}
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
                  value={"51"}
                  type="text"
                  width="65.5px"
                  onChange={(value) => setDdd(value)}
                />
                <TextfieldModal
                  label="Telefone"
                  value={apiInfo.cellphone}
                  type="text"
                  width="195.5px"
                  onChange={(value) => setCellphone(value)}
                />
              </div>
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={async () => {
                  await editUser(name, cellphone, cpf, null, email )
                }}
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
