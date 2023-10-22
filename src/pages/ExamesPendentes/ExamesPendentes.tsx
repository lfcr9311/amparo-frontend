import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import AddCircleIcon from '../../assets/AddCircle.svg';
import './ExamesPendentes.css';
import { useState } from 'react';
import ExamListItem from '../../components/ListItem/ListItem';
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
        <ExamListItem date="23/02/18" exam="Hemograma" />
        <ExamListItem date="23/02/18" exam="TGO" />
        <ExamListItem date="23/02/18" exam="TGP" />
        <ExamListItem date="23/02/18" exam="Testosterona" />
        <ExamListItem date="23/02/18" exam="Calcio" />
        <ExamListItem date="23/02/18" exam="Potássio" />
        <ExamListItem date="23/02/18" exam="Vitamina D" />
        <ExamListItem date="23/02/18" exam="Vitamina B12" />
        <ExamListItem date="23/02/18" exam="Glicose" />
        <ExamListItem date="23/02/18" exam="Leucócitos" />
      </div>
      <Modal isOpen={isModalOpen} isClose={() => setIsModalOpen(!isModalOpen)}>
        <div className="div-date-modal">
          <DateModal onChange={function (value: string): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
        <div className="description-button-modal">
          <Description onChange={function (value: string): void {
            throw new Error('Function not implemented.');
          } } />
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
