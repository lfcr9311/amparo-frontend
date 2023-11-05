import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import AddCircleIcon from '../../assets/addCircle.svg';
import './ExamesPendentesMedico.css';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import Description from '../../components/Modal/Components/Description/Description';
import CustomButton from '../../components/Button/Button';

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
        <Modal isOpen={isModalOpen} isClose={() => setIsModalOpen(!isModalOpen)}>
          <div className="div-date-modal">
            <DateModal />
          </div>
          <div className="description-button-modal">
  
            <Description onChange={() => console.log()} />
            <CustomButton
              variant="contained"
              label="Salvar"
              onClick={() => console.log(isModalOpen)}
            />
          </div>
        </Modal>
        <Footer user="patient" />
      </>
    );
  }