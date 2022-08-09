import React from 'react'
import Question from './QuestionForm'
import QuestionSubmitButton from './QuestionSubmitButton'

 function Questions({questions}) {

  
  
 

  const questionsList = questions.map((q)=> < Question key={q.id} questionObj={q} />)


  return (
    <div className='Questions'>
      <br />
      <h1>  Test Your Knowlege</h1>
      <hr />
      {questionsList}
      <br />
      <br /> 
      <QuestionSubmitButton />
    </div>
  )
}

export default Questions
