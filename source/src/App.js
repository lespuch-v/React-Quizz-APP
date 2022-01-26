import React, { useEffect } from "react"
import { nanoid } from 'nanoid'
import Questions from "./components/Questions"
import Firstpage from "./components/Firstpage";
import './App.css';

function App() {
  const [questionData, setQuestionData] = React.useState([])
  const [firstPage, setFirstPage] = React.useState(false)
  const [score] = React.useState(5)


  useEffect(()=> {
    fetch("https://opentdb.com/api.php?amount=10&category=15&type=multiple&encode=base64")
      .then(res => res.json())
      .then(data => setQuestionData(data.results))
  },[])

  function toggleFirstPage(){
    setFirstPage(prevvalue => !prevvalue)
  }



  const updatedQuestions = questionData.map(item => {
    return <Questions 
      key={nanoid()}
      question={item.question} 
      correct_answer={item.correct_answer}
      incorrect_answers={item.incorrect_answers}
      lgn = {questionData.length}
      />
  })

  return (
    <div className="App">
      {firstPage == false ? <Firstpage toggleFirstPage={toggleFirstPage} /> : null}
      {firstPage && <h1>Test your GAMING🎲 knowledge!</h1>}
      {firstPage &&<h2>data provided by API - <a href="https://opentdb.com/">OpentDB</a>  </h2>}
      {firstPage && updatedQuestions}
    </div>
  );
}

export default App;
