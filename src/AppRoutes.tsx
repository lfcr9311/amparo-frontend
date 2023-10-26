import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
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
import {isLoggedIn} from './utils/authService'
import MenuMedicamentos from './pages/MenuMedicamentos/MenuMedicamentos';
import ListaMedicamentos from './pages/ListaMedicamentos/ListaMedicamentos';
import ExamesVazio from './pages/ExamesVazio/ExamesVazio';
import Exames from './pages/Exames/Exames';
import EdicaoExamePendente from './pages/EdicaoExamePendente/EdicaoExamePendente';
import EdicaoExameRealizado from './pages/EdicaoExameRealizado/EdicaoExameRealizado';
import ListaDeInteracaoDoMedicamento from './pages/ListaDeInteracaoDoMedicamento/ListaDeInteracaoDomedicamento';
import MeusMedicos from './pages/MeusMedicos/MeusMedicos';
import PageMedico from './components/FiltroBuscaMedico/PageMedico';

import ModalPerfilPaciente from './components/ModalPerfilPaciente/ModalPerfilPaciente';
import {Nome} from './components/ModalPerfilPaciente/ComponentsModalPaciente/NomePerfil/NomePerfil.tsx';
import {Informacoes} from './components/ModalPerfilPaciente/ComponentsModalPaciente/DadosPessoais/DadosPessoais.tsx';
import {Botoes} from './components/ModalPerfilPaciente/ComponentsModalPaciente/ButtonsDoModal/ButtonsDoModal.tsx';





export default function AppRoutes() {
  
  function PrivateRoute({ children }: { children: React.ReactNode }) {
    isLoggedIn().then((isAuthenticated) => {
      if (!isAuthenticated) {
        return window.location.href = ROUTES.LOGIN();
      }
    });
  
    return children;
  }

  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={ROUTES.HOME_MEDICO()} 
          element={ <PrivateRoute>
                    <HomeMedico />
                    </PrivateRoute>
          } 
            />

          <Route path={ROUTES.HOME_PACIENTE()} 
          element={   <PrivateRoute>
                      <HomePaciente/>
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
          <Route
            path={ROUTES.EXAMES_VAZIO()}
            element={
            <PrivateRoute>
              <ExamesVazio/>
            </PrivateRoute>
          }
          /> 
          <Route path={ROUTES.LOGIN()} element={<Login />} />
          <Route
            path={ ROUTES.PERFIL_PACIENTE() }
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
