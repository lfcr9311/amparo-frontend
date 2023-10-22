import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import AddCircleIcon from '../../assets/AddCircle.svg';
import { useState } from 'react';
import ExamListItem from '../../components/ListItem/ListItem';
import Modal from '../../components/Modal/Modal';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import Description from '../../components/Modal/Components/Description/Description';
import CustomButton from '../../components/Button/Button';
import ExamFilter from '../../components/ExamFilter/examFilter';
import InputFile from '../../components/InputFile/InputFile';
import './Exames.css';

export default function Exames() {
  const [value, setValue] = useState(0);
  const [isModalPendentesOpen, setIsModalPendentesOpen] = useState(false);
  const [isModalRealizadosOpen, setIsModalRealizadosOpen] = useState(false);
  const [datePendestes, setDatePendentes] = useState('');
  const [descriptionPendentes, setDescriptionPendentes] = useState('');
  const [dateRealizados, setDateRealizados] = useState('');
  const [descriptionRealizados, setDescriptionRealizados] = useState('');
  const [filePdf, setFilePdf] = useState<File | null>(null);
  const [fileImage, setFileImage] = useState<File | null>(null);

  const handleFilePdf = (file: File | null) => {
    setFilePdf(file);
  };
  const handleFileImage = (file: File | null) => {
    setFileImage(file);
  };

  return (
    <>
      <HeaderHome type="headerTab" value={value} setValue={setValue} />
      {value === 0 ? (
        <>
          <div className="content-header-pendentes">
            <p className="title-exames-page-title">Exames</p>
            <button
              className="add-button-icon"
              onClick={() => setIsModalPendentesOpen(!isModalPendentesOpen)}
            >
              <img src={AddCircleIcon} className="add-circle-icon" />
            </button>
          </div>
          <div className="cards-exames-pendentes">
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
          <Modal
            isOpen={isModalPendentesOpen}
            isClose={() => setIsModalPendentesOpen(!isModalPendentesOpen)}
          >
            <div className="div-date-modal">
              <DateModal
                value={datePendestes}
                onChange={(value) => setDatePendentes(value)}
              />
            </div>
            <div className="description-button-modal">
              <Description
                value={descriptionPendentes}
                onChange={(value) => setDescriptionPendentes(value)}
              />
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={() => console.log(datePendestes, descriptionPendentes)}
              />
            </div>
          </Modal>
        </>
      ) : (
        <>
          <div className="content-header-realizados">
            <p className="title-exames-page-title">Exames</p>
            <button
              className="add-button-icon"
              onClick={() => setIsModalRealizadosOpen(!isModalRealizadosOpen)}
            >
              <img src={AddCircleIcon} className="add-circle-icon" />
            </button>
          </div>
          <ExamFilter
            tabs={[
              { content: '', label: '30 dias' },
              { content: '', label: '60 dias' },
              { content: '', label: 'Todos' },
            ]}
          />
          <div className="cards-exames-realizados">
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
          <Modal
            isOpen={isModalRealizadosOpen}
            isClose={() => setIsModalRealizadosOpen(!isModalRealizadosOpen)}
          >
            <div className="div-date-modal">
              <DateModal
                value={dateRealizados}
                onChange={(value) => setDateRealizados(value)}
              />
            </div>
            <div className="description-button-modal">
              <Description
                value={descriptionRealizados}
                onChange={(value) => setDescriptionRealizados(value)}
              />
              <InputFile type="image" onChange={handleFileImage} />
              {fileImage && (
                <p className="file-selected">
                  Arquivo selecionado: {fileImage.name}
                </p>
              )}
              <InputFile type="pdf" onChange={handleFilePdf} />
              {filePdf && (
                <p className="file-selected">
                  Arquivo selecionado: {filePdf.name}
                </p>
              )}
              <CustomButton
                variant="contained"
                label="Salvar"
                onClick={() =>
                  console.log(
                    dateRealizados,
                    descriptionRealizados,
                    fileImage,
                    filePdf
                  )
                }
              />
            </div>
          </Modal>
        </>
      )}
      <Footer user="patient" />
    </>
  );
}