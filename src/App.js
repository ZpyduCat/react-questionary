import React from "react";
import Interactive from "./Interactive";
import Questions from "./questions.json";

function App() {
  return (
    <div>
      <Interactive questions={Questions} />
    </div>
  );
}

export default App;
