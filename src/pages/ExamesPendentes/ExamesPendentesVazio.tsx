import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Footer from "../../components/Footer/Footer";
import "./ExamesPendentesVazio.css";
import HappyIcon from "../../assets/HappyIcon.svg";
import AddIcon from "../../assets/AddIcon.svg";
import { useNavigate } from "react-router";

const ExamesPendentesVazio: React.FC = () => {
  const navigate = useNavigate();

  const handleClickAddButton = () =>{
    navigate('/perfil/exames-realizados-vazio')
  }

  return (
    <>
      <div className="header">
        <HeaderHome type="headerPage" title="Pendentes" />
      </div>
      <div className="exames-pendentes-vazio">
        <div className="texto">Nenhum exame pendente</div>
        <div className="icon1">
          <img src={HappyIcon} /> <br />
        </div>
        <div className="add-button">
          <button onClick={handleClickAddButton} className="botao">
            <img src={AddIcon} />
          </button>
        </div>
        <div className="texto2">Adicionar</div>
      </div>
      <Footer/>
    </>
  );
};

export default ExamesPendentesVazio;
