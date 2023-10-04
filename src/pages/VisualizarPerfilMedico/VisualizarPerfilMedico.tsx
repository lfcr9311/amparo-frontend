import './VisualizarPerfilMedico.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import ProfileDoctorCard from '../../components/ProfileDoctorCard/ProfileDoctorCard';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import SelectConvenios from '../../components/Modal/Components/SelectConvenios/SelectConvenios';
import SelectModal from '../../components/Modal/Components/SelectModal/SelectModal';
import CustomButton from '../../components/Button/Button';

const VisualizacaoPerfilMedico = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [uf, setUf] = useState('');
  const [crm, setCrm] = useState('');
  const [ddd, setDdd] = useState('');
  const [phone, setPhone] = useState('');
  const [convenios, setConvenios] = useState('');

  return (
    <>
      <div className="header-container">
        <HeaderHome title="Perfil" />
      </div>
      <div className="container">
        <div className="profile-card-container">
          <ProfileDoctorCard
            name="Dr João Silva"
            specialty="Infectologista"
            agreements="Unimed SulAmerica"
            crm={123456}
            email="joaosilva1@hotmail.com"
            phone="(33) 33333-3333"
            edit={() => setIsModalOpen(!isModalOpen)}
            alterarSenha={() => console.log('Alterar Senha')}
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          title="Pefil"
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
              <div className="container-aux">
                <SelectModal onChange={(value) => setUf(value)} value={uf} />
                <TextfieldModal
                  label="CRM"
                  value={crm}
                  type="text"
                  onChange={(value) => setCrm(value)}
                  width="195.5px"
                />
              </div>
              <div className="container-aux">
                <TextfieldModal
                  label="DDD"
                  value={ddd}
                  type="text"
                  onChange={(value) => setDdd(value)}
                  width="65.5px"
                />
                <TextfieldModal
                  label="Telefone"
                  value={phone}
                  type="text"
                  onChange={(value) => setPhone(value)}
                  width="195.5px"
                />
              </div>
              <SelectConvenios
                onChange={(value) => setConvenios(value)}
                value={convenios}
              />
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={() => console.log('Salvar')}
              />
            </div>
          </form>
        </Modal>
        <span className="span-container">
          <a className="delete-container" href="">
            Deletar Conta
          </a>
        </span>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default VisualizacaoPerfilMedico;
