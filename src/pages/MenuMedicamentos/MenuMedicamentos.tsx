import { CardMedicamentos } from '../../components/CardMedicamentos/cardMedicamentos';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './MenuMedicamentos.css';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';

export default function MenuMedicamentos() {
  const navigate = useNavigate();

  const handleClickMyList = () => {
    navigate(ROUTES.LISTA_MEDICAMENTOS());
  };

  const handleClickAgendaMedicamentos = () => {
    navigate(ROUTES.AGENDA_REMEDIOS());
  };

  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <div className="menu-medicamentos-container">
        <CardMedicamentos iconType="icon1" onClick={handleClickMyList} />
        <CardMedicamentos
          iconType="icon2"
          onClick={handleClickAgendaMedicamentos}
        />
      </div>
      <Footer user="patient" />
    </>
  );
}
