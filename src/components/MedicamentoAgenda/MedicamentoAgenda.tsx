import React, { useRef, useState } from 'react';
import './MedicamentoAgenda.css';
import { ArrowBackIosNewRounded } from '@mui/icons-material';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';

interface MedicamentoAgendaProps {
    title?: React.ReactNode;
    content?: React.ReactNode;
    onInfoClick?: () => void;
    onDeleteClick?: () => void;
}

const MedicamentoAgenda: React.FC<MedicamentoAgendaProps> = ({
    title, content, onInfoClick, onDeleteClick
}) => {
    const [active, setActive] = useState(false);
    const [height, setHeight] = useState('0px');
    const [rotate, setRotate] = useState('rotate(-90deg)');

    const contentSpace = useRef(null);

    function toggleMedicamentoAgenda() {
        setActive((prevState) => !prevState);
        // @ts-ignore
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
        setRotate(active ? 'rotate(-90deg)' : 'rotate(90deg)');
    }

    return (
        <>
            <HeaderHome title="Medicamentos" type="headerPage" />
            <div className="componente-medicamento">
                <button
                    className="botao"
                    onClick={toggleMedicamentoAgenda}
                >
                    <p>{title}</p>
                    <ArrowBackIosNewRounded style={{ transform: rotate }} className="seta-baixo" />
                </button>
                <div
                    ref={contentSpace}
                    style={{ maxHeight: height }}
                    className="conteudo-expansivel"
                >
                    <div className="conteudo-medicamento">
                        <div className="conteudo-horario">
                            <p>Horário do Medicamento:</p>
                            <p>{content}</p>
                        </div>
                        <div className="conteudo-botoes">
                            <button className="info-button" onClick={onInfoClick}>
                                Informações do Medicamento
                            </button>
                            <button className="lixeira-button" onClick={onDeleteClick}>
                                {/* Ícone de lixeira aqui */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer user="patient" />
        </>
    );
};

export default MedicamentoAgenda;
