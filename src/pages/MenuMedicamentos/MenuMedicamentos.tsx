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

  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <div className="menu-medicamentos-container">
        <CardMedicamentos iconType="icon1" onClick={handleClickMyList} />
        <CardMedicamentos
          iconType="icon2"
          onClick={() => {
            console.log('agenda remedios');
          }}
        />
      </div>
      <Footer user="patient" />
    </>
  );
}



/*

> Aqui é um MenuMedicamento refatorado para testar o componente de Loading.

> Se quiser ver como está, para testar, use como está abaixo.
  Também serve como exemplo para como inserir nas outras telas,
  mas aqui é usado um ATRASO FAKE para poder testar o componente!

import { useState, useEffect } from 'react';
import { CardMedicamentos } from '../../components/CardMedicamentos/cardMedicamentos';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './MenuMedicamentos.css';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';
import LoadingOverlay from '../../components/Loading/Overlay';

export default function MenuMedicamentos() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const handleClickMyList = () => {
    navigate(ROUTES.LISTA_MEDICAMENTOS());
  };

  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <div className="menu-medicamentos-container">
          <CardMedicamentos iconType="icon1" onClick={handleClickMyList} />
          <CardMedicamentos
            iconType="icon2"
            onClick={() => {
              console.log('agenda remedios');
            }}
          />
        </div>
      )}
      <Footer user="patient" />
    </>
  );
}


*/