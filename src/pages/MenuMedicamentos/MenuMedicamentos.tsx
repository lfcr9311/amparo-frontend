import { CardMedicamentos } from '../../components/CardMedicamentos/cardMedicamentos';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './MenuMedicamentos.css';

export default function MenuMedicamentos() {
  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <div className="menu-medicamentos-container">
        <CardMedicamentos
          iconType="icon1"
          onClick={() => {
            console.log('minha lista');
          }}
        />
        <CardMedicamentos
          iconType="icon2"
          onClick={() => {
            console.log('agenda remedios');
          }}
        />
      </div>
      <Footer />
    </>
  );
}
