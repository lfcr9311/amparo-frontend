import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './routes/AppRoutes.css';
import { ROUTES } from './routes/constans';
import { Login } from './pages/Login/Login';
import HomePaciente from './pages/HomePaciente/HomePaciente';
import VisualizacaoPerfilPaciente from './pages/VisualizarPerfil/VisualizarPerfil';
import ExamesPacienteVazio from './pages/ExamesPacienteVazio/ExamesPacienteVazio';
import ExamesPendentesVazio from './pages/ExamesPendentes/ExamesPendentesVazio';
import { CadastroPaciente } from './pages/CadastroPaciente/CadastroPaciente';
import { CadastroMedico } from './pages/CadastroMedico/CadastroMedico';
import { Identificacao } from './pages/Identificacao/Identificacao';
import { CardMedicamentos } from './components/CardMedicamentos/cardMedicamentos';

export default function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path={ROUTES.CARD_MEDICAMENTOS()} element={<CardMedicamentos label={'TEXTO'} onClick= />} />

          <Route path={ROUTES.HOME_PACIENTE()} element={<HomePaciente />} />
          <Route
            path={ROUTES.CADASTRO_PACIENTE()}
            element={<CadastroPaciente />}
          />
          <Route path={ROUTES.CADASTRO_MEDICO()} element={<CadastroMedico />} />
          <Route path={ROUTES.IDENTIFICACAO()} element={<Identificacao />} />
          <Route
            path={ROUTES.EXAMES_PENDENTES_VAZIO()}
            element={<ExamesPendentesVazio />}
          />
          <Route
            path={ROUTES.EXAMES_REALIZADOS_VAZIO()}
            element={<ExamesPacienteVazio />}
          />
          <Route path={ROUTES.LOGIN()} element={<Login />} />
          <Route
            path={ROUTES.PERFIL_PACIENTE()}
            element={<VisualizacaoPerfilPaciente />}
          />
        </Routes>
      </div>
    </Router>
  );
}
