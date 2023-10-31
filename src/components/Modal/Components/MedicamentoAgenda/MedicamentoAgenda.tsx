import React, { useRef, useState } from 'react';
import './MedicamentoAgenda.css';
import { ArrowBackIosNewRounded } from '@mui/icons-material';

interface MedicamentoAgendaProps {
    title: React.ReactNode;
    content: React.ReactNode;
}

const MedicamentoAgenda: React.FC<MedicamentoAgendaProps> = ({ title, content }) => {
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
        <div className="componente-medicamento">
            <button
                className="botao"
                onClick={toggleMedicamentoAgenda}
            >
                <p>Medicamento 1</p>
                <ArrowBackIosNewRounded style={{ transform: rotate }} className="seta-baixo" />
            </button>
            <div
                ref={contentSpace}
                style={{ maxHeight: height }}
                className="conteudo-expansivel"
            >
                <div className="conteudo-medicamento">
                    Horário do Medicamento: {content}
                </div>
            </div>
        </div>
    );
};

export default MedicamentoAgenda;
