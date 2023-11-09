import Footer from '../../components/Footer/Footer';
import './ExamesVazio.css';
import HappyIcon from '../../assets/HappyIcon.svg';
import AddIcon from '../../assets/AddIcon.svg';
import SadIcon from '../../assets/SadIcon.svg';
//@ts-ignore
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Description from '../../components/Modal/Components/Description/Description';
import CustomButton from '../../components/Button/Button';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import InputFile from '../../components/InputFile/InputFile';

interface ExamesVaziosProps {
  value: number;
  handleSalvar: () => void;
  descriptionPendentes: string;
  datePendestes: string;
  isModalPendentesOpen: boolean;
  setIsModalPendentesOpen: (open: boolean) => void;
  setDescriptionPendentes: (value: string) => void;
  setDatePendentes: (value: string) => void;
  descriptionRealizados: string;
  dateRealizados: string;
  isModalRealizadosOpen: boolean;
  setIsModalRealizadosOpen: (open: boolean) => void;
  setDescriptionRealizados: (value: string) => void;
  setDateRealizados: (value: string) => void;
  filePdf: File | null;
  fileImage: File | null;
  setFilePdf: (value: File) => void;
  setFileImage: (value: File) => void;

}
const ExamesVazio: React.FC<ExamesVaziosProps> = ({
  value,
  handleSalvar,
  descriptionPendentes,
  datePendestes,
  isModalPendentesOpen,
  setIsModalPendentesOpen,
  setDescriptionPendentes,
  setDatePendentes,
  descriptionRealizados,
  dateRealizados,
  isModalRealizadosOpen,
  setIsModalRealizadosOpen,
  setDescriptionRealizados,
  setDateRealizados,
  fileImage,
  filePdf,
  setFileImage,
  setFilePdf

}) => {
  const handleFilePdf = (file: File | null) => {
    if (file)
      setFilePdf(file);
  };

  const handleFileImage = (file: File | null) => {
    if (file)
      setFileImage(file);

  };

  return (
    <>
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
                onClick={() => {
                  handleSalvar()
                  setIsModalPendentesOpen(false);
                }
                }
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
                  onClick={handleSalvar}
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
