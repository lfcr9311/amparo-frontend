import './VisualizarPerfilMedico.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import {useEffect, useState} from 'react';
import ProfileDoctorCard from '../../components/ProfileDoctorCard/ProfileDoctorCard';
import TextfieldModal from '../../components/Modal/Components/TextfieldModal';
import SelectConvenios from '../../components/Modal/Components/SelectConvenios/SelectConvenios';
import SelectModal from '../../components/Modal/Components/SelectModal/SelectModal';
import CustomButton from '../../components/Button/Button';
import {Button, CircularProgress} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '../../routes/constans';
import {getDoctor} from "../../utils/apiService.tsx";

interface Doctor {
    cellphone?: string;
    crm?: string;
    email?: string;
    id?: string;
    isAnonymous?: boolean;
    name?: string;
    profilePicture?: string;
    uf?: string;
}

const VisualizacaoPerfilMedico = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [doctor, setDoctor] = useState<Doctor>();
    const [name, setName] = useState('');
    const [uf, setUf] = useState('');
    const [crm, setCrm] = useState('');
    const [ddd, setDdd] = useState('');
    const [phone, setPhone] = useState('');
    const [convenios, setConvenios] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const handleDeletar = () => {
        console.log("im here");

        localStorage.removeItem('authToken')
        localStorage.removeItem('userId')
        navigate(ROUTES.LOGIN())
    }

    useEffect(() => {
        setIsLoading(true)
        getDoctor().then((response) => {
            setDoctor(response.data)
            setIsLoading(false)

        }).catch((error) => {
            console.log(error)
            setIsLoading(false)

        })
    }, []);

    // @ts-ignore
    return (<>
        <div className="header-container">
            <HeaderHome title="Perfil" type="headerPage"/>
        </div>
        {isLoading && <CircularProgress color='error'/>}
        {!isLoading && (<>

                <div className="container">
                    <div className="profile-card-container">
                        <ProfileDoctorCard
                            name={`Dr. ${doctor?.name}`}
                            uf={doctor?.uf}
                            crm={doctor?.crm}
                            email={doctor?.email}
                            phone={doctor?.cellphone?.replace(/^(\d{2})(\d+)$/, '($1) $2')}
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
                                    <SelectModal onChange={(value) => setUf(value)} value={uf}/>
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
                                    onClick={() => console.log(name, uf, crm, ddd, phone, convenios)}
                                />
                            </div>
                        </form>
                    </Modal>
                    <div>
                        <Button
                            sx={{
                                color: '#e10e17', textAlign: 'center', fontFamily: 'Poppins', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', textDecoration: 'none', textTransform: 'none',
                            }}
                            onClick={handleDeletar}
                        >
                            Sair da Conta
                        </Button>
                    </div>
                </div>
                <div className="footer-container">
                    <Footer user="doctor"/>
                </div>
            </>)}
    </>);
};

export default VisualizacaoPerfilMedico;
