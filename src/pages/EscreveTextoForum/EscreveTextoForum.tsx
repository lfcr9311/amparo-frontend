import React from "react";
import { MultilineTextFields } from "../../components/TextFieldForum/ComponentTextFieldForum";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Footer from "../../components/Footer/Footer";


export default function EscreveTextoForumProps() {
    return (
        <>
            <HeaderHome title="Informações" type="headerPage" />        <div className="texto-informacoes-box">
                <div className="texto-informacoes-titulo">
                    <MultilineTextFields tituloDoTextField={"Título"}
                        quantidadeLinhas={2}
                        mensagemQuadroEmBranco={"Insira o título"}
                    />
                </div>

                <div className="texto-informacoes-previa"></div>
                <br />
                <div className="texto-informacoes-data-autor"></div>
                <br />
                <div className="texto-informacoes-texto"></div>
                <br />
                <br />
                <div className="texto-informacoes-referencias"></div>
            </div>
            <Footer user="patient" />
        </>
    );
};

