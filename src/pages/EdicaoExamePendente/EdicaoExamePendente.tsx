import { useState } from 'react';
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

interface EdicaoExamePendenteProps {
  title: string;
  descriptionValue: string;
  dateValue: string;
}

/* 
  TODO: Conseguir alterar os valores da modal no componente.
*/

export default function EdicaoExamePendente({
  title,
  descriptionValue,
  dateValue,
}: EdicaoExamePendenteProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <HeaderHome title="Pendente" type="headerPage" />
      <div className="top-container">
        <p className="top-title">{title}</p>
        <button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className="pencil-icon"
        >
          <img src={EditIcon} />
        </button>
      </div>
      <div className="desc-container">
        <p className="descricao-title">Descrição</p>
        <Descricao value={descriptionValue} />
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
          <DateModal dateExist={true} dateValue={dateValue} />
        </div>
        <div className="button">
          <Description descriptExist={true} descriptValue={descriptionValue} />
          <CustomButton
            variant="contained"
            label="Salvar"
            onClick={() => console.log('')}
          />
        </div>
      </Modal>
      <Footer user="patient" />
    </>
  );
}
