import Descricao from '../../components/Descricao/Descricao';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './VisualizarExameMedico.css';
import { ButtonSalmon } from '../../components/ButtonSalmon/ButtonSalmon';
import { useLocation } from 'react-router-dom';

export default function VisualizarExameMedico() {
  // Na hora da integração com o backend pode usar
  //  const location = useLocation();
  //  const dateTitle = location.state.date;
  //  const descriptionValue = location.state.description;
  //  const dateValue = dateTitle.split('/').reverse().join('-');

  return (
    <>
      <HeaderHome title="Exame de Fulano" type="headerPage" />
      <div className="top-part">
        <p className="top-name">{'dateValue'}</p>
      </div>
      <div className="descript-part">
        <p className="descript-name">Descrição</p>
        <Descricao value={'description'} />
      </div>
      <div className="buttons-salmon-part">
        <ButtonSalmon
          label="Arquivos"
          icon={false}
          onClick={() => console.log('Arquivo')}
        />
        <ButtonSalmon
          label="Imagens"
          icon={false}
          onClick={() => console.log('Imagem')}
        />
      </div>
      <Footer user="patient" />
    </>
  );
}
