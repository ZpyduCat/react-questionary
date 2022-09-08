import React, {useState} from 'react';
import QuestionForm from './Components/QuestionForm';

let test = {id: 3, title: 'Title', desc: "sus"}
let test2 = {id: 4, title: 'Title2', desc: <h2> I'm not dumb</h2>}
let test3 = {id: 5, title: 'Title3', desc: "red"}

function App() {
  const[curID, setCurId] = useState(1);
  const[info, setInfo] = useState(test);

  function buttonYes(){
    setInfo(test2);
  }

  function buttonNo(){
    setInfo(test3);
  }

  return (
    <div className="main">
      <QuestionForm buttons = {{buttonYes, buttonNo}} info={info}> </QuestionForm>
    </div>
  );
}

export default App;
