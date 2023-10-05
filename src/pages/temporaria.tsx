import ExamFilter from './../components/ExamFilter/examFilter';
import './temporaria.css';
const temporaria: React.FC = () => {
  return (
    <div>
      <ExamFilter
        tabs={[
          { label: '7 dias', content: <div> Exames dos últimos 7 dias </div> },
          { label: '30 dias', content: <div>Exames dos últimos 30 dias</div> },
          { label: 'Todos', content: <div>Todos os Exames</div> },
        ]}
      />
    </div>
  );
};

export default temporaria;
