import Footer from '../../components/Footer/Footer'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import './InformacoesPaciente.css'
import RefreshIcon from '../../assets/RefreshIcon.svg'
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca'
import { useEffect, useState } from 'react'
import { ButtonSalmonPageInfo } from '../../components/ButtonSalmon/ButtonSalmonPageInfo'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/constans'
import { getAllInformations } from '../../utils/apiService'

interface Informacao {
    id?: string
    title?: string;
    link?: string;
    image?: string;
    doctorId: string;
    description?: string;
    createdAt: string;
}

export default function InformacoesPaciente() {
    const navigate = useNavigate();
    const [informacaoMedica, setInformacaoMedica] = useState('');
    const [posts, setPosts] = useState<Informacao[]>([]);
    const handleInformacaoMedica = (newValue: string) => {
        setInformacaoMedica(newValue);
    }

    const handleRefresh = () => {
        window.location.reload();
    }

    useEffect(() => {
        getAllInformations()
        .then(data => {
            setPosts(data)
        })
    })

    function calcularDiferencaDias(timestamp: string): string {
        return `Publicado em: ${new Date(timestamp).toLocaleDateString('pt-BR')}`
    }

    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />
            <button className='refresh-page-paciente' onClick={handleRefresh}>
                <img src={RefreshIcon} alt="refresh-icon" />
                <p className="refresh-text-paciente">Atualizar Página</p>
            </button>
            <div className='search-info-paciente'>
                <FiltroBusca value={informacaoMedica} onChange={handleInformacaoMedica} />
            </div>
            <div className='container-info-paciente'>
            {posts.map((info, index) => (
                            <ButtonSalmonPageInfo
                                key={index}
                                infoTitle={info.title === undefined ? 'Sem título' : info.title}
                                dateAndDoctorInfo={`${calcularDiferencaDias(info.createdAt)} - ${info.title}`}
                                onClick={() => {
                                    navigate(ROUTES.INFORMACAO_MEDICA_ESPECIFICA(), {
                                        state: {
                                            title: info.title,
                                            description: info.description,
                                            link: info.link,
                                            update: false
                                        }
                                    })
                                }
                                }
                            />
                        ))}
            </div>
            <Footer user='doctor' />
        </>
    )
}
