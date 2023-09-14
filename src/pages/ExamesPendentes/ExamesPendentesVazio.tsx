import React from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Footer from "../../components/Footer";
import "./ExamesPendentesVazio.css";
import Triste from "../../assets/Feliz.svg";
import AddCircle from "../../assets/addCircle.svg";

const ExamesPendentesVazio: React.FC = () => {
  return (
    <>
      <div className="header">
        <HeaderHome title="Exames Pendentes" />
      </div>
      <div className="exames-pendentes-vazio">
        <div className="texto">Nenhum exame pendente</div>
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

export default ExamesPendentesVazio;
