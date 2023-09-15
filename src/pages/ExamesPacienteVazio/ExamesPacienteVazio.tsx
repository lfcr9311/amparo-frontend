import React from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Footer from "../../components/Footer";
import "./ExamesPacientevazio.css";
import Triste from "../../assets/triste.svg";
import AddCircle from "../../assets/addCircle.svg";
import { useNavigate } from "react-router";

const ExamesPacienteVazio: React.FC = () => {
  const navigate = useNavigate();

  //placeholder do botão add para trocarmos entre as tabs de exames durante a apresentação
  const handleClickAddButton = () => {
    navigate('/perfil/exames-pendentes-vazio')
  }
  return (
    <>
      <div className="header">
        <HeaderHome title="Realizados" />
      </div>
      <div className="exames-paciente-vazio">
        <div className="texto">Nenhum exame realizado</div>
        <div className="icon1">
          <img src={Triste} /> <br />
        </div>
        <div className="add-button">
          <button onClick={handleClickAddButton} className="botao">
            <img src={AddCircle} />
          </button>
        </div>
        <div className="texto2">Adicionar</div>
      </div>
      <Footer/>
    </>
  );
};

export default ExamesPacienteVazio;
