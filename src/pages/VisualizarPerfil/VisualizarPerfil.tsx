import "./VisualizarPerfil.css";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Footer from "../../components/Footer";
import { PatientProfileCard } from "../../components/ProfilePatientCard/ProfilePatientCard";

const VisualizacaoPerfilPaciente = () => {
  return (
    <>
      <div className="header-container">
        <HeaderHome title="Ola Fulano" />
      </div>
      <div className="container">
        <div className="profile-card-container">
          <PatientProfileCard
            name="João"
            email="jpsouzadasilva@gmail.com"
            cpf="123.456.789-10"
            dataNascimento="01/01/2000"
            onClickChangePassword={() => console.log("Change Password")}
            onClickDoctors={() => console.log("Click Doctors")}
            onClickEditProfile={() => console.log("Edit Profile")}
            numSus="123456789"
          />
        </div>
        <span>
          <a className="delete-container" href="">
            Deletar Conta
          </a>
        </span>
      </div>
      <div className="footer-container">
        <Footer
          onClickChat={() => console.log("Chat")}
          onClickHome={() => console.log("Home")}
          onClickPerfil={() => console.log("Perfil")}
        />
      </div>
    </>
  );
};

export default VisualizacaoPerfilPaciente;
