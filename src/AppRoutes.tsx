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
import { ListaInteracoes } from './components/ListaInteracoes/ListaInteracoes';
import  FiltroBuscaMedicamentos  from './components/FiltroBuscaMedicamentos/FiltroBuscaMedicamentos';
import Teste from './components/Teste/Teste';

export default function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path={ROUTES.LISTA_INTERACOES()} element={<ListaInteracoes items={[{ name: 'Medication A', status: 'bom' },
  { name: 'Medication B', status: 'medio' },  { name: 'Medication C', status: 'ruim' },{ name: 'Medication A', status: 'bom' },
  { name: 'Medication B', status: 'medio' },  { name: 'Medication C', status: 'ruim' },{ name: 'Medication A', status: 'bom' },
  { name: 'Medication B', status: 'medio' },  { name: 'Medication C', status: 'ruim' },{ name: 'Medication A', status: 'bom' },
  { name: 'Medication B', status: 'medio' },  { name: 'Medication ', status: 'ruim' },]} />} />
          <Route path={ROUTES.HOME_MEDICO()} element={<HomeMedico />} />
          <Route path={ROUTES.FILTRO_BUSCA_MEDICAMENTOS()} element={<FiltroBuscaMedicamentos onStatusChange={function (status: string): void {
            throw new Error('Function not implemented.');
          } } onNameChange={function (name: string): void {
            throw new Error('Function not implemented.');
          } } />} />
            <Route path={ROUTES.TESTE()} element={<Teste />} />

          <Route path={ROUTES.HOME_PACIENTE()} element={<HomePaciente />} />
          <Route
            path={ROUTES.CADASTRO_PACIENTE()}
            element={<CadastroPaciente />}
          />
          <Route path={ROUTES.CADASTRO_MEDICO()} element={<CadastroMedico />} />
          <Route path={ROUTES.IDENTIFICACAO()} element={<Identificacao />} />
          
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

        </Routes>
      </div>
    </Router>
  );
}
