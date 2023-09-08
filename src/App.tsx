import SelectComponent from "./components/Select";

function App() {
  return (
    <div className="App">
      <SelectComponent 
        label="UF"
        value=""
        onChange={() => console.log("Ola")}
      />
    </div>
  );
}

export default App;
