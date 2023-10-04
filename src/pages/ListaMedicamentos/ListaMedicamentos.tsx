import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './ListaMedicamentos.css';
import CardRemedio from '../../components/CardRemedio/CardRemedio';
import CustomButton from '../../components/Button/Button';

export default function ListaMedicamentos() {
  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <p className="title-page">Meus Remedios</p>
      <div className="meus-remedios-container">
        <CardRemedio
          label="Remedio 1"
          onClick={() => console.log('Remedio 1')}
        />
        <CardRemedio
          label="Remedio 2"
          onClick={() => console.log('Remedio 2')}
        />
        <CardRemedio
          label="Remedio 3"
          onClick={() => console.log('Remedio 3')}
        />
        <CardRemedio
          label="Remedio 4"
          onClick={() => console.log('Remedio 4')}
        />
        <CardRemedio
          label="Remedio 5"
          onClick={() => console.log('Remedio 5')}
        />
        <CardRemedio
          label="Remedio 6"
          onClick={() => console.log('Remedio 6')}
        />
      </div>
      <CustomButton
        label="Adicionar"
        variant="contained"
        onClick={() => console.log('clicou')}
      />
      <Footer user="patient" />
    </>
  );
}
