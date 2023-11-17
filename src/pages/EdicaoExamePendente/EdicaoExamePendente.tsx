import { useState, useEffect } from 'react';
import Descricao from '../../components/Descricao/Descricao';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import EditIcon from '../../assets/EditIcon.svg';
import './EdicaoExamePendente.css';
import { ButtonSalmon } from '../../components/ButtonSalmon/ButtonSalmon';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import Description from '../../components/Modal/Components/Description/Description';
import CustomButton from '../../components/Button/Button';
import { useLocation } from 'react-router-dom';
import { editExamesPendente } from '../../utils/apiService';

export default function EdicaoExamePendente() {
  const location = useLocation();
  const dateTitle = location.state.date;
  const descriptionValue = location.state.description;
  const dateValue = dateTitle.split('/').reverse().join('-');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tempDate, setTempDate] = useState(dateValue);
  const [date, setDate] = useState(dateValue);
  const [tempDescription, setTempDescription] = useState(descriptionValue);
  const [description, setDescription] = useState(descriptionValue);
  const newDate = date.split('-').reverse().join('/');

  useEffect(() => {
    setDate(tempDate);
    setDescription(tempDescription);
  }, [tempDate, tempDescription]);

  const handleValues = () => {
    editExamesPendente(tempDescription, tempDate, false, location.state.id);
    setDescription(tempDescription);
    setDate(tempDate);
    setModalIsOpen(false);
  };

  return (
    <>
      <HeaderHome title="Pendente" type="headerPage" />
      <div className="top-container">
        <p className="top-title">{newDate}</p>
        <button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className="pencil-icon"
        >
          <img src={EditIcon} alt="Edit Icon" />
        </button>
      </div>
      <div className="desc-container">
        <p className="descricao-title">Descrição</p>
        <p className='descricao-texto'>{description}</p>
      </div>
      <div className="button-salmon-page-container">
        <ButtonSalmon
          label="Realizado"
          icon={true}
          onClick={() => console.log('Realizado')}
        />
      </div>
      <Modal isOpen={modalIsOpen} isClose={() => setModalIsOpen(!modalIsOpen)}>
        <div className="date">
          <DateModal
            value={tempDate}
            onChange={(value) => setTempDate(value)}
          />
        </div>
        <div className="button">
          <Description
            value={tempDescription}
            onChange={(value) => setTempDescription(value)}
          />
          <CustomButton
            variant="contained"
            label="Salvar"
            onClick={handleValues}
          />
        </div>
      </Modal>
      <Footer user="patient" />
    </>
  );
}
