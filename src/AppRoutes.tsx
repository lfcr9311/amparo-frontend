import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './routes/AppRoutes.css';
import { ROUTES } from './routes/constans';
import { Login } from './pages/Login/Login';
import HomePaciente from './pages/HomePaciente/HomePaciente';
import VisualizacaoPerfilPaciente from './pages/VisualizarPerfil/VisualizarPerfil';
import { CadastroPaciente } from './pages/CadastroPaciente/CadastroPaciente';
import { CadastroMedico } from './pages/CadastroMedico/CadastroMedico';
import { Identificacao } from './pages/Identificacao/Identificacao';
import HomeMedico from './pages/HomeMedico/HomeMedico';
import VisualizacaoPerfilMedico from './pages/VisualizarPerfilMedico/VisualizarPerfilMedico';
import MenuMedicamentos from './pages/MenuMedicamentos/MenuMedicamentos';
import ListaMedicamentos from './pages/ListaMedicamentos/ListaMedicamentos';
import ExamesVazio from './pages/ExamesVazio/ExamesVazio';
import Exames from './pages/Exames/Exames';
import EdicaoExamePendente from './pages/EdicaoExamePendente/EdicaoExamePendente';
import EdicaoExameRealizado from './pages/EdicaoExameRealizado/EdicaoExameRealizado';
import ExamesPendentes from './pages/ExamesPendentes/ExamesPendentes';
import Solicitacao from './components/Modal/Components/Solicitacao/SolicitacaoModal';
import SolicitacaoEnviada from './components/Modal/Components/Solicitacao/SolicitacaoEnviada';
import ListaDeInteracaoDoMedicamento from './pages/ListaDeInteracaoDoMedicamento/ListaDeInteracaoDomedicamento';
import PageMedico from './components/FiltroBuscaMedico/PageMedico';

import ModalPerfilPaciente from './components/ModalPerfilPaciente/ModalPerfilPaciente';
import {Nome} from './components/ModalPerfilPaciente/ComponentsModalPaciente/NomePerfil/NomePerfil.tsx';
import {Informacoes} from './components/ModalPerfilPaciente/ComponentsModalPaciente/DadosPessoais/DadosPessoais.tsx';
import {Botoes} from './components/ModalPerfilPaciente/ComponentsModalPaciente/ButtonsDoModal/ButtonsDoModal.tsx';





export default function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <Routes>


          <Route path={ROUTES.MODALPACIENTE()} element={<ModalPerfilPaciente isOpen={true} isClose={undefined} name={'José da aaaaaaaaaaSilva'} cpf={'123123'} email={'123123'} nSus={'123213'}
            onclickExames={() => {console.log("Click");}} onclickMedicamentos={() => {console.log("Click");}} />} />
          <Route path={ROUTES.NOMEPERFIL()} element={<Nome name={'Jao'} />} />
          <Route path={ROUTES.DADOSPERFIL()} element={<Informacoes cpf={'1234'} email={'lucas@lucaslucas'} nSus={'987654321'} />} />

          <Route path={ROUTES.MODALBOTAO()} element={<Botoes onclickExames={() => {console.log("Click");}} onclickMedicamentos={() => {console.log("Click");}} />} />


          <Route path={ROUTES.HOME_MEDICO()} element={<HomeMedico />} />
          <Route path={ROUTES.LISTADEINTERACAODOMEDICAMENTO()} element={<ListaDeInteracaoDoMedicamento />} />
          <Route path={ROUTES.FILTROBUSCAMEDICO()} element={<PageMedico />} />
          <Route path={ROUTES.HOME_PACIENTE()} element={<HomePaciente />} />
          <Route
            path={ROUTES.CADASTRO_PACIENTE()}
            element={<CadastroPaciente />}
          />
          <Route path={ROUTES.CADASTRO_MEDICO()} element={<CadastroMedico />} />
          <Route path={ROUTES.IDENTIFICACAO()} element={<Identificacao />} />
          <Route path={ROUTES.EXAMES_VAZIO()} element={<ExamesVazio />} />
          <Route path={ROUTES.LOGIN()} element={<Login />} />
          <Route
            path={ROUTES.PERFIL_PACIENTE()}
            element={<VisualizacaoPerfilPaciente />}
          />
          <Route
            path={ROUTES.PERFIL_MEDICO()}
            element={<VisualizacaoPerfilMedico />}
          />
          <Route
            path={ROUTES.MENU_MEDICAMENTOS()}
            element={<MenuMedicamentos />}
          />
          <Route
            path={ROUTES.LISTA_MEDICAMENTOS()}
            element={<ListaMedicamentos />}
          />
          <Route
            path={ROUTES.EDICAO_EXAMES_PENDENTES()}
            element={<EdicaoExamePendente />}
          />
          <Route
            path={ROUTES.EDICAO_EXAMES_REALIZADOS()}
            element={<EdicaoExameRealizado />}
          />
          <Route path={ROUTES.EXAMES()} element={<Exames />} />
        </Routes>
      </div>
    </Router>
  );
}
