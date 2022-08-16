import React, {useState} from 'react'
import { useHistory } from "react-router-dom"


function Question({questions, score, setScore}) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    // const [showResults, setShowResults] = useState(false)
    // const [score, setScore] = useState(0)
    const history = useHistory()
   

  function onHandleAnswer(isCorrect){
    const nextQ = currentQuestion + 1

   if(nextQ < questions.length){
    setCurrentQuestion(nextQ)
   }else{
    history.push('/questions/score')
   }

   if(isCorrect){
    setScore(score + 1)
   
   }
  
  }

    return (
     <div>
        
        
        <div className='Question'>
          <br/>
          <br/>
          <h4>Question {questions[currentQuestion].id}</h4>
          
          <p>{questions[currentQuestion].prompt} </p>
          {/* Use fetch  */}
          {/* <select onChange= {() => onHandleAnswer() }>
                
                <option>Please choose an option</option>
                {answersList}
            </select> */}
            {
               questions[currentQuestion].answers.map((answer, index) => {
    
                return(
                //  <option value={index} key={index}>{answer.answer}</option>
                <button key={index} value={index} onClick={() => onHandleAnswer(answer.isCorrect)} >{answer.answer}</button>
                )
              })
            }

          
        </div>
    
        

     </div>
  )
}

export default Question