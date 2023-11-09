import { ListaInteracoesRebaixada } from '../../components/ListaDeMedicamentosRebaixada/ListaDeMedicamentosRebaixada';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import { getIncompatibilyList } from '../../utils/apiService';
import ButtonMUI, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import EditIcon from '../../assets/EditIcon.svg';
import './TelaMedicamento.css';

interface MedicamentoProps {
    id: number;
    name: string;

    dosagem?: String;
    frequencia?: String;
    dataFinal?: String;
}


export const TelaMedicamento: React.FC<MedicamentoProps> = ({ id, name, dosagem, frequencia, dataFinal }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [listaIncompatibilidade, setListaIncompatibilidade] = useState<any[]>([]);
    useState(() => {
        getIncompatibilyList(id).then((listIncompatibility) => {
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
                    <button
                        onClick={() => setModalIsOpen(!modalIsOpen)}
                        className="edition-icon-medicamento"
                    >

                        <img src={EditIcon} />
                    </button>
                </div>
                <div className='nome-remedio'> {name}</div>

                <div className='infos-remedio'>
                    <br />
                    <div>Dosagem: <span className='informacao-de-uso-remedio'>{dosagem}</span></div>
                    <br />

                    <div >Frequencia: <span className='informacao-de-uso-remedio'>{frequencia}</span></div>
                    <br />

                    <div>Data Final: <span className='informacao-de-uso-remedio'>{dataFinal}</span></div>
                    <br />

                    <div>Medicamentos de uso conjunto:</div>
                    <br />

                </div>

                <div className='box-lita-interacoes-remedio'>
                    {listaIncompatibilidade.length === 0
                        ? <div className='texto-sem-interacoes-remedio' title={'Sem interações'}>
                            <div className='div-lista-interacoes-remedio'>
                                <ListaInteracoesRebaixada items={listaFixa} name={name} />
                                 {//colocar sem interacao  
                                }
                            </div>
                        </div>
                        : <div className='div-lista-interacoes-remedio'>
                            <ListaInteracoesRebaixada items={listaFixa} name={name} />
                        </div>
                    }
                </div>
                <br />

                <div className='bula-medicamento'>

                    <ColorButtonBula onClick={() => setModalIsOpen(!modalIsOpen)}>BULA</ColorButtonBula>

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
                    onClick={() => setModalIsOpen(!modalIsOpen)}
                >

                    Deletar conta
                </ButtonMUI>           </div>
            <Footer user="patient" />
        </>
    );
};

