import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import ExamListItem from '../../components/ListItem/ListItem';
import ExamFilter from '../../components/ExamFilter/examFilter';
import { format } from 'date-fns';
import './AcessarExamePaciente.css';
import { useState } from 'react';

// @ts-ignore
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

    const examesPendentes: Exames[] = [];
    const examesRealizados: Exames[] = [
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        }, 
        {    
            id: 'c39cbd2f-0e01-4b28-b825-471daa74cabc',
            description: 'Exame mensal Fevereiro',
            examDate: '2024-02-16T04:20:00',
            is_done: false, 
            id_patient: '893d1d3d-fb61-45fa-8454-212362754d04',
            file: null,
            image: null,
        },  
    ];
    const title = "Exames de Fulano";

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