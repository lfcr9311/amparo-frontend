import { ListaInteracoes } from '../../components/ListaDeMedicamentosRebaixada/ListaDeMedicamentosRebaixada';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';
import './TelaMedicamento.css';




const US19TelaMedicamento = () => {


    return (
        <>
            <HeaderHome title="Medicamentos" type="headerPage" />
            <div className='body-container'>

                <div>

                    <ListaInteracoes items={[
                    { name: 'Paracetamol', status: 'desconhecido' },
                    { name: 'Ibuprofeno', status: 'desconhecido' },
                    { name: 'Amoxicilina', status: 'desconhecido' },
                    { name: 'Omeprazol', status: 'bom' },
                    { name: 'Sertralina', status: 'medio' },
                    { name: 'Metformina', status: 'ruim' },
                    { name: 'Atorvastatina', status: 'bom' },
                    { name: 'Loratadina', status: 'medio' },
                    { name: 'Lisinopril', status: 'ruim' },
                    { name: 'Diclofenaco', status: 'bom' },
                    { name: 'Ranitidina', status: 'medio' },
                    { name: 'Pantoprazol', status: 'ruim' },
                    { name: 'Ciprofloxacino', status: 'bom' },
                    { name: 'Metronidazol', status: 'medio' },
                    { name: 'Furosemida', status: 'ruim' },
                    { name: 'Dexametasona', status: 'bom' },
                    { name: 'Fluoxetina', status: 'medio' },
                    { name: 'Tramadol', status: 'ruim' }]} name={'Aspirina'}
                    />


                </div>

            </div>
            <Footer user="patient" />
        </>
    );
};

export default US19TelaMedicamento;