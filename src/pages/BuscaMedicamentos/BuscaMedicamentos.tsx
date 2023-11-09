import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './BuscaMedicamentos.css';
import ExamFilter from '../../components/ExamFilter/examFilter';
import TextFieldRemedios from '../../components/TextFieldRemedios/TextFieldRemedios';
import { useState } from 'react';
import CardMedicine from '../../components/CardMedicine/CardMedicine';


interface Medicamento {
    label: string;
    dosagem?: string;
    frequencia?: string;
    dataFinal?: string | "Uso contínuo";
}

export default function BuscaMedicamentos() {
    const [findMedicine, setMedicine] = useState("");
    
    const medicamentos: Medicamento[] = [
        { label: "Remedio 1" }
    ];
    return (
        <>
            <HeaderHome title="Medicamentos" type="headerPage" />
           <p className='busca-medicamento-title'>Remedios</p>
            <div className='search-div-medicamentos'>
                <TextFieldRemedios
                    value={findMedicine}
                    onChange={(e) => setMedicine(e.target.value)}
                />
            </div>
            <div className='filter-div-medicamentos'>
                <ExamFilter
                    tabs={[
                        { content: '', label: 'HIV' },
                        { content: '', label: 'Outros' },
                        { content: '', label: 'Todos' },
                    ]}
                />
            </div>
            <div className="remedios-div">
            {medicamentos.map((medicamento, index) => (
                <CardMedicine
                    key={index}
                    exam={medicamento.label}
                    onChange={() => console.log(medicamento.label)}
                />
            ))}
            </div>
            <Footer user="patient" />
        </>
    );
}