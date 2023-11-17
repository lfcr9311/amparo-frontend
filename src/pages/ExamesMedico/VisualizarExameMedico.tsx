import Descricao from '../../components/Descricao/Descricao';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './VisualizarExameMedico.css';
import { ButtonSalmon } from '../../components/ButtonSalmon/ButtonSalmon';
import { useLocation } from 'react-router-dom';

interface Exame{
  description: string;
  file: string;
  image: string;
}

export default function VisualizarExameMedico() {
  const location = useLocation();
  const exame = location.state.exame as Exame;
  const name = location.state.name.split(' ')[0];
  const dateTitle = location.state.date;

  const handleArquivosClick = () => {
    if (exame.file) {
      window.location.href = exame.file;
    } else {
      console.warn('PDF não está disponível');
    }
  };

  const handleImagensClick = () => {
    console.log(exame.image);
    if (exame.image) {
      window.location.href = exame.image;
    } else {
      console.warn('Imagem não está disponível');
    }
  };
  
  return (
    <>
      <HeaderHome title={`Exame de ${name}`} type="headerPage" />
      <div className="top-part">
        <p className="top-name">{dateTitle}</p>
      </div>
      <div className="descript-part">
        <p className="descript-name">Descrição</p>
        <Descricao value={exame.description} />
      </div>
      <div className="buttons-salmon-part">
        <ButtonSalmon
          label="Arquivos"
          icon={false}
          onClick={handleArquivosClick}
        />
        <ButtonSalmon
          label="Imagens"
          icon={false}
          onClick={handleImagensClick}
        />
      </div>
      <Footer user="patient" />
    </>
  );
}
