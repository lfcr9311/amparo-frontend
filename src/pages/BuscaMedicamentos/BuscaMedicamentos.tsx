import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './BuscaMedicamentos.css';
import ExamFilter from '../../components/ExamFilter/examFilter';
import { useState } from 'react';
import CardMedicine from '../../components/CardMedicine/CardMedicine';
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca';


interface Medicamento {
    label: string;
    dosagem?: string;
    frequencia?: string;
    dataFinal?: string | "Uso contínuo";
}

export default function BuscaMedicamentos() {
    const [findMedicine, setMedicine] = useState("");
    const [tabNumber, setTabNumber] = useState(0);

    const handleMed = (newValue: string) => {
        setMedicine(newValue);
        console.log(newValue);
    }

    const medicamentos: Medicamento[] = [
        { label: "Remedio 1" }
    ];
    return (
        <>
            <HeaderHome title="Medicamentos" type="headerPage" />
            <p className='busca-medicamento-title'>Remedios</p>
            <div className='search-div-medicamentos'>
                <FiltroBusca
                    value={findMedicine}
                    onChange={handleMed}
                />
            </div>
            <div className='filter-div-medicamentos'>
                <ExamFilter
                    tabs={[
                        { content: '', label: 'HIV' },
                        { content: '', label: 'Outros' },
                        { content: '', label: 'Todos' },
                    ]}
                    value={tabNumber}
                    setValue={setTabNumber}
                />
            </div>
            <div className="remedios-div">
                {medicamentos.map((medicamento, index) => (
                    <CardMedicine
                        key={index}
                        exam={medicamento.label}
                        onChange={() => console.log(medicamento.label)}
                    />
                )).filter((medicamento) => medicamento.props.exam.includes(findMedicine))}
            </div>
            <Footer user="patient" />
        </>
    );
}