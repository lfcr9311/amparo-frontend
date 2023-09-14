import React from 'react';
import './Home.css';

import HeaderHome from '../../components/HeaderHome/HeaderHome';
import MenuButton from '../../components/MenuButton';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import ExamesImage from '../../assets/ExamesIcon.png'
import logoLogin from "../../assets/amparo.svg"

const Home = () => {
  const navigate = useNavigate();

  const handleClickExames = () => {
    navigate('/login');
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
  return (
    <div className="container-home">
      <HeaderHome title='Olá Fulano'></HeaderHome>
      <div className='body'>
      <div className='sub-header'>

      <img style={{width: "25px", height:"32px" }} src={logoLogin} alt= 'Logo Amparo'></img>
      <a className='logo-title'>Amparo</a>
      </div>
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
