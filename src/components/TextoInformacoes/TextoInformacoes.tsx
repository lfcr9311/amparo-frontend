import React from "react";
import "./ComponentTextoInformacoes.css";

interface TextoInformacoesProps {
    titulo: string;
    previa: string;
    autor: string;
    data: string;
    texto: string;
    referencias: string[];
}

const ComponentTextoInformacoes: React.FC<TextoInformacoesProps> = ({
    titulo,
    previa,
    autor, //para quem  for fazer a integração, o molde do autor vai ser Dr.Nome (CRM/UF 123456)
    data,
    texto,
    referencias,
}) => {
    return (
        <div className="texto-informacoes-box">
            <div className="texto-informacoes-titulo">{titulo}</div>

            <div className="texto-informacoes-previa">{previa}</div>
            <br />
            <div className="texto-informacoes-data-autor">{data},{autor}</div>
            <br />
            <div className="texto-informacoes-texto">{texto}</div>
            <br />
            <div className="texto-titulo-referencia">Referências</div>
            <br />
            <div className="texto-informacoes-referencias" >{referencias.map(x => <a key={x} href={x}> {x} </a>)}</div>
        </div>
    );
};

export default ComponentTextoInformacoes;
