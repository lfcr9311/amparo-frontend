import Descricao from '../../components/Descricao/Descricao';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import EditIcon from '../../assets/EditIcon.svg';
import './EdicaoExameRealizado.css';
import { useState } from 'react';
import { ButtonSalmon } from '../../components/ButtonSalmon/ButtonSalmon';
import Modal from '../../components/Modal/Modal';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import Description from '../../components/Modal/Components/Description/Description';
import InputFile from '../../components/InputFile/InputFile';
import CustomButton from '../../components/Button/Button';

interface EdicaoExameRealizadoProps {
  title: string;
  descriptionValue: string;
  dateValue: string;
}

/* 
  TODO: Conseguir alterar os valores da modal no componente.
*/

export default function EdicaoExameRealizado({
  title,
  descriptionValue,
  dateValue,
}: EdicaoExameRealizadoProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <HeaderHome title="Realizado" type="headerPage" />
      <div className="top-part">
        <p className="top-name">{title}</p>
        <button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className="edition-icon"
        >
          <img src={EditIcon} />
        </button>
      </div>
      <div className="descript-part">
        <p className="descript-name">Descrição</p>
        <Descricao value={descriptionValue} />
      </div>
      <div className="buttons-salmon-part">
        <ButtonSalmon
          label="Arquivos"
          icon={false}
          onClick={() => console.log('Arquivo')}
        />
        <ButtonSalmon
          label="Imagens"
          icon={false}
          onClick={() => console.log('Imagem')}
        />
      </div>
      <Modal isOpen={modalIsOpen} isClose={() => setModalIsOpen(!modalIsOpen)}>
        <div className="date-div-modal">
          <DateModal dateExist={true} dateValue={dateValue} />
        </div>
        <div className="button-description-modal">
          <Description descriptExist={true} descriptValue={descriptionValue} />
          <InputFile type="image" onChange={() => {}} />
          <InputFile type="pdf" onChange={() => {}} />
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
