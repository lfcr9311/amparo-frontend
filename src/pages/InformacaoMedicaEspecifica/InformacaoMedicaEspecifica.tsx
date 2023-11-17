import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import './InformacaoMedicaEspecifica.css';

export default function InformacaoMedicaEspecifica() {
    const location = useLocation()
    const { title, description, link }:any = location.state
    return (
        <>
        <HeaderHome title="Informações" type="headerPage" />
        <Box>
            <div className="container-especific-info">
                <div className="container-especific-info-title">
                   {title}

                </div>
                <div className="container-especific-info-text">
                
                {description}

                </div>
                <div className="container-especific-info-link">
                    Referências:
                    <div className="container-especific-info-link-text">
                        
                {link}

                    </div>
                </div>
            </div>
            </Box>
         <Footer user="patient" />
         </>
    );
}
