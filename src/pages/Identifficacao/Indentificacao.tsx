import React, { useState } from 'react';
import Logo from '../../assets/amparo.svg'; 
import './Identificacao.css';
import MenuButton from '../../components/MenuButton';
import MedicoIcon from '../../assets/MedicoIcon.png'
import PacienteIcon from '../../assets/PacienteIcon.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';



export const Identificacao: React.FC = () => {
    const navigate = useNavigate();

    const HandleClickPaciente =()=>{
        console.log('Paciente');
        navigate('/cadastro/paciente')
        
    }
    const HandleClickMedico =()=>{
        console.log('Medico');
        navigate('/cadastro/medico')
        
    }
    const handleGoBack = () => {
        navigate('/login')
        } 
  return (
    <div className="identificacao-container">
      <img src={Logo} alt="Logo Amparo" />
      <br />
      <a className="frase">Quem é você?</a>
      <div className='buttons-group'>
        <MenuButton onClick={HandleClickPaciente} title={'Paciente'} image={PacienteIcon}></MenuButton>
        <MenuButton onClick={HandleClickMedico} title={'Médico'} image={MedicoIcon}></MenuButton>
      </div>
      <div className='go-back' onClick={handleGoBack}>
        <ArrowBackIcon  style={{width:"28px", height:"28px"}}/>
        <a>Voltar</a>
      </div>
    </div>
  );
}
