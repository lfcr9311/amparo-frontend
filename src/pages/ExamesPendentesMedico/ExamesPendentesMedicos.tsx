import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import AddCircleIcon from '../../assets/addCircle.svg';
import './ExamesPendentesMedico.css';
import { useState } from 'react';

export default function ExamesPendentes() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
      <>
        <HeaderHome type="headerTab" title="" />
        <div className="content-header">
          <p className="title-exames-page-title">Exames</p>
          <button
            className="add-button-icon"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <img src={AddCircleIcon} className="add-circle-icon" />
          </button>
        </div>
        <div className="cards-exames">
          {}
        </div>
        <Footer user="doctor" />
      </>
    );
  }