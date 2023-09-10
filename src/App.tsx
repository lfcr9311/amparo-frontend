import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';

// Quando o componente CadastroPaciente estiver disponível, você pode descomentar o import abaixo.
// import CadastroPaciente from './pages/CadastroPaciente/CadastroPaciente';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    {/* Descomente a linha abaixo quando o componente CadastroPaciente estiver disponível */}
                    {/* <Route path="/cadastro-paciente" element={<CadastroPaciente />} /> */}
                    <Route path="*" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
