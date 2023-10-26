import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import AddCircleIcon from '../../assets/addCircle.svg';
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
            <ExamListItem
              date="23/02/2018"
              exam="Hemograma"
              description="Exame de hemograma"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="TGO"
              description="Exame de TGO"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="TGP"
              description="Exame de TGP"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Testosterona"
              description="Exame de Testosterona"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Calcio"
              description="Exame de Calcio"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Potássio"
              description="Exame de Potássio"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Vitamina D"
              description="Exame de Vitamina D"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Vitamina B12"
              description="Exame de Vitamina B12"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Glicose"
              description="Exame de Glicose"
              type="pendente"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Leucócitos"
              description="Exame de Leucócitos"
              type="pendente"
            />
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
            <ExamListItem
              date="23/02/2018"
              exam="Hemograma"
              description="Exame de hemograma"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="TGO"
              description="Exame de TGO"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="TGP"
              description="Exame de TGP"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Testosterona"
              description="Exame de Testosterona"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Calcio"
              description="Exame de Calcio"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Potássio"
              description="Exame de Potássio"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Vitamina D"
              description="Exame de Vitamina D"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Vitamina B12"
              description="Exame de Vitamina B12"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Glicose"
              description="Exame de Glicose"
              type="realizado"
            />
            <ExamListItem
              date="23/02/2018"
              exam="Leucócitos"
              description="Exame de Leucócitos"
              type="realizado"
            />
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
