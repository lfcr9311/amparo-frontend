import { ListaInteracoesRebaixada } from '../../components/ListaDeMedicamentosRebaixada/ListaDeMedicamentosRebaixada';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { getDosage, getIncompatibilyList } from '../../utils/apiService';
import ButtonMUI, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import EditIcon from '../../assets/EditIcon.svg';
import './TelaMedicamento.css';
import { ModalEdicaoDosagem } from '../../components/ModalEdicaoDosagem/ModalEdicaoDosagem';
import DeleteMedicamento from '../../components/Modal/Components/DeleteMedicamento/DeleteMedicamento';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';


interface MedicamentoProps {
    idDosagem: string;


}


export const TelaMedicamento: React.FC<MedicamentoProps> = ({ idDosagem }) => {

    const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false);
    const [modalIsOpenBula, setModalIsOpenBula] = useState(false);
    const [modalIsOpenExcluir, setModalIsOpenExcluir] = useState(false);

    const [dosagemC, setDosagem] = useState('');
    const [frequenciaC, setFrequencia] = useState('');
    const [dataFinalC, setDataFinal] = useState('');
    const [unidadeMedidaC, setUnidadeMedida] = useState('');
    const [name, setName] = useState('');
    const [idMedicine, setIdMedicine] = useState('');


    const handleSalvarEdicao = (dadosEditados: any) => {
        const objetosAlterados = [];

        if (dadosEditados.dosagem !== undefined) {
            setDosagem(dadosEditados.dosagem);
            objetosAlterados.push({ campo: 'dosagem', valor: dosagemC });
        }
        if (dadosEditados.frequencia !== undefined) {
            setFrequencia(dadosEditados.frequencia);
            objetosAlterados.push({ campo: 'frequencia', valor: frequenciaC });
        }
        if (dadosEditados.dataFinal !== undefined) {
            setDataFinal(dadosEditados.dataFinal);
            objetosAlterados.push({ campo: 'dataFinal', valor: dataFinalC });
        }
        if (dadosEditados.unidadeMedida !== undefined) {
            setUnidadeMedida(dadosEditados.unidadeMedida);
            objetosAlterados.push({ campo: 'unidadeMedida', valor: unidadeMedidaC });
        }




        //aqui eu envio os dados editados para back

    };



    useEffect(() => {

        getDosage(idDosagem).then((dosage) => {
            setDosagem(dosage.quantity);
            setFrequencia(dosage.frequency);

            const datef = format(new Date(dosage.finalDate), 'dd/MM/yyyy');
            setDataFinal(datef);
            setUnidadeMedida(dosage.unit);
            console.log(idMedicine, Number(idMedicine));
            setName(dosage.medicineName);
            setIdMedicine(dosage.idMedicine);

        }).catch((error) => { console.error(error) }).finally(() => {
        });


    }, []);

    const [listaIncompatibilidade, setListaIncompatibilidade] = useState<any[]>([]);

    useState(() => {
        console.log(idMedicine, Number(idMedicine));
        getIncompatibilyList(Number(idMedicine)).then((listIncompatibility) => {
            setListaIncompatibilidade(listIncompatibility)
        });
    });

    const ColorButtonBula = styled(ButtonMUI)<ButtonProps>(() => ({
        width: '162px',
        height: '45px',
        padding: '6px 8px',
        borderRadius: '12px',
        gap: '10px',
        fontFamily: 'Poppins',
        fontSize: '19px',
        fontStyle: 'italic',
        fontWeight: 500,
        lineHeight: '29px',
        letterSpacing: '0',
        textAlign: 'center',
        color: '#4D4C4C',
        backgroundColor: '#DCDCDC',
        '&:hover': {
            backgroundColor: '#DCDCDC',
        },
    }));


    const listaFixa: { name: string; status: number }[] = [
        { name: "Remédio G", status: 1 },
        { name: "Remédio F", status: 1 },
        { name: "Remédio A", status: 1 },
        { name: "Remédio B", status: 1 },
        { name: "Remédio C", status: 1 },
        { name: "Remédio D", status: 1 },
        { name: "Remédio A", status: 2 },
        { name: "Remédio B", status: 2 },
        { name: "Remédio C", status: 2 },
        { name: "Remédio A", status: 3 },
        { name: "Remédio B", status: 3 },
        { name: "Remédio C", status: 3 },
    ];


    return (
        <>
            <HeaderHome title="Medicamentos" type="headerPage" />

            <div className='body-container-remedio'>
                <div className='div-edit-medicamento'>
                    <div>
                        <ButtonMUI
                            onClick={() => setModalIsOpenEdit(!modalIsOpenEdit)}
                            className="edition-icon-medicamento"
                        >

                            <img src={EditIcon} style={{ width: '32px', height: '32px' }} />
                        </ButtonMUI>
                        {modalIsOpenEdit &&
                            <ModalEdicaoDosagem isOpen={modalIsOpenEdit} onClose={() => setModalIsOpenEdit(false)}
                                dosagemRecebida={dosagemC} unidadeMedica={unidadeMedidaC} frequenciaRecebida={frequenciaC}
                                dataFinalRecebida={dataFinalC !== null ? dataFinalC : undefined}
                                onSalvar={handleSalvarEdicao}
                            />}
                    </div>
                </div>
                <div className='nome-remedio'> {name}</div>

                <div className='infos-remedio'>
                    <br />
                    <div>Dosagem: <span className='informacao-de-uso-remedio'>{dosagemC} {unidadeMedidaC}</span> </div>
                    <br />

                    <div >Frequencia: <span className='informacao-de-uso-remedio'>{frequenciaC}</span></div>
                    <br />

                    <div>Data Final: <span className='informacao-de-uso-remedio'>{dataFinalC}</span></div>
                    <br />

                    <div>Medicamentos de uso conjunto:</div>
                    <br />

                </div>

                <div className='box-lita-interacoes-remedio'>
                    {listaIncompatibilidade.length === 0
                        ? <div className='texto-sem-interacoes-remedio' title={'Sem interações'}>
                            <div className='div-lista-interacoes-remedio'>
                                colocar interacao
                            </div>
                        </div>
                        : <div className='div-lista-interacoes-remedio'>
                            <ListaInteracoesRebaixada items={listaIncompatibilidade} name={name} />
                        </div>
                    }
                </div>
                <br />

                <div className='bula-medicamento'>

                    <ColorButtonBula onClick={() => setModalIsOpenBula(!modalIsOpenBula)}>BULA</ColorButtonBula>

                </div>

            </div>
            <div className='deletar-remedio'>

                <ButtonMUI
                    sx={{
                        display: "flex",
                        fontSize: "12px",
                        marginBottom: "20px",
                        fontFamily: "Poppins",
                        cursor: "pointer",
                        color: "#E10E17",
                        border: "none",
                        background: "none",
                        outline: "none",
                    }}
                    onClick={() => setModalIsOpenExcluir(!modalIsOpenExcluir)}
                >

                    Deletar Medicamento
                </ButtonMUI>


                {modalIsOpenExcluir && <DeleteMedicamento isModalOpen={modalIsOpenExcluir} setIsModalOpen={() => setModalIsOpenExcluir(false)} />}
            </div>

            <Footer user="patient" />
        </>
    );
};

