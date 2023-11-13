import React, { useRef, useState } from 'react';
import './MedicamentoAgenda.css';
import { ArrowBackIosNewRounded } from '@mui/icons-material';


interface MedicamentoAgendaProps {
    title: React.ReactNode;
    content: React.ReactNode;
    onInfoClick: () => void;
    onDeleteClick: () => void;
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
                                <svg
                                    width="21"
                                    height="25"
                                    viewBox="0 0 21 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="lixeira-icon"
                                >
                                    <path d="M1.92857 22.2222C1.92857 23.75 3.21429 25 4.78571 25H16.2143C17.7857 25 19.0714 23.75 19.0714 22.2222V8.33333C19.0714 6.80556 17.7857 5.55556 16.2143 5.55556H4.78571C3.21429 5.55556 1.92857 6.80556 1.92857 8.33333V22.2222ZM6.21429 8.33333H14.7857C15.5714 8.33333 16.2143 8.95833 16.2143 9.72222V20.8333C16.2143 21.5972 15.5714 22.2222 14.7857 22.2222H6.21429C5.42857 22.2222 4.78571 21.5972 4.78571 20.8333V9.72222C4.78571 8.95833 5.42857 8.33333 6.21429 8.33333ZM15.5 1.38889L14.4857 0.402778C14.2286 0.152778 13.8571 0 13.4857 0H7.51429C7.14286 0 6.77143 0.152778 6.51429 0.402778L5.5 1.38889H1.92857C1.14286 1.38889 0.5 2.01389 0.5 2.77778C0.5 3.54167 1.14286 4.16667 1.92857 4.16667H19.0714C19.8571 4.16667 20.5 3.54167 20.5 2.77778C20.5 2.01389 19.8571 1.38889 19.0714 1.38889H15.5Z" fill="#BD1E08" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MedicamentoAgenda;
