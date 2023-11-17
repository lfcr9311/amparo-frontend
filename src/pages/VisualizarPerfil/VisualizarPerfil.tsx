import './VisualizarPerfil.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { PatientProfileCard } from '../../components/ProfilePatientCard/ProfilePatientCard';
import Modal from '../../components/Modal/Modal';
import { useEffect, useState } from 'react';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import CustomButton from '../../components/Button/Button';
import { editUser } from '../../utils/apiService';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import cpf from 'cpf';
import { Button } from '@mui/material';
import { getPatient } from '../../utils/apiService';
import { z } from 'zod';


const isCPF = (value: string): boolean => cpf.isValid(value);
const pacientSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
    email: z.string().email({ message: 'Email Inválido' }),
    date: z.coerce.date().refine((value) => value < new Date(), { message: 'Data inválida' }),
    cpf: z
      .string()
      .refine((value) => isCPF(value), { message: 'Insira um CPF válido' }),
    nSus: z.string().regex(/^\d{15}$/, { message: "Número SUS inválido" }).nullable()
  })

const VisualizacaoPerfilPaciente = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nSus, setNSus] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    date: '',
    cpf: '',
    nSus: ''
  });

  async function update() {
    try {
      setErrors({
        name: '',
        email: '',
        date: '',
        cpf: '',
        nSus: ''
      });
      const formData = { name, email, date: dataNascimento, cpf, nSus };
      pacientSchema.parse(formData);
      await editUser(name, '12345678910', cpf.replace(/\D/g, ""), null, email, dataNascimento, nSus);
      setIsModalOpen(!isModalOpen);
    }
    catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((err) => {
          setErrors(prev => ({ ...prev, [err.path[0]]: err.message }));
        });
      }
      else {
        console.log(e);
      }
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
      setName(att.name)
      setEmail(att.email)
      setCpf(att.cpf)
      setDataNascimento(att.birthDate)
      setNSus(att.numSus)
    })
  }, [isModalOpen])

  return (
    <>
      <div className="header-container">
        <HeaderHome type="headerPage" title="Perfil" />
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
            numSus={nSus}
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
                error={Boolean(errors.name)}
                helperText={Boolean(errors.name) ? errors.name : ''}
                type="text"
                onChange={(value) => setName(value)}
              />
              <TextfieldModal
                label="CPF"
                error={Boolean(errors.cpf)}
                helperText={Boolean(errors.cpf) ? errors.cpf : ''}
                value={cpf}
                type="text"
                onChange={(value) => setCpf(value)}
              />
              <TextfieldModal
                label="Email"
                value={email}
                error={Boolean(errors.email)}
                helperText={Boolean(errors.email) ? errors.email : ''}
                type="text"
                onChange={(value) => setEmail(value)}
              />
              <TextfieldModal
                label="Data de Nascimento"
                value={dataNascimento}
                error={Boolean(errors.date)}
                helperText={Boolean(errors.date) ? errors.date : ''}
                type="text"
                onChange={(value) => setDataNascimento(value)}
              />
              <TextfieldModal
                label="Nº do SUS"
                error={Boolean(errors.nSus)}
                helperText={Boolean(errors.nSus) ? errors.nSus : ''}
                value={nSus}
                type="text"
                onChange={(value) => setNSus(value)}
              />
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={() => {
                  async function callUpdate() {
                    await (update());
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
