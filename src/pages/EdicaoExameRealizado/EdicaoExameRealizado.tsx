import Descricao from '../../components/Descricao/Descricao';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import EditIcon from '../../assets/EditIcon.svg';
import './EdicaoExameRealizado.css';
import { useEffect, useState } from 'react';
import { ButtonSalmon } from '../../components/ButtonSalmon/ButtonSalmon';
import Modal from '../../components/Modal/Modal';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import Description from '../../components/Modal/Components/Description/Description';
import InputFile from '../../components/InputFile/InputFile';
import CustomButton from '../../components/Button/Button';
import { useLocation } from 'react-router-dom';
import { addFileOrImage, editExamesRealizados } from '../../utils/apiService';

export default function EdicaoExameRealizado() {
  const location = useLocation();
  const dateTitle = location.state.date;
  const descriptionValue = location.state.description;
  const dateValue = dateTitle.split('/').reverse().join('-');
  const fileImageUrl = location.state.fileImage
  const filePdfUrl = location.state.filePdf
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [date, setDate] = useState(dateValue);
  const [tempDate, setTempDate] = useState(dateValue);
  const [description, setDescription] = useState(descriptionValue);
  const [tempDescription, setTempDescription] = useState(descriptionValue);
  const [filePdf, setFilePdf] = useState<File | null>(null);
  const [fileImage, setFileImage] = useState<File | null>(null);
  const newDate = date.split('-').reverse().join('/');

  const handleFilePdf = (file: File | null) => {
    setFilePdf(file);
  };
  const handleFileImage = (file: File | null) => {
    setFileImage(file);
  };
  const handleArquivosClick = () => {
    console.log(filePdfUrl);
    if (filePdfUrl) {
      window.location.href = filePdfUrl;
    } else {
      console.warn('PDF não está disponível');
    }
  };

  const handleImagensClick = () => {
    if (fileImageUrl) {
      window.location.href = fileImageUrl;
    } else {
      console.warn('Imagem não está disponível');
    }
  };

  useEffect(() => {
    setDate(tempDate);
    setDescription(tempDescription);
  }, [tempDate, tempDescription]);

  const handleValues = () => {
    handleEditarRealizado();
    setDescription(tempDescription);
    setDate(tempDate);
    setModalIsOpen(false);
  };

  const handleEditarRealizado = async () => {
    try {
      let fileImageURL = "";
      let filePdfURL = "";

      if (fileImage) {
        const response = await addFileOrImage(fileImage);
        fileImageURL = response.data.url;
      }

      if (filePdf) {
        const response = await addFileOrImage(filePdf);
        filePdfURL = response.data.url;
      }

      console.log("PDF ", fileImageURL);
      console.log("Img ", filePdf);

      await editExamesRealizados(tempDescription, tempDate, true, filePdfURL || ' ', fileImageURL || ' ', location.state.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeaderHome title="Realizado" type="headerPage" />
      <div className="top-part">
        <p className="top-name">{newDate}</p>
        <button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className="edition-icon"
        >
          <img src={EditIcon} />
        </button>
      </div>
      <div className="descript-part">
        <p className="descript-name">Descrição</p>
        <p className='descricao-texto'>{description}</p>
      </div>
      <div className="buttons-salmon-part">
        <ButtonSalmon
          label="Arquivos"
          icon={false}
          onClick={handleArquivosClick}
        />
        <ButtonSalmon
          label="Imagens"
          icon={false}
          onClick={handleImagensClick}
        />
      </div>
      <Modal isOpen={modalIsOpen} isClose={() => setModalIsOpen(!modalIsOpen)}>
        <div className="date-div-modal">
          <DateModal
            value={tempDate}
            onChange={(value) => setTempDate(value)}
          />
        </div>
        <div className="button-description-modal">
          <Description
            value={tempDescription}
            onChange={(value) => setTempDescription(value)}
          />
          <InputFile type="image" onChange={handleFileImage} />
          {fileImage && (
            <p className="file-selected">
              Arquivo selecionado: {fileImage.name}
            </p>
          )}
          <InputFile type="pdf" onChange={handleFilePdf} />
          {filePdf && (
            <p className="file-selected">Arquivo selecionado: {filePdf.name}</p>
          )}
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
