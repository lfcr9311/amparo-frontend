import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { ROUTES } from '../../routes/constans';
import './ExamesPendentesVazio.css';
import HappyIcon from '../../assets/HappyIcon.svg';
import AddIcon from '../../assets/AddIcon.svg';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const ExamesPendentesVazio: React.FC = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(value);
  }, [value]);
  const handleClickAddButton = () => {
    navigate(ROUTES.EXAMES_REALIZADOS_VAZIO());
  };

  return (
    <>
      <div className="header">
        <HeaderHome value={value} setValue={setValue} type="headerTab" />
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
        <div className="texto2">{value === 0 ? 'zero' : 'um'}</div>
      </div>
      <Footer user="patient" />
    </>
  );
};

export default ExamesPendentesVazio;
