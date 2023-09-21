import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import HomePaciente from './pages/HomePaciente/HomePaciente';
import './App.css';
import VisualizacaoPerfilPaciente from './pages/VisualizarPerfil/VisualizarPerfil';
import ExamesPacienteVazio from './pages/ExamesPacienteVazio/ExamesPacienteVazio';
import ExamesPendentesVazio from './pages/ExamesPendentes/ExamesPendentesVazio';
import { CadastroPaciente } from './pages/CadastroPaciente/CadastroPaciente';
import { CadastroMedico } from './pages/CadastroMedico/CadastroMedico';
import { Identificacao } from './pages/Identificacao/Identificacao';
import { ButtonSalmon } from './components/ButtonSalmon/ButtonSalmon';

import setaConfirmaIcon from './assets/setaConfirmaIcon.png';

// Quando os componentes CadastroPaciente e EsqueceuSenha estiverem disponíveis, descomentar os imports abaixo.
// import EsqueceuSenha from './pages/EsqueceuSenha/EsqueceuSenha';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/*<Route path="/" element={<Login />} />*/}
          {/* Descomente as linhas abaixo quando os componentes estiverem disponíveis */}
          <Route path="/button-salmon" element={<ButtonSalmon label='Realizado' onClick={() => console.log('buttonSalmonClicado')} icon={<img src={setaConfirmaIcon} />} />} />
          <Route path="/home/paciente" element={<HomePaciente />} />
          <Route path="/cadastro/paciente" element={<CadastroPaciente />} />
          <Route path="/cadastro/medico" element={<CadastroMedico />} />
          <Route path="/identificacao" element={<Identificacao />} />
          <Route
            path="/perfil/exames-pendentes-vazio"
            element={<ExamesPendentesVazio />}
          />
          <Route
            path="/perfil/exames-realizados-vazio"
            element={<ExamesPacienteVazio />}
          />
          {/* <Route path="/esqueceu-senha" element={<EsqueceuSenha />} /> */}
          <Route path="*" element={<Login />} />
          <Route
            path="/perfil/paciente"
            element={<VisualizacaoPerfilPaciente />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
