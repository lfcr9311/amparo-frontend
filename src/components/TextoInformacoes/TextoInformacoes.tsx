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
            <div className="texto-informacoes-data-autor">{data},{autor}</div>
            <div className="texto-informacoes-texto">{texto}</div>
            <div className="texto-titulo-referencia">Referências</div>
            <div className="texto-informacoes-referencias" >{referencias.map(x => <a key={x} href={x}> {x} </a>)}</div>
        </div>
    );
};

export default ComponentTextoInformacoes;
