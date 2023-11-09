import './ListaMedicamentosMedico.css';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import CardRemedio from '../../components/CardRemedio/CardRemedio';

interface Medicamento {
    label: string;
    dosagem?: string;
    frequencia?: string;
    dataFinal?: string | "Uso contínuo";
}

export default function ListaMedicamentosMedico() {
    const title = 'Medicamentos de fulano';

    const medicamentos: Medicamento[] = [
        { label: "Remedio 1" },
        { label: "Remedio 2" },
        { label: "Remedio 3" },
        { label: "Remedio 4" },
        { label: "Remedio 5" },
        { label: "Remedio 6" }
    ];
    return (
        <>
            <HeaderHome type='headerPage' title='Medicamentos' />
            <p className='medicine-doctor-title'>{title}</p>
            <div className="medicine-list-container">
                {medicamentos.map((medicamento, index) => (
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