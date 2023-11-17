import Footer from '../../components/Footer/Footer'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import './InformacoesPaciente.css'
import RefreshIcon from '../../assets/RefreshIcon.svg'
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca'
import { useEffect, useState } from 'react'
import { ButtonSalmonPageInfo } from '../../components/ButtonSalmon/ButtonSalmonPageInfo'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/constans'
import { getALlInformations } from '../../utils/apiService'

interface Informacao {
    title?: string;
    link?: string;
    image?: string;
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
        getALlInformations()
        .then(data => {
            setPosts(data)
        })
    })


    function calcularDiferencaDias(timestamp: string): string {
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
                                    console.log('Editando')
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
