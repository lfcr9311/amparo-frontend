import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './BuscaMedicamentos.css';
import ExamFilter from '../../components/ExamFilter/examFilter';
import { useEffect, useState } from 'react';
import CardMedicine from '../../components/CardMedicine/CardMedicine';
import FiltroBusca from '../../components/FiltroBusca/FiltroBusca';
import { getAllMedicines } from '../../utils/apiService';


interface Medicamento {
    id: number;
    label: string;
    dosagem?: string;
    frequencia?: string;
    dataFinal?: string | "Uso contínuo";
}

export default function BuscaMedicamentos() {
    const [medicamentos, setMedicamentos] = useState<any[]>([])
    const [medicinesApi, setMedicinesApi] = useState<any[]>([])
    const [findMedicine, setMedicine] = useState("");
    const [tabNumber, setTabNumber] = useState(0);

    const handleMed = (newValue: string) => {
        setMedicine(newValue);
        console.log(newValue);
    }

    const handleChangeTab = (tab:number) => {
        setTabNumber(tab)
        if (tab == 0) {
            setMedicamentos(medicinesApi.slice(0,42))
        } else if (tab == 2) {
            setMedicamentos(medicinesApi.slice(42))
        } else {
            setMedicamentos(medicinesApi.map((it:any) => ({id:it.id, label: it.name})))
        }
    }

    useEffect(() => {
        getAllMedicines().then((data) => {
            const allMedicines = data.map((it:any) => ({id:it.id, label: it.name}))
            setMedicinesApi(allMedicines)
            setMedicamentos(medicinesApi)
            handleChangeTab(tabNumber)
        })
    }, [])

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