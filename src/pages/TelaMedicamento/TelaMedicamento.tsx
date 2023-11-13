import { ListaInteracoesRebaixada } from '../../components/ListaDeMedicamentosRebaixada/ListaDeMedicamentosRebaixada';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { getDosage, getIncompatibilyList } from '../../utils/apiService';
import { useEffect, useState } from 'react';
import EditIcon from '../../assets/EditIcon.svg';
import './TelaMedicamento.css';
import { ModalEdicaoDosagem } from '../../components/ModalEdicaoDosagem/ModalEdicaoDosagem';
import DeleteMedicamento from '../../components/Modal/Components/DeleteMedicamento/DeleteMedicamento';
import { format } from 'date-fns';

interface MedicamentoProps {
    id_medicine: string;
}

interface Items {
    id: number;
    name: string;
    status: number;
}

export const TelaMedicamento: React.FC<MedicamentoProps> = ({ id_medicine }) => {
    const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false);
    const [modalIsOpenBula, setModalIsOpenBula] = useState(false);
    const [modalIsOpenExcluir, setModalIsOpenExcluir] = useState(false);
    const [dosagem, setDosagem] = useState('');
    const [frequencia, setFrequencia] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState('');
    const [name, setName] = useState('');
    // @ts-ignore
    const [idMedicine, setIdMedicine] = useState('');

    const handleSalvarEdicao = (dadosEditados: any) => {
        const objetosAlterados = [];

        if (dadosEditados.dosagem !== undefined) {
            setDosagem(dadosEditados.dosagem);
            objetosAlterados.push({ campo: 'dosagem', valor: dosagem });
        }
        if (dadosEditados.frequencia !== undefined) {
            setFrequencia(dadosEditados.frequencia);
            objetosAlterados.push({ campo: 'frequencia', valor: frequencia });
        }
        if (dadosEditados.dataFinal !== undefined) {
            setDataFinal(dadosEditados.dataFinal);
            objetosAlterados.push({ campo: 'dataFinal', valor: dataFinal });
        }
        if (dadosEditados.unidadeMedida !== undefined) {
            setUnidadeMedida(dadosEditados.unidadeMedida);
            objetosAlterados.push({ campo: 'unidadeMedida', valor: unidadeMedida });
        }
        //aqui eu envio os dados editados para back
    };

    useEffect(() => {
        getDosage(id_medicine)
            .then((medicine) => {
                const dateFormated = format(new Date(medicine.finalDate), 'dd/MM/yyyy');
                setDosagem(medicine.quantity);
                setFrequencia(medicine.frequency);
                setDataFinal(dateFormated);
                setUnidadeMedida(medicine.unit);
                setName(medicine.medicineName);
                setIdMedicine(medicine.idMedicine);
                getIncompatibily(medicine.idMedicine);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const [listaIncompatibilidade, setListaIncompatibilidade] = useState<Items[]>([]);

    const getIncompatibily = async (idMedicine: string) => {
        getIncompatibilyList(Number(idMedicine)).then((listIncompatibility: Items[]) => {
            setListaIncompatibilidade(listIncompatibility);
        });
    };

    return (
        <>
            <HeaderHome title="Medicamentos" type="headerPage" />
            <div className="body-container-remedio">
                <button
                    onClick={() => setModalIsOpenEdit(!modalIsOpenEdit)}
                    className="button-med-edit"
                >
                    <img src={EditIcon} className='edition-icon-medicament-image' />
                </button>
                {modalIsOpenEdit && (
                    <ModalEdicaoDosagem
                        isOpen={modalIsOpenEdit}
                        onClose={() => setModalIsOpenEdit(false)}
                        dosagemRecebida={dosagem}
                        unidadeMedica={unidadeMedida}
                        frequenciaRecebida={frequencia}
                        dataFinalRecebida={dataFinal !== null ? dataFinal : undefined}
                        onSalvar={handleSalvarEdicao}
                    />
                )}
                <div className="infos-remedio">
                    <div className="nome-remedio">{name}</div>
                    <div>
                        Dosagem: {''}
                        <span className="informacao-de-uso-remedio">
                            {dosagem} cps de {unidadeMedida} mg
                        </span>{' '}
                    </div>
                    <div>
                        Frequencia:{' '}
                        <span className="informacao-de-uso-remedio">{frequencia}h</span>
                    </div>
                    <div>
                        Data Final:{' '}
                        <span className="informacao-de-uso-remedio">{dataFinal}</span>
                    </div>
                    <div>Interações Medicamentosas:</div>
                </div>

                <div className="box-lista-interacoes-remedio">
                    <ListaInteracoesRebaixada
                        items={listaIncompatibilidade}
                        name={name}
                    />
                </div>
                <div className="bula-medicamento">
                    <button
                        className='bula-medicamento-button'
                        onClick={() => setModalIsOpenBula(!modalIsOpenBula)}
                    >
                        BULA
                    </button>
                </div>
            </div>
            <button
                className='delete-medicament-button'
                onClick={() => setModalIsOpenExcluir(!modalIsOpenExcluir)}
            >
                Deletar Medicamento
            </button>

            {modalIsOpenExcluir && (
                <DeleteMedicamento
                    isModalOpen={modalIsOpenExcluir}
                    setIsModalOpen={() => setModalIsOpenExcluir(false)}
                />
            )}
            <Footer user="patient" />
        </>
    );
};
