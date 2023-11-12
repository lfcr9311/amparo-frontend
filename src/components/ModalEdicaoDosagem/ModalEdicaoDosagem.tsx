
import './ModalEdicaoDosagem.css';
import CustomButton from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useState, useEffect } from 'react';
import SelectFrequencia from '../../components/Modal/Components/SelectFrequencia/SelectFrequencia';
import DateModal from '../../components/Modal/Components/DateModal/DateModal';
import Checkbox from '@mui/material/Checkbox';
import DosagemModal from '../../components/Modal/Components/DosagemModal/dosagemModal';



interface ModalEdicaoDosagemProps {
    isOpen: boolean;
    onClose: () => void;
    dosagemRecebida?: string;
    frequenciaRecebida?: string;
    dataFinalRecebida?: string | "Uso contínuo";
}

export const ModalEdicaoDosagem: React.FC<ModalEdicaoDosagemProps> = ({
    isOpen,
    onClose,
    dosagemRecebida,
    frequenciaRecebida,
    dataFinalRecebida,
}) => {
    const [usoContinuo, setUsoContinuo] = useState(false);
    const [dosagem, setDosagem] = useState(dosagemRecebida || '');
    const [frequencia, setFrequencia] = useState(frequenciaRecebida || '');
    const [dataFinal, setDataFinal] = useState(dataFinalRecebida || '');
    const [erroData, setErroData] = useState(false);
    const [mensagemErroData, setMensagemErroData] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState('mg');

    const resetModal = () => {
        setDosagem('');
        setFrequencia('');
        setDataFinal('');
        setUsoContinuo(false);
        setErroData(false);
        setMensagemErroData('');
        setUnidadeMedida('mg');
    };

    useEffect(() => {
        if (usoContinuo) {
            setErroData(false);
            setMensagemErroData('');
        }
    }, [usoContinuo]);

    useEffect(() => {
        if (dataFinal) {
            setErroData(false);
            setMensagemErroData('');
        }
    }, [dataFinal]);

    const handleAddMedicamento = () => {
        if (!dataFinal && !usoContinuo) {
            setErroData(true);
            setMensagemErroData("Por favor, selecione um dos campos em vermelho");
            return;
        } else {
            setErroData(false);
            setMensagemErroData("");
        }

        onClose();
        resetModal();
    };

    return (
        <Modal
            isOpen={isOpen}
            title=" Medicamento"
            isClose={() => {
                onClose();
                resetModal();
            }}
        >
            <form>
                <div className='dosagem-medicamentos-box'>
                    <div className="content-texto-modal">
                        <DosagemModal
                            dosagem={dosagem}
                            unidadeMedida={unidadeMedida}
                            onDosagemChange={(novaDosagem: string) => setDosagem(novaDosagem)}
                            onUnidadeMedidaChange={(novaUnidade: string) => setUnidadeMedida(novaUnidade)}
                        />
                    </div>
                    <div className="frequencia-data">
                        <SelectFrequencia
                            value={frequencia}
                            onChange={(selectedValue) => setFrequencia(selectedValue)}
                        />
                        <DateModal
                            value={dataFinal}
                            onChange={(selectedDate) => setDataFinal(selectedDate)}
                            disabled={usoContinuo}
                            error={erroData}
                            helperText={mensagemErroData}
                        />
                    </div>
                </div>
                <div className="checkbox-container">
                    <Checkbox
                        id="uso-continuo"
                        className={erroData ? 'checkbox-error' : ''}
                        checked={usoContinuo}
                        onChange={() => setUsoContinuo(!usoContinuo)}
                        inputProps={{ 'aria-label': 'Uso contínuo' }}
                    />
                    <label htmlFor="uso-continuo">Uso contínuo</label>

                </div>
                <div className="button-save">
                    <CustomButton label="Salvar" variant="contained" onClick={handleAddMedicamento} />
                </div>
            </form>
        </Modal>
    );
};