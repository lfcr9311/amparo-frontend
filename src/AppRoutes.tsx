import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './routes/AppRoutes.css';
import { ROUTES } from './routes/constans';
import { Login } from './pages/Login/Login';
import HomePaciente from './pages/HomePaciente/HomePaciente';
import VisualizacaoPerfilPaciente from './pages/VisualizarPerfil/VisualizarPerfil';
import ExamesRealizadosVazio from './pages/ExamesRealizadosVazio/ExamesRealizadosVazio';
import ExamesPendentesVazio from './pages/ExamesPendentesVazio/ExamesPendentesVazio';
import { CadastroPaciente } from './pages/CadastroPaciente/CadastroPaciente';
import { CadastroMedico } from './pages/CadastroMedico/CadastroMedico';
import { Identificacao } from './pages/Identificacao/Identificacao';
import HomeMedico from './pages/HomeMedico/HomeMedico';
import VisualizacaoPerfilMedico from './pages/VisualizarPerfilMedico/VisualizarPerfilMedico';
import {isLoggedIn} from './utils/authService'
import MenuMedicamentos from './pages/MenuMedicamentos/MenuMedicamentos';
import ListaMedicamentos from './pages/ListaMedicamentos/ListaMedicamentos';
import ExamesPendentes from './pages/ExamesPendentes/ExamesPendentes';
import React from 'react';
export default function AppRoutes() {
  
  function PrivateRoute({ children }: { children: React.ReactNode }) {
    console.log("i'm here");
    isLoggedIn().then((isAuthenticated) => {
      console.log(isAuthenticated);
      if (isAuthenticated == null) {
        // If the user is not authenticated, redirect them to the login page
        return <Route path={ROUTES.LOGIN()} element={<Login />} />;
      }
    });

    return children;
  }

  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={ROUTES.HOME_MEDICO()} element={<HomeMedico />} />

          <Route path={ROUTES.HOME_PACIENTE()} 
          element={   <PrivateRoute>
                      <HomePaciente/>
                      </PrivateRoute>
            } />
          <Route
            path={ROUTES.CADASTRO_PACIENTE()}
            element={<CadastroPaciente />}
          />
          <Route path={ROUTES.CADASTRO_MEDICO()} element={<CadastroMedico />} />
          <Route path={ROUTES.IDENTIFICACAO()} element={<Identificacao />} />
          <Route
            path={ROUTES.EXAMES_PENDENTES_VAZIO()}
            element={<ExamesPendentes/>}
          />
          <Route
            path={ROUTES.EXAMES_REALIZADOS_VAZIO()}
            element={<ExamesRealizadosVazio />}
          />
          <Route path={ROUTES.LOGIN()} element={<Login />} />
          <Route
            path={ ROUTES.PERFIL_PACIENTE() }
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

          <Route path={ROUTES.LISTA_EXAMES()} element={<ExamesPendentes />} />
        </Routes>
      </div>
    </Router>
  );
}
