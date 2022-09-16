import React from "react";
import Interactive from "./Components/InteractiveForm";
import Questions from "./questions.json";

function App() {
  return (
    <div>
      <Interactive questions={Questions} />
    </div>
  );
}

export default App;
