import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './ExamesRealizadosVazio.css';
import SadIcon from '../../assets/SadIcon.svg';
import AddIcon from '../../assets/AddIcon.svg';
import { useNavigate } from 'react-router';

const ExamesPacienteVazio: React.FC = () => {
  const navigate = useNavigate();

  const handleClickAddButton = () => {
    navigate('/perfil/exames-pendentes-vazio');
  };
  return (
    <>
      <div className="header">
        <HeaderHome type="headerPage" title="Realizados" />
      </div>
      <div className="exames-paciente-vazio">
        <div className="texto">Nenhum exame realizado</div>
        <div className="icon1">
          <img src={SadIcon} /> <br />
        </div>
        <div className="add-button">
          <button onClick={handleClickAddButton} className="botao">
            <img src={AddIcon} />
          </button>
        </div>
        <div className="texto2">Adicionar</div>
      </div>
      <Footer />
    </>
  );
};

export default ExamesPacienteVazio;
