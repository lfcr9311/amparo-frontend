import { ListaInteracoesRebaixada } from '../../components/ListaDeMedicamentosRebaixada/ListaDeMedicamentosRebaixada';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './TelaMedicamento.css';
import { getIncompatibilyList } from '../../utils/apiService';
import { useState } from 'react';

interface MedicamentoProps {
    id: number;
    name:string;
}
export const TelaMedicamento: React.FC<MedicamentoProps> = ({ id, name }) => {


    const [listaIncompatibilidade, setListaIncompatibilidade] = useState<any[]>([]);
    useState(() => {
        getIncompatibilyList(id).then((listIncompatibility) => {
            setListaIncompatibilidade(listIncompatibility)
        });
    });

    return (
        <>
            <HeaderHome title="Medicamentos" type="headerPage" />
            <div className='body-container'>
                {listaIncompatibilidade.length === 0
                    ? <div className='title-body' title={'Sem interações'}>Sem interações</div>
                    : <ListaInteracoesRebaixada items={listaIncompatibilidade} name={name} />
                }
                <div>



                </div>

            </div>
            <Footer user="patient" />
        </>
    );
};

