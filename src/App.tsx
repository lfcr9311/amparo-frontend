import React from 'react';
import PatientProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <PatientProfileCard name="Xanflis" cpf='12345678900' dataNascimento='23/11/1993' email='evq@qdv.com'/>
    </div>
  );
}

export default App;
