import './VisualizarPerfil.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { PatientProfileCard } from '../../components/ProfilePatientCard/ProfilePatientCard';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import CustomButton from '../../components/Button/Button';
import { editUser } from '../../utils/apiService';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import { Button } from '@mui/material';
import { getPatient } from '../../utils/apiService';

interface apiInfo {
  name: string,
  cpf: string,
  email: string,
  birthDate: string,
  numSus: string,
  cellphone: string
}

const VisualizacaoPerfilPaciente = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiInfo, setApiInfo] = useState({
    name: '',
    cpf: '',
    email: '',
    birthDate: '',
    numSus: '',
    cellphone: ''
  })
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nSus, setNSus] = useState('');
  const [ddd, setDdd] = useState('');
  const [cellphone, setCellphone] = useState('');
  const firstAndLastName = name.split(' ');
  const firstName = firstAndLastName[0];
  const lastName = firstAndLastName[firstAndLastName.length - 1];

async function update() {
  try {
    await editUser(name, cellphone, cpf, "null", email, dataNascimento, nSus);
    const att = await getPatient() as unknown as apiInfo;
    setApiInfo({
      name: att.name,
      email: att.email,
      birthDate: att.birthDate,
      numSus: att.numSus,
      cellphone: att.cellphone,
      cpf: att.cpf
    })
    setIsModalOpen(!isModalOpen);
  }
  catch(e) {
    console.log(e)
  }
}

  const navigate = useNavigate()
  const handleDeletar = () => {

    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    navigate(ROUTES.LOGIN())
  }
  useEffect(() => {
    getPatient().then((response) => {
      const att = response.data
      setApiInfo({
        name: att.name,
        email: att.email,
        birthDate: att.birthDate,
        numSus: att.numSus,
        cellphone: att.cellphone,
        cpf: att.cpf
      })
      setName(att.name)
      setEmail(att.email)
      setDataNascimento(att.birthDate)
      setNSus(att.numSus)
      setCellphone(att.cellphone)
      setCpf(att.cpf)
    })
  }, [])
  return (
    <>
      <div className="header-container">
        <HeaderHome type="headerPage" title="Perfil" setActiveTab={function (): void {
          throw new Error('Function not implemented.');
        } } activeTab={''} />
      </div>
      <div className="container">
        <div className="profile-card-container">
          <PatientProfileCard
            name={name}
            email={email}
            cpf={cpf}
            dataNascimento={dataNascimento}
            onClickChangePassword={() => console.log('Change Password')}
            onClickEditProfile={() => setIsModalOpen(!isModalOpen)}
            numSus={ nSus }
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          title="Perfil"
          isClose={() => {
            setName(apiInfo.name);
            setEmail(apiInfo.email);
            setDataNascimento(apiInfo.birthDate);
            setNSus(apiInfo.numSus);
            setCellphone(apiInfo.cellphone);
            setCpf(apiInfo.cpf);
          }}
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
                  value={"51"}
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
                onClick={() => {
                  async function callUpdate() {
                    await(update());
                  }
                  callUpdate();
                }}
              />
            </div>
          </form>
        </Modal>
        <div >
          <Button
            sx={{
              color: '#e10e17',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              textDecoration: 'none',
              textTransform: 'none',
            }}
            onClick={handleDeletar}
          >
            Sair da Conta
          </Button>
        </div>
      </div>
      <div className="footer-container">
        <Footer user="patient" />
      </div>
    </>
  );
};

export default VisualizacaoPerfilPaciente;
