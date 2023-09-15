import React from 'react';
import './HomePaciente.css';

import HeaderHome from '../../components/HeaderHome/HeaderHome';
import MenuButton from '../../components/MenuButton';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import ExamesImage from '../../assets/ExamesIcon.png'
import consultasIcon from '../../assets/consultasIcon.png'
import medicamentosIcon from '../../assets/medicamentosIcon.png'
import lupaIcon from '../../assets/lupaIconcon.png'
import pacientesIcon from '../../assets/pacientesIcon.png'
import logoLogin from "../../assets/amparo.svg"

const HomePaciente = () => {
  const navigate = useNavigate();
  const userIsPatient = true;
  const handleClickExames = () => {
    navigate('/perfil/exames-pendentes-vazio');
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
  
  return (
    <div className="container-home">
      <HeaderHome title='Olá, Fulano!'></HeaderHome>
      <div className='body'>
      <div className='sub-header'>

      <img style={{width: "25px", height:"32px" }} src={logoLogin} alt= 'Logo Amparo'></img>
      <a className='logo-title'>Amparo</a>
      </div>
      <div className='button-container'>
      <div className='menu-button'>

      <MenuButton  title= {userIsPatient? 'Exames' : 'Pacientes'} image={userIsPatient ? ExamesImage : pacientesIcon} onClick={handleClickExames} />
      </div>
      <MenuButton title= 'Medicamentos' image={medicamentosIcon} onClick={handleClickMedicamentos} />
      </div>
      <div className='button-container'>
      <div className='menu-button'>
      <MenuButton title= 'Informações' image={lupaIcon} onClick={handleClickInfo} />
      </div>
      <MenuButton title= 'Consultas' image={consultasIcon} onClick={handleClickConsutas} />
      </div>
      </div>
    <Footer/>
    </div>
  );
};

export default HomePaciente;
