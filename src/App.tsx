import React, { useState } from "react";
import SelectComponent from "./components/Select";
import { SelectChangeEvent } from "@mui/material";

function App() {
  const [selectedState, setSelectedState] = useState(""); 

  const handleStateChange = (event: SelectChangeEvent) => {
    setSelectedState(event.target.value as string); 
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <SelectComponent 
        label="Estado"
        value={selectedState}
        onChange={handleStateChange}
      />
    </div>
  );
}

export default App;
