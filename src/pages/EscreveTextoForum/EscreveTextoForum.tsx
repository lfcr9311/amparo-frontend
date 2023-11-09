
import { MultilineTextFields } from "../../components/TextFieldForum/ComponentTextFieldForum";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Footer from "../../components/Footer/Footer";
import CustomButton from '../../components/Button/Button';

import "./EscreveTextoForum.css";


export default function EscreveTextoForumProps() {
    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />
            <div className="escreve-informacoes-box">
                <div >
                    <MultilineTextFields tituloDoTextField={"Título"}
                        quantidadeLinhas={2}
                        mensagemQuadroEmBranco={"Insira o título..."}
                    />
                </div>
                <br />

                <div >
                    <MultilineTextFields tituloDoTextField={"Subtítulo"}
                        quantidadeLinhas={2}
                        mensagemQuadroEmBranco={"Insira a prévia..."}
                    />
                </div>
                <br />

                <div>
                    <MultilineTextFields tituloDoTextField={"Texto Informativo"}
                        quantidadeLinhas={10}
                        mensagemQuadroEmBranco={"Insira o texto..."}
                    />
                </div>
                <br />
                <div >
                    <MultilineTextFields tituloDoTextField={"Links"}
                        quantidadeLinhas={3}
                        mensagemQuadroEmBranco={"Insira as referências separadas por virgula..."}
                    />
                </div>



                <div className="escreve-button-salvar">
                    <CustomButton
                        variant="contained"
                        label="Salvar"
                    // onClick={() => console.log('salvar')}        
                    />
                </div>

            </div>
            <Footer user="patient" />
        </>
    );
};

