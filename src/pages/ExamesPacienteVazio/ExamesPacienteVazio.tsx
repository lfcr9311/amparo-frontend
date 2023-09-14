import React from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Footer from "../../components/Footer";
import "./ExamesPacientevazio.css";
import Triste from "../../assets/triste.svg";
import AddCircle from "../../assets/addCircle.svg";

const ExamesPacienteVazio: React.FC = () => {
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
          <button onClick={() => console.log("Exame")} className="botao">
            <img src={AddCircle} />
          </button>
        </div>
        <div className="texto2">Adicionar</div>
      </div>
      <Footer
        onClickHome={() => console.log("Home")}
        onClickChat={() => console.log("Chat")}
        onClickPerfil={() => console.log("Perfil")}
      />
    </>
  );
};

export default ExamesPacienteVazio;
