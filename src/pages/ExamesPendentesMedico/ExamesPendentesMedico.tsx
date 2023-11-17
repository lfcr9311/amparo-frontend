
import './ExamesPendentesMedico.css';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';

const title = '15/12/2023';
const description = 'Teste';

export default function ExamesPendentesMedico() {

  return (
    <>
      <HeaderHome title="Pendente" type="headerPage" />
      <p className='date-pendentes-title-medico-pendentes' >{title}</p>
      <p className='description-title-medico-pendentes'>Descrição</p>
      <p className='description-value-container-pendentes'>{description}</p>
      <Footer user="doctor" />
    </>
  );
}