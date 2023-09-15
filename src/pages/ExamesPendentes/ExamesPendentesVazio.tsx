import React from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Footer from "../../components/Footer";
import "./ExamesPendentesVazio.css";
import Triste from "../../assets/Feliz.svg";
import AddCircle from "../../assets/addCircle.svg";
import { useNavigate } from "react-router";

const ExamesPendentesVazio: React.FC = () => {
  const navigate = useNavigate();

  // placeholder do botão add para trocarmos entre as tabs de exames durante a apresentação
  const handleClickAddButton = () =>{
    navigate('/perfil/exames-realizados-vazio')
  }

  return (
    <>
      <div className="header">
        <HeaderHome title="Pendentes" />
      </div>
      <div className="exames-pendentes-vazio">
        <div className="texto">Nenhum exame pendente</div>
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

export default ExamesPendentesVazio;
