import { ListaInteracoesRebaixada } from '../../components/ListaDeMedicamentosRebaixada/ListaDeMedicamentosRebaixada';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import {
  deleteDosage,
  getDosage,
  getIncompatibilyList,
  putEditDosage,
} from '../../utils/apiService';
import { useEffect, useState } from 'react';
import EditIcon from '../../assets/EditIcon.svg';
import './TelaMedicamento.css';
import { ModalEdicaoDosagem } from '../../components/ModalEdicaoDosagem/ModalEdicaoDosagem';
import DeleteMedicamento from '../../components/Modal/Components/DeleteMedicamento/DeleteMedicamento';
import { format, addDays } from 'date-fns';
import {  useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../routes/constans';

interface Items {
  id: number;
  name: string;
  status: number;
}

export const TelaMedicamento = () => {
  const { dosageId } = useParams<{ dosageId: string }>();

  const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false);
  const [modalIsOpenBula, setModalIsOpenBula] = useState(false);
  const [modalIsOpenExcluir, setModalIsOpenExcluir] = useState(false);
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [dataFinalMostraNaTela, setDataFinalMostraNaTela] = useState('');
  const [dataFinalParaEnviarEditar, setDataFinalParaEnviarEditar] =
    useState('');
  const [unidadeMedida, setUnidadeMedida] = useState('cps');
  const [name, setName] = useState('');
  const [lastDosage, setLastDosage] = useState('');
  // @ts-ignore
  const [idMedicine, setIdMedicine] = useState('');

  const handleSalvarEdicao = (dadosEditados: any) => {
    if (dadosEditados.dataFinal === undefined) {
      dadosEditados.dataFinal = format(
        addDays(new Date(dataFinalParaEnviarEditar), 1),
        'yyyy-MM-dd'
      );
    }
    if (dadosEditados.frequencia === undefined) {
      dadosEditados.frequencia = frequencia;
    }
    if (dadosEditados.dosagem === undefined) {
      dadosEditados.dosagem = dosagem;
    }
    putEditDosage(
      dosageId!!,
      Number(idMedicine),
      dadosEditados.dosagem,
      dadosEditados.frequencia,
      dadosEditados.dataFinal
    ).then((response) => {
      setLastDosage(response);
    });
  };

  useEffect(() => {
    getDosage(dosageId!!)
      .then((medicine) => {
        const dateFormated = format(new Date(medicine.finalDate), 'dd/MM/yyyy');
        const dateFormatedEdited = format(
          new Date(medicine.finalDate),
          'yyyy-MM-dd'
        );
        setDosagem(medicine.quantity);
        setFrequencia(medicine.frequency);
        setDataFinalMostraNaTela(dateFormated);
        setDataFinalParaEnviarEditar(dateFormatedEdited);
        setUnidadeMedida(medicine.unit);
        setName(medicine.medicineName);
        setIdMedicine(medicine.idMedicine);
        getIncompatibily(medicine.idMedicine);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [lastDosage]);

  const [listaIncompatibilidade, setListaIncompatibilidade] = useState<Items[]>(
    []
  );
    // @ts-ignore
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log('deletar');
    deleteDosage(dosageId!!)
      .then((response) => {
        console.log(response);
        navigate(ROUTES.LISTA_MEDICAMENTOS());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getIncompatibily = async (idMedicine: string) => {
    getIncompatibilyList(Number(idMedicine)).then(
      (listIncompatibility: Items[]) => {
        setListaIncompatibilidade(listIncompatibility);
      }
    );
  };

  return (
    <>
      <HeaderHome title="Medicamentos" type="headerPage" />
      <div className="body-container-remedio">
        <button
          onClick={() => setModalIsOpenEdit(!modalIsOpenEdit)}
          className="button-med-edit"
        >
          <img src={EditIcon} className="edition-icon-medicament-image" />
        </button>
        {modalIsOpenEdit && (
          <ModalEdicaoDosagem
            isOpen={modalIsOpenEdit}
            onClose={() => setModalIsOpenEdit(false)}
            dosagemRecebida={dosagem}
            unidadeMedica={unidadeMedida}
            frequenciaRecebida={frequencia}
            dataFinalRecebida={
              dataFinalParaEnviarEditar !== null
                ? dataFinalParaEnviarEditar
                : undefined
            }
            onSalvar={handleSalvarEdicao}
          />
        )}
        <div className="infos-remedio">
          <div className="nome-remedio">{name}</div>
          <div>
            Dosagem: {''}
            <span className="informacao-de-uso-remedio">
              {dosagem} {unidadeMedida}
            </span>{' '}
          </div>
          <div>
            Frequencia:{' '}
            <span className="informacao-de-uso-remedio">{frequencia}</span>
          </div>
          <div>
            Data Final:{' '}
            <span className="informacao-de-uso-remedio">
              {dataFinalMostraNaTela}
            </span>
          </div>
          <div className='name-interacao-medicamento'>Interações Medicamentosas:</div>
        </div>

        <div className="box-lista-interacoes-remedio">
          <ListaInteracoesRebaixada
            items={listaIncompatibilidade}
            name={name}
          />
        </div>
        <div className="bula-medicamento">
          <button
            className="bula-medicamento-button"
            onClick={() => setModalIsOpenBula(!modalIsOpenBula)}
          >
            BULA
          </button>
        </div>
      </div>
      <button
        className="delete-medicament-button"
        onClick={() => setModalIsOpenExcluir(!modalIsOpenExcluir)}
      >
        Deletar Medicamento
      </button>

      {modalIsOpenExcluir && (
        <DeleteMedicamento
          isModalOpen={modalIsOpenExcluir}
          setIsModalOpen={() => setModalIsOpenExcluir(false)}
          handleDelete={handleDelete}
        />
      )}
      <Footer user="patient" />
    </>
  );
};
