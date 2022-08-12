import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import ScoreDisplay from './ScoreDisplay'

function Question({questions}) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)
    const history = useHistory()
  
    let questionsList = questions.map(question => question )
    const question = questionsList


    let answerValues = question[currentQuestion].answers.map((answer, index) => answer)
        
    
    const answersList = questions[currentQuestion].answers.map((answer, index) => {
     console.log(answer)
      return(

       <option value={index} key={index}>{answer.answer}</option>
       
      )
    })

   


  function onHandleAnswer(isCorrect){
    const nextQ = currentQuestion + 1

   if(nextQ < questions.length){
    setCurrentQuestion(nextQ)
   }else{
    setShowResults(true)
   }

   if(isCorrect){
    // setScore(score + 1)
    // {debugger}
   }
  
  }

    return (
     <div>
         {showResults ?  (
          <ScoreDisplay  score = {score} /> 
        
         ): (

        
        <div className='Question'>
          <br/>
          <br/>
          <h4>Question {questions[currentQuestion].id}</h4>
          
          <p>{questions[currentQuestion].prompt} </p>
          {/* Use fetch  */}
          <select onChange= {() => onHandleAnswer() }>
                
                <option>Please choose an option</option>
                {answersList}
            </select>

          
        </div>
    
        )}

     </div>
  )
}

export default Question