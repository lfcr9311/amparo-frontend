import Footer from '../../components/Footer/Footer'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import './InformacoesMedico.css'
import RefreshIcon from '../../assets/RefreshIcon.svg'
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca'
import { useState } from 'react'
import { ButtonSalmonPageInfo } from '../../components/ButtonSalmon/ButtonSalmonPageInfo'
import AddIcon from '../../assets/AddIcon.svg'

interface Informacao {
    titulo: string;
    link?: string | null;
    image?: string | null;
    description?: string | null;
    timestamp: string;
    id_doctor: string;
}

export default function InformacoesMedico() {

    const [informacaoMedica, setInformacaoMedica] = useState('');
    const handleInformacaoMedica = (newValue: string) => {
        setInformacaoMedica(newValue);
    }

    const handleRefresh = () => {
        window.location.reload();
    }

    const handleClick = () => { }

    const informacao: Informacao[] = [
        {
            titulo: "Posso tomar banho de chuva ?",
            timestamp: "2021-10-10T00:00:00.000Z",
            id_doctor: ""
        },
        {
            titulo: "Posso tomar banho de chuva ?",
            timestamp: "2021-10-10T00:00:00.000Z",
            id_doctor: ""
        },
        {
            titulo: "Posso tomar banho de chuva ?",
            timestamp: "2021-10-10T00:00:00.000Z",
            id_doctor: ""
        },
        {
            titulo: "Posso tomar banho de chuva ?",
            timestamp: "2021-10-10T00:00:00.000Z",
            id_doctor: ""
        },
        {
            titulo: "Posso tomar banho de chuva ?",
            timestamp: "2021-10-10T00:00:00.000Z",
            id_doctor: ""
        }

    ]


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
                        infoTitle={info.titulo}
                        dateAndDoctorInfo={`${calcularDiferencaDias(info.timestamp)} - ${info.id_doctor}`}
                        onClick={() => { }}
                    />
                ))}
            </div>
            <Footer user='doctor' />
        </>
    )
}