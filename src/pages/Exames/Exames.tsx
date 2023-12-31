import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import AddCircleIcon from '../../assets/AddCircle.svg';
import { useEffect, useState } from 'react';
import ExamListItem from '../../components/ListItem/ListItem';
import Modal from '../../components/Modal/Modal';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import Description from '../../components/Modal/Components/Description/Description';
import CustomButton from '../../components/Button/Button';
import ExamFilter from '../../components/ExamFilter/examFilter';
import InputFile from '../../components/InputFile/InputFile';
import { format, parse } from 'date-fns';
import './Exames.css';
import { addExamePendente, addExameRealizado, addFileOrImage, getExamesPendente, getExamesRealizados } from '../../utils/apiService';
import ExamesVazio from '../../components/ExamesVazio/ExamesVazio';

interface Exames {
  id: string;
  description: string;
  examDate: string;
  is_done: boolean;
  id_patient: string;
  file: string | null;
  image: string | null;
}
export default function Exames() {
  const [value, setValue] = useState(0);
  const [isModalPendentesOpen, setIsModalPendentesOpen] = useState(false);
  const [isModalRealizadosOpen, setIsModalRealizadosOpen] = useState(false);
  const [datePendestes, setDatePendentes] = useState('');
  const [descriptionPendentes, setDescriptionPendentes] = useState('');
  const [dateRealizados, setDateRealizados] = useState('');
  const [descriptionRealizados, setDescriptionRealizados] = useState('');
  const [addExam, setAddExam] = useState('');
  const [tabNumber, setTabNumber] = useState(0);
  const [filePdf, setFilePdf] = useState<File | null>(null);
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [examesPendentes, setExamesPendentes] = useState<Exames[]>([]);
  const [examesRealizados, setExamesRealizados] = useState<Exames[]>([]);
  const handleFilePdf = (file: File | null) => {
    setFilePdf(file);
  };

  const handleFileImage = (file: File | null) => {
    setFileImage(file);

  };
  useEffect(() => {
    getExamesPendente().then((response) => {
      if (response.status == 200) {
        setExamesPendentes(response.data)
        console.log(examesPendentes);
      }
    });
    getExamesRealizados().then((response) => {
      setExamesRealizados(response.data)

    }).finally(() => {
      console.log("realizados -> ", examesRealizados);
    })
  }, [addExam])
  const handleSalvarPendente = () => {
    console.log("im here" + descriptionPendentes);

    addExamePendente(descriptionPendentes, datePendestes).then((response) => {
      console.log("Adicionando novo exame");
      setDatePendentes("")
      setDescriptionPendentes("")
      setIsModalPendentesOpen(false)
      setAddExam(response.data)
    }).catch((error) => {
      console.error(error);

    })
  }

  const handleSalvarRealizado = async () => {
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

      const response = await addExameRealizado(descriptionRealizados, dateRealizados, fileImageURL || '', filePdfURL || '');
      console.log("Adicionando novo exame realizado");
      setDateRealizados("");
      setDescriptionRealizados("");
      setIsModalRealizadosOpen(false);
      setFileImage(null);
      setFilePdf(null)
      setAddExam(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeaderHome type="headerTab" value={value} setValue={setValue} />
      {value === 0 ? (
        examesPendentes.length === 0 ? (
          <ExamesVazio
            value={value}
            handleSalvar={handleSalvarPendente}
            descriptionPendentes={descriptionPendentes}
            datePendestes={datePendestes}
            isModalPendentesOpen={isModalPendentesOpen}
            setIsModalPendentesOpen={setIsModalPendentesOpen}
            setDescriptionPendentes={setDescriptionPendentes}
            setDatePendentes={setDatePendentes}
            descriptionRealizados={descriptionPendentes}
            dateRealizados={datePendestes}
            isModalRealizadosOpen={isModalPendentesOpen}
            setIsModalRealizadosOpen={setIsModalPendentesOpen}
            setDescriptionRealizados={setDescriptionPendentes}
            setDateRealizados={setDatePendentes}
            fileImage={fileImage}
            setFileImage={setFileImage}
            filePdf={filePdf}
            setFilePdf={setFilePdf}

          />
        ) : (

          <div className='body-exames'>
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
              {examesPendentes.map((exam, index) => (
                <ExamListItem
                  onClickPermisson={true}
                  key={index}
                  date={format(new Date(exam.examDate), 'dd/MM/yyyy')}
                  exam={exam.description}
                  description={exam.description}
                  type={'pendente'}
                  fileImage=''
                  filePdf=''
                  id={exam.id}

                />
              ))}
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
                  onClick={handleSalvarPendente}
                />
              </div>
            </Modal>
          </div>

        )
      ) : (
        examesRealizados.length === 0 ?
          (
            <ExamesVazio
              value={value}
              handleSalvar={handleSalvarRealizado}
              descriptionPendentes={descriptionPendentes}
              datePendestes={datePendestes}
              isModalPendentesOpen={isModalPendentesOpen}
              setIsModalPendentesOpen={setIsModalPendentesOpen}
              setDescriptionPendentes={setDescriptionPendentes}
              setDatePendentes={setDatePendentes}

              descriptionRealizados={descriptionRealizados}
              dateRealizados={dateRealizados}
              isModalRealizadosOpen={isModalRealizadosOpen}
              setIsModalRealizadosOpen={setIsModalRealizadosOpen}
              setDescriptionRealizados={setDescriptionRealizados}
              setDateRealizados={setDateRealizados}
              fileImage={fileImage}
              setFileImage={setFileImage}
              filePdf={filePdf}
              setFilePdf={setFilePdf}
            />
          )
          : (


            <div className='body-exames'>
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
                  { content: '', label: '6 meses' },
                  { content: '', label: 'Todos' },
                ]}
                value={tabNumber}
                setValue={setTabNumber}
              />
              <div className="cards-exames-realizados">
                {examesRealizados.map((exam, index) => (
                  <ExamListItem
                    onClickPermisson={true}
                    key={index}
                    date={format(new Date(exam.examDate), 'dd/MM/yyyy')}
                    exam={exam.description}
                    description={exam.description}
                    type={'realizado'}
                    fileImage={exam.image}
                    filePdf={exam.file}
                    id={exam.id}
                  />
                )).filter((exame) => {
                  const examDate = parse(exame.props.date, 'dd/MM/yyyy', new Date());
                  const currentDate = new Date();
                  const thirtyDaysAgo = new Date();
                  const sixtieDaysAgo = new Date();
                  thirtyDaysAgo.setDate(currentDate.getDate() - 30);
                  sixtieDaysAgo.setDate(currentDate.getDate() - 180);

                  if (tabNumber == 0)
                    return examDate >= thirtyDaysAgo;
                  else if (tabNumber == 1)
                    return examDate >= sixtieDaysAgo;
                  else return true
                })}
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
                    onClick={handleSalvarRealizado}
                  />
                </div>
              </Modal>
            </div>
          )
      )}
      <Footer user="patient" />
    </>
  );
}
