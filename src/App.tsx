import React from "react";
import { Cadastro } from "./pages/CadastroMedico/CadastroMedico"; // Certifique-se de importar o componente Cadastro corretamente

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cadastro />
      </div>
    );
  }
}

export default App;
