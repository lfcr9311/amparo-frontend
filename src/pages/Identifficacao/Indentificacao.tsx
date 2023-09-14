import React, { useState } from 'react';
import Textfield from '../../components/Header/Textfield';
import Button from '../../components/Header/Button';
import Logo from '../../assets/amparo.svg'; 
import './Identificacao.css';
import MenuButton from '../../components/MenuButton';
import MedicoIcon from '../../assets/MedicoIcon.png'
import PacienteIcon from '../../assets/PacienteIcon.png'



export const Identificacao: React.FC = () => {
    const HandleClickPaciente =()=>{
        console.log('Paciente');
        
    }
    const HandleClickMedico =()=>{
        console.log('Medico');
        
    }
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo Amparo" />
      <br />
      <a className="frase">Quem é você?</a>
      <MenuButton onClick={HandleClickPaciente} title={'Paciente'} image={PacienteIcon}></MenuButton>
      <MenuButton onClick={HandleClickMedico} title={'Médico'} image={MedicoIcon}></MenuButton>
    </div>
  );
}
