import './Modal.css';
import Close from "../../assets/Close.svg"
import TextfieldModal from './Components/TextfieldModal';
import { useState } from 'react';
import CustomButton from '../Button';


interface ModalProps {
    isOpen: boolean;
    title: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    title
}) => {

    if (isOpen) {
        return (
            <div className="background-container">
                <div className="modal-container">
                    <div className='header-container'>
                        <p className="title-container">{title}</p>
                        <button className='close-container'>
                            <img src={Close} />
                        </button>
                    </div>
                    <form>
                        <div className='form-container'>
                            <TextfieldModal
                                label="Seu nome"
                                value=''
                                type='text'
                                onChange={() => console.log("")}
                            />
                            <TextfieldModal
                                label="CPF"
                                value=''
                                type='text'
                                onChange={() => console.log("")}
                            />
                            <TextfieldModal
                                label="Data de Nascimento"
                                value=''
                                type='text'
                                onChange={() => console.log("")}
                            />
                            <TextfieldModal
                                label="Nº do SUS"
                                value=''
                                type='text'
                                onChange={() => console.log("")}
                            />
                            <div className="cellphone-container">
                                <TextfieldModal
                                    label="DDD"
                                    value=''
                                    type='text'
                                    onChange={() => console.log("")}
                                />
                                <TextfieldModal
                                    label="Telefone"
                                    value=''
                                    type='text'
                                    onChange={() => console.log("")}
                                />

                            </div>
                            <CustomButton
                                variant='contained'
                                label='salvar'
                                onClick={() => console.log()}
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal;