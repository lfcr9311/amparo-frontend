import React from 'react';
import './Home.css';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import MenuButton from '../../components/MenuButton';
import Footer from '../../components/Footer';
import { Route } from '@mui/icons-material';
import ExamesImage from '../../assets/ExamesIcon.png'
import Logo from '../../assets/amparo.svg'

const handleClickExames = () => {
  console.log("Cheguei aqui!!!");
}

const handleClickMedicamentos = () => {
  console.log("Cheguei aqui!!!");
}

const handleClickInfo = () => {
  console.log("Cheguei aqui!!!");
}

const handleClickConsutas = () => {
  console.log("Cheguei aqui!!!");
}
const handleCLick = () => {
  console.log("Test");
}
const Home = () => {
  return (
    <div className="container">
      <HeaderHome title='Olá Fulano'></HeaderHome>
      <div className='body'>

      <a className='logoTitle'>Amparo</a>
      <div className='button-container'>
      <div className='menu-button'>

      <MenuButton  title= 'Exames' image={ExamesImage} onClick={handleClickExames} />
      </div>
      <MenuButton title= 'Medicamentos' image={ExamesImage} onClick={handleClickMedicamentos} />
      </div>
      <div className='button-container'>
      <div className='menu-button'>
      <MenuButton title= 'Informações' image={ExamesImage} onClick={handleClickInfo} />
      </div>
      <MenuButton title= 'Consultas' image={ExamesImage} onClick={handleClickConsutas} />
      </div>
      </div>
    <Footer onClickChat={handleCLick} onClickHome={handleCLick} onClickPerfil={handleCLick} ></Footer>
    </div>
  );
};

export default Home;
