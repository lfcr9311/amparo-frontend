import Footer from '../../components/Footer/Footer'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import './InformacoesPaciente.css'
import RefreshIcon from '../../assets/RefreshIcon.svg'
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca'
import { useState } from 'react'
import { ButtonSalmonPageInfo } from '../../components/ButtonSalmon/ButtonSalmonPageInfo'

interface Informacao {
    titulo: string;
    link?: string | null;
    image?: string | null;
    description?: string | null;
    timestamp: string;
    id_doctor: string;
}

export default function InformacoesPaciente() {

    const [informacaoMedica, setInformacaoMedica] = useState('');
    const handleInformacaoMedica = (newValue: string) => {
        setInformacaoMedica(newValue);
    }

    const handleRefresh = () => {
        window.location.reload();
    }

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
            <button className='refresh-page-paciente' onClick={handleRefresh}>
                <img src={RefreshIcon} alt="refresh-icon" />
                <p className="refresh-text-paciente">Atualizar Página</p>
            </button>
            <div className='search-info-paciente'>
                <FiltroBusca value={informacaoMedica} onChange={handleInformacaoMedica} />
            </div>
            <div className='container-info-paciente'>
                {informacao.map((info, index) => (
                    <ButtonSalmonPageInfo
                        key={index}
                        infoTitle={info.titulo}
                        dateAndDoctorInfo={`${calcularDiferencaDias(info.timestamp)} - ${info.id_doctor}`}
                        onClick={() => {}}
                    />
                ))}
            </div>
            <Footer user='doctor' />
        </>
    )
}