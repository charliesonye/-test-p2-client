import React from 'react'
import Question from './Question'

import questions from './Data'

 function Questions({PageTitleStyle, score, setScore}) {
    let questionsList = questions.map(question => question )
  return (
    <div className='Questions'>
      <br />
      <h1>  Test Your Knowledge</h1>
      <hr />
      <Question questions={questionsList} score={score} setScore={setScore} />
      <br />
      <br /> 
     
    </div>
  )
}

export default Questions
