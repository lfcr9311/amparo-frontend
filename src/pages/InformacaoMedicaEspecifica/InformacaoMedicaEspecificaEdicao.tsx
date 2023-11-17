import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './InformacaoMedicaEspecificaEdicao.css';

export default function EditarInformacaoMedicaEspecifica() {
    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />
            <div className="container-especific-info">
                <div className="container-especific-info-title">

                //Título deve vir aqui

                </div>
                <div className="date-doctor-name-crm">

                //Data, nome do médico e CRM devem vir aqui

                </div>
                <div className="container-especific-info-text">

                //Texto deve vir aqui

                </div>
                <div className="container-especific-info-link">
                    Referências:
                    <div className="container-especific-info-link-text">

                //Links devem vir aqui

                    </div>
                </div>
                <p className='update-info'>Editar Informação</p>
            </div>
            <Footer user="patient" />
        </>
    );
}
