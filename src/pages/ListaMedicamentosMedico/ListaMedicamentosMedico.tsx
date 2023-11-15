import './ListaMedicamentosMedico.css';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import CardRemedio from '../../components/CardRemedio/CardRemedio';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMedicamentosPaciente } from '../../utils/apiService';

interface Medicamento {
    label: string;
    dosagem?: string;
    frequencia?: string;
    dataFinal?: string | "Uso contínuo";
}
export default function ListaMedicamentosMedico() {
    const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
    const location = useLocation();
    const paciente = location.state.paciente;
    const title = `Medicamentos de ${paciente.name}`;
    useEffect(() => {
        getMedicamentosPaciente().then((response) => {
            setMedicamentos(response.data);
        }
        )
    }, [medicamentos]);
    return (
        <>
            <HeaderHome type='headerPage' title='Medicamentos' />
            <p className='medicine-paciente-name'>{title}</p>
            <div className="medicine-list-container">
                {medicamentos?.length === 0 ? <p className="no-medicines">Nenhum medicamento cadastrado</p> :
                    medicamentos?.map((medicamento, index) => (
                        <CardRemedio
                            key={index}
                            label={medicamento.label}
                            onClick={() => console.log(medicamento.label)}
                        />
                    ))}
            </div>
            <Footer user='doctor' />
        </>
    )
}