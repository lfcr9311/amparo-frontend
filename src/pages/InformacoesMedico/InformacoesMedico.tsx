import Footer from '../../components/Footer/Footer'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import './InformacoesMedico.css'
import RefreshIcon from '../../assets/RefreshIcon.svg'
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca'
import { useEffect, useState } from 'react'
import { ButtonSalmonPageInfo } from '../../components/ButtonSalmon/ButtonSalmonPageInfo'
import AddIcon from '../../assets/AddIcon.svg'
import { fetchInformacao } from '../../utils/apiService'
import { CircularProgress } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/constans'

interface Informacao {
    title?: string;
    link?: string;
    image?: string;
    description?: string;
    createdAt?: string;
    name: string;
}

interface InformationUpdate {
    title?: string;
    link?: string;
    description?: string;
    update?: boolean;
}

export default function InformacoesMedico() {
    const location = useLocation();
    const navigate = useNavigate();
    const information = location.state as InformationUpdate;
    const [informacaoMedica, setInformacaoMedica] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const handleInformacaoMedica = (newValue: string) => {
        setInformacaoMedica(newValue);
    }

    const handleRefresh = () => {
        fetchData();
    }

    const handleClick = () => { }

    const [informacao, setInformacao] = useState<Informacao[]>([]);

    useEffect(() => {
        if (!information.update) {
            fetchData();
        } else {
            updateData();
            fetchData();
        }
    }, [])

    const updateData = async () => {
        console.log('Updating data')
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            console.log('Fetching data')
            const info = await fetchInformacao();
            setInformacao(info);
            console.log(info)
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    function calcularDiferencaDias(timestamp: string | undefined): string {
        if (timestamp === undefined) return ('Sem data');
        const agora = new Date();
        const dataPostagem = new Date(timestamp);
        const diferencaEmMilissegundos = agora.getTime() - dataPostagem.getTime();

        const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

        if (diferencaEmDias > 0) {
            if (diferencaEmDias <= 7) {
                return `${diferencaEmDias} dia${diferencaEmDias > 1 ? 's' : ''} atrás`;
            } else {
                const dia = dataPostagem.getDate();
                const mes = dataPostagem.getMonth() + 1;
                const ano = dataPostagem.getFullYear();
                const dataFormatada = `${dia}/${mes}/${ano}`;
                return dataFormatada;
            }
        } else {
            const diferencaEmHoras = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60));
            return `${diferencaEmHoras} hora${diferencaEmHoras > 1 ? 's' : ''} atrás`;
        }
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
                                    navigate(ROUTES.ADICIONAR_INFORMACAO_MEDICA(), {
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
                </>
            )}
            <Footer user='doctor' />
        </>
    )
}