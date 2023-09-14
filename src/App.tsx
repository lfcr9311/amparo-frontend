import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import Home from './pages/Home/Home';
import './App.css'
import VisualizacaoPerfilPaciente from './pages/VisualizarPerfil/VisualizarPerfil';
import { CadastroPaciente } from './pages/CadastroPaciente/CadastroPaciente';
import { CadastroMedico } from './pages/CadastroMedico/CadastroMedico';
import { Identificacao } from './pages/Identifficacao/Indentificacao';
// Quando os componentes CadastroPaciente e EsqueceuSenha estiverem disponíveis, descomentar os imports abaixo.
// import EsqueceuSenha from './pages/EsqueceuSenha/EsqueceuSenha';

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  {/*<Route path="/" element={<Login />} />*/}
                  {/* Descomente as linhas abaixo quando os componentes estiverem disponíveis */}
                  <Route path="/home/paciente" element={<Home/>} />
                   <Route path="/cadastro/paciente" element={<CadastroPaciente />} />
                   <Route path="/cadastro/medico" element={<CadastroMedico />} />
                  <Route path='/identificacao' element={<Identificacao/>}/>
                  {/* <Route path="/esqueceu-senha" element={<EsqueceuSenha />} /> */}
                  <Route path="*" element={<Login />} />
                  <Route path="/perfil/paciente" element={<VisualizacaoPerfilPaciente />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;