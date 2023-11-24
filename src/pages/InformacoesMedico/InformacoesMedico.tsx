import Footer from '../../components/Footer/Footer'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import './InformacoesMedico.css'
import RefreshIcon from '../../assets/RefreshIcon.svg'
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca'
import { useEffect, useState } from 'react'
import { ButtonSalmonPageInfo } from '../../components/ButtonSalmon/ButtonSalmonPageInfo'
import AddIcon from '../../assets/AddIcon.svg'
import { fetchInformacao, getCurrentUserId } from '../../utils/apiService'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/constans'

interface Informacao {
    id: string;
    title?: string;
    link?: string;
    image?: string;
    description?: string;
    createdAt: string;
    doctorId: string;
    name: string;
}

export default function InformacoesMedico() {
    const navigate = useNavigate();
    const [informacaoMedica, setInformacaoMedica] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const handleInformacaoMedica = (newValue: string) => {
        setInformacaoMedica(newValue);
    }

    const handleRefresh = () => {
        fetchData();
    }

    const handleClick = () => { 
        navigate(ROUTES.ADICIONAR_INFORMACAO_MEDICA())
    }

    const [informacao, setInformacao] = useState<Informacao[]>([]);
    const [currentUserId, setCurrentUserId] = useState<string>('');

    useEffect(() => {
        setCurrentUserId(getCurrentUserId())
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const info = await fetchInformacao();
            setInformacao(info);
            console.log(info)
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    function calcularDiferencaDias(timestamp: string): string {
        return `Publicado em: ${new Date(timestamp).toLocaleDateString('pt-BR')}`
    }

    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />
            {isLoading && <CircularProgress color='error' />}
            {!isLoading && (
                <>
                    <button className='refresh-page' onClick={handleRefresh}>
                        <img src={RefreshIcon} alt="refresh-icon" />
                        <p className="refresh-text">Atualizar Página</p>

                    </button>
                    <button className='add-info' onClick={handleClick}>
                        <img className='add-info-image' src={AddIcon} />
                    </button>
                    <div className='search-info'>
                        <FiltroBusca value={informacaoMedica} onChange={handleInformacaoMedica} />
                    </div>
                    <div className='container-info'>
                        {informacao.map((info, index) => (
                            <ButtonSalmonPageInfo
                                key={index}
                                infoTitle={info.title === undefined ? 'Sem título' : info.title}
                                dateAndDoctorInfo={`${calcularDiferencaDias(info.createdAt)} - ${info.name}`}
                                onClick={() => {
                                    console.log('Editando')
                                    if(currentUserId == info.doctorId) {
                                        navigate(ROUTES.ADICIONAR_INFORMACAO_MEDICA(), {
                                            state: {
                                                id: info.id,
                                                title: info.title,
                                                description: info.description,
                                                link: info.link
                                            }
                                        })   
                                    } else {
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
                                }
                            />
                        ))}
                    </div>
                </>
            )}
            <Footer user='doctor' />
        </>
    )
}