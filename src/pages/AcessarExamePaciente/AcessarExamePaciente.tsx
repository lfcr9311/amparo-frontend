import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import ExamListItem from '../../components/ListItem/ListItem';
import ExamFilter from '../../components/ExamFilter/examFilter';
import { format } from 'date-fns';
import './AcessarExamePaciente.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


interface Exames {
    id: string;
    description: string;
    examDate: string;
    is_done: boolean;
    id_patient: string;
    file: string | null;
    image: string | null;
}

export default function AcessarExamePaciente() {
    const [value, setValue] = useState(0);
    const [filterValue, setFilterValue] = useState(0);
    const location = useLocation();
    const paciente = location.state.paciente
    const examesPendentes: Exames[] = [];
    const examesRealizados: Exames[] = [];
    const title = `Exames de ${paciente.name}`;

    return (
        <>
            <HeaderHome type="headerTab" value={value} setValue={setValue} />
            {value === 0 ? (
                <div className='body-exames-medico'>
                    <p className="title-exames-pendentes-medico">{title}</p>
                    <div className="cards-exames-pendentes-medico">
                        {examesPendentes.map((exam, index) => (
                            <ExamListItem
                                key={index}
                                onClickPermisson={false}
                                date={format(new Date(exam.examDate), 'dd/MM/yyyy')}
                                exam={exam.description}
                                description={exam.description}
                                fileImage={exam.image}
                                filePdf={exam.file}
                                type={'pendente'}
                                id={exam.id}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className='body-exames-medico'>
                    <p className="title-exames-realizados-medico">{title}</p>
                    <div className='filter-div'>
                        <ExamFilter
                            tabs={[
                                { content: '', label: '30 dias' },
                                { content: '', label: '6 meses' },
                                { content: '', label: 'Todos' },
                            ]}
                            value={filterValue}
                            setValue={setFilterValue}
                        />
                    </div>
                    <div className="cards-exames-realizados-medico">
                        {examesRealizados.map((exam, index) => (
                            <ExamListItem
                                onClickPermisson={false}
                                key={index}
                                date={format(new Date(exam.examDate), 'dd/MM/yyyy')}
                                exam={exam.description}
                                description={exam.description}
                                fileImage={exam.image}
                                filePdf={exam.file}
                                type={'realizado'}
                                id={exam.id}
                            />
                        ))}
                    </div>
                </div>
            )}
            <Footer user="doctor" />
        </>
    )
}