import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import Modal from './components/Modal/Modal';
import Home from './pages/Home/Home';
import './App.css'
import VisualizacaoPerfilPaciente from './pages/VisualizarPerfil/VisualizarPerfil';
// Quando os componentes CadastroPaciente e EsqueceuSenha estiverem disponíveis, descomentar os imports abaixo.
// import CadastroPaciente from './pages/CadastroPaciente/CadastroPaciente';
// import EsqueceuSenha from './pages/EsqueceuSenha/EsqueceuSenha';

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  {/*<Route path="/" element={<Login />} />*/}
                  {/* Descomente as linhas abaixo quando os componentes estiverem disponíveis */}
                  {/* <Route path="/cadastro-paciente" element={<CadastroPaciente />} /> */}
                  {/* <Route path="/esqueceu-senha" element={<EsqueceuSenha />} /> */}
                  {/*<Route path="*" element={<Login />} />*/}
                  <Route path="/perfil" element={<VisualizacaoPerfilPaciente />}/>
                  <Route path="*" element={<Home/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;