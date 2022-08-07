import React, {useState, useEffect} from 'react'
import Question from './Question'
import QuestionSubmitButton from './QuestionSubmitButton'

 function Questions() {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

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
