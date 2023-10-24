import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './ExamesVazio.css';
import HappyIcon from '../../assets/HappyIcon.svg';
import AddIcon from '../../assets/AddIcon.svg';
import SadIcon from '../../assets/SadIcon.svg';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Description from '../../components/Modal/Components/Description/Description';
import CustomButton from '../../components/Button/Button';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import InputFile from '../../components/InputFile/InputFile';

const ExamesVazio: React.FC = () => {
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
      <div className="header">
        <HeaderHome value={value} setValue={setValue} type="headerTab" />
      </div>
      {value === 0 ? (
        <div className="exames-pendentes-vazio">
          <div className="texto">Nenhum exame pendente</div>
          <div className="icon1">
            <img src={HappyIcon} /> <br />
          </div>
          <div className="add-button">
            <button
              onClick={() => setIsModalPendentesOpen(!isModalPendentesOpen)}
              className="botao"
            >
              <img src={AddIcon} />
            </button>
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
          <div className="texto2">Adicionar</div>
        </div>
      ) : (
        <div className="exames-paciente-vazio">
          <div className="texto">Nenhum exame realizado</div>
          <div className="icon1">
            <img src={SadIcon} /> <br />
          </div>
          <div className="add-button">
            <button
              onClick={() => setIsModalRealizadosOpen(!isModalRealizadosOpen)}
              className="botao"
            >
              <img src={AddIcon} />
            </button>
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
          </div>
          <div className="texto2">Adicionar</div>
        </div>
      )}
      <Footer user="patient" />
    </>
  );
};

export default ExamesVazio;
