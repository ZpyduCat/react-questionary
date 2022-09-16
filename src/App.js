import React from "react";
import InteractiveForm from "./Components/InteractiveForm";
import Questions from "./questions.json";

function App() {
  return (
    <div>
      <InteractiveForm questions={Questions} />
    </div>
  );
}

export default App;
