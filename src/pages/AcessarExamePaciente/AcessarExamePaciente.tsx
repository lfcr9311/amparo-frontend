import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import ExamListItem from '../../components/ListItem/ListItem';
import ExamFilter from '../../components/ExamFilter/examFilter';
import { format, parse, set } from 'date-fns';
import './AcessarExamePaciente.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPacienteExames } from '../../utils/apiService';
import { textAlign } from '@mui/system';
import { ROUTES } from '../../routes/constans';


interface Exames {
    id: string;
    description: string;
    examDate: string;
    isDone: boolean;
    idPatient: string;
    file: string | null;
    image: string | null;
}

export default function AcessarExamePaciente() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const [filterValue, setFilterValue] = useState(0);
    const location = useLocation();
    const paciente = location.state.paciente
    const [examesPendentes, setExamesPendentes] = useState<Exames[]>([]);
    const [examesRealizados, setExamesRealizados] = useState<Exames[]>([]);
    const title = `Exames de ${paciente.name}`;

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await getPacienteExames(paciente.id);
        const exames = response.data;
        exames.forEach((exame: Exames) => {
            if (exame.isDone) {
                setExamesRealizados((realizados) => [...realizados, exame]);
            } else {
                setExamesPendentes((pendentes) => [...pendentes, exame]);
            }   
        });
    }
    return (
        <>
            <HeaderHome type="headerTab" value={value} setValue={setValue} />
            {value === 0 ? (
                <div className='body-exames-medico'>
                    <p className="title-exames-pendentes-medico">{title}</p>
                    <div className="cards-exames-pendentes-medico">
                        {examesPendentes.length > 0 ? examesPendentes.map((exam, index) => (
                            <ExamListItem
                                key={index}
                                onClickPermisson={true}
                                onClick={() => navigate(ROUTES.VISUALIZA_EXAMES_MEDICO(), {state: {exame: exam, name: paciente.name}})}
                                date={format(new Date(exam.examDate), 'dd/MM/yyyy')}
                                exam={exam.description}
                                description={exam.description}
                                fileImage={exam.image}
                                filePdf={exam.file}
                                type={'pendente'}
                                id={exam.id}
                            />
                        )).filter((exame) => {
                            const examDate = parse(exame.props.date, 'dd/MM/yyyy', new Date());
                            const currentDate = new Date();
                            const thirtyDaysAgo = new Date();
                            const sixtieDaysAgo = new Date();
                            thirtyDaysAgo.setDate(currentDate.getDate() - 30);
                            sixtieDaysAgo.setDate(currentDate.getDate() - 180);
          
                            if (filterValue == 0)
                              return examDate >= thirtyDaysAgo;
                            else if (filterValue == 1)
                              return examDate >= sixtieDaysAgo;
                            else return true
                          }) : (
                            <span>Sem exames pendentes</span>
                        )}
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
                        {examesRealizados.length > 0 ? examesRealizados.map((exam, index) => (
                            <ExamListItem
                                onClickPermisson={true}
                                onClick={() => navigate(ROUTES.VISUALIZA_EXAMES_MEDICO(), {state: {exame: exam, name: paciente.name, date: format(new Date(exam.examDate), 'dd/MM/yyyy')}})}
                                key={index}
                                date={format(new Date(exam.examDate), 'dd/MM/yyyy')}
                                exam={exam.description}
                                description={exam.description}
                                fileImage={exam.image}
                                filePdf={exam.file}
                                type={'realizado'}
                                id={exam.id}
                            />
                        )).filter((exame) => {
                            const examDate = parse(exame.props.date, 'dd/MM/yyyy', new Date());
                            const currentDate = new Date();
                            const thirtyDaysAgo = new Date();
                            const sixtieDaysAgo = new Date();
                            thirtyDaysAgo.setDate(currentDate.getDate() - 30);
                            sixtieDaysAgo.setDate(currentDate.getDate() - 180);
          
                            if (filterValue == 0)
                              return examDate >= thirtyDaysAgo;
                            else if (filterValue == 1)
                              return examDate >= sixtieDaysAgo;
                            else return true
                          }) : (
                            <span>Sem exames realizados</span>
                        )}
                    </div>
                </div>
            )}
            <Footer user="doctor" />
        </>
    )
}