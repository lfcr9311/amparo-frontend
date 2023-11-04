import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './routes/AppRoutes.css';
import { ROUTES } from './routes/constans';
import { Login } from './pages/Login/Login';
//@ts-ignore
import HomePaciente from './pages/HomePaciente/HomePaciente';
import VisualizacaoPerfilPaciente from './pages/VisualizarPerfil/VisualizarPerfil';
import { CadastroPaciente } from './pages/CadastroPaciente/CadastroPaciente';
import { CadastroMedico } from './pages/CadastroMedico/CadastroMedico';
import { Identificacao } from './pages/Identificacao/Identificacao';
import HomeMedico from './pages/HomeMedico/HomeMedico';
import VisualizacaoPerfilMedico from './pages/VisualizarPerfilMedico/VisualizarPerfilMedico';
import { isLoggedIn, setUserId } from './utils/authService'
import MenuMedicamentos from './pages/MenuMedicamentos/MenuMedicamentos';
import ListaMedicamentos from './pages/ListaMedicamentos/ListaMedicamentos';
import Exames from './pages/Exames/Exames';
import EdicaoExamePendente from './pages/EdicaoExamePendente/EdicaoExamePendente';
import EdicaoExameRealizado from './pages/EdicaoExameRealizado/EdicaoExameRealizado';
import ListaDeInteracaoDoMedicamento from './pages/ListaDeInteracaoDoMedicamento/ListaDeInteracaoDomedicamento';
import MeusMedicos from './pages/MeusMedicos/MeusMedicos';
import PageMedico from './components/FiltroBuscaMedico/PageMedico';
import { ListaInteracoesRebaixada } from './components/ListaDeMedicamentosRebaixada/ListaDeMedicamentosRebaixada';
import US21ListaDeInteracaoMedicamentos from './pages/ListaDeInteracaoDoMedicamento/ListaDeInteracaoDomedicamento';

export default function AppRoutes() {
  const fetchData = async () => {
    await setUserId()
  }
  function PrivateRoute({ children }: { children: React.ReactNode }) {
    isLoggedIn().then((isAuthenticated) => {
      if (!isAuthenticated) {
        return children;

        return window.location.href = ROUTES.LOGIN();
      }
      else if (localStorage.getItem('userId') == null) {

        fetchData()
      }
    });

    return children;
  }


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={ROUTES.HOME_MEDICO()}
            element={<PrivateRoute>
              <HomeMedico />
            </PrivateRoute>
            }
          />
          <Route path={ROUTES.LISTADEINTERACAODOMEDICAMENTO()}
            element={<PrivateRoute>
              <US21ListaDeInteracaoMedicamentos />
            </PrivateRoute>
            }
          />

          <Route path={ROUTES.LISTAREBAIXADA()}
            element={<PrivateRoute>
              <ListaInteracoesRebaixada items={[
                { name: 'Paracetamol', status: 3 },
                { name: 'CIbuprofeno', status: 1 },
                { name: 'Amoxicilina', status: 2 },
                { name: 'AParacetamol', status: 3 },
                { name: 'Ibuprofeno', status: 1 },
                { name: 'BAmoxicilina', status: 2 },
                { name: 'BParacetamol', status: 3 },
                { name: 'DIbuprofeno', status: 1 },
                { name: 'CAmoxicilina', status: 2 },
              ]} name={'Aspirina'} />


            </PrivateRoute>
            } />

          <Route path={ROUTES.LISTADEINTERACAODOMEDICAMENTO()}
            element={
              <PrivateRoute>
                <ListaDeInteracaoDoMedicamento />
              </PrivateRoute>
            } />
          <Route path={ROUTES.FILTROBUSCAMEDICO()} element={
            <PrivateRoute>
              <PageMedico />
            </PrivateRoute>
          } />
          <Route
            path={ROUTES.CADASTRO_PACIENTE()}
            element={<CadastroPaciente />}
          />
          <Route path={ROUTES.CADASTRO_MEDICO()} element={<CadastroMedico />} />
          <Route path={ROUTES.IDENTIFICACAO()} element={<Identificacao />} />
          <Route path={ROUTES.LOGIN()} element={<Login />} />
          <Route
            path={ROUTES.PERFIL_PACIENTE()}
            element={
              <PrivateRoute>
                <VisualizacaoPerfilPaciente />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.PERFIL_MEDICO()}
            element={
              <PrivateRoute>
                <VisualizacaoPerfilMedico />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.PERFIL_PACIENTE_MEUS_MEDICOS()}
            element={
              <PrivateRoute>
                <MeusMedicos />
              </PrivateRoute>
            }
          />

          <Route
            path={ROUTES.MENU_MEDICAMENTOS()}
            element={
              <PrivateRoute>
                <MenuMedicamentos />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.LISTA_MEDICAMENTOS()}
            element={
              <PrivateRoute>
                <ListaMedicamentos />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.EDICAO_EXAMES_PENDENTES()}
            element={
              <PrivateRoute>
                <EdicaoExamePendente />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.EDICAO_EXAMES_REALIZADOS()}
            element={
              <PrivateRoute>
                <EdicaoExameRealizado />
              </PrivateRoute>
            }
          />
          <Route path={ROUTES.EXAMES()} element={
            <PrivateRoute>
              <Exames />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}
