import './VisualizarPerfil.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { PatientProfileCard } from '../../components/ProfilePatientCard/ProfilePatientCard';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import CustomButton from '../../components/Button/Button';
import { editUser, getUser } from '../../utils/apiService';

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
  const firstName = firstAndLastName[0];
  const lastName = firstAndLastName[firstAndLastName.length - 1];

  async function fetchData() {
    try {
      const result = await getUser();
      console.log(result);
      setName(result.name);
      setCpf(result.cpf);
      setEmail(result.email);
      setDataNascimento(result.birthDate.substring(0,10));
      setNSus(result.numSus);
      setCellphone(result.cellphone);
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  }
async function update() {
  try {
    console.log(name)
    console.log(cellphone)
    const result = await editUser(name, cellphone, cpf, "null", email, dataNascimento, nSus);
    console.log(result);
    setIsModalOpen(!isModalOpen);
  }
  catch(e) {
    console.log(e)
  }
}

  useEffect(() => {
    fetchData();
    console.log();
  }, []);

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
            name={`${firstName}  ${lastName}`}
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
