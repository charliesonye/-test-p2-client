import React, {useState, useEffect} from 'react'
import Question from './Question'

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
      {questionsList}

    </div>
  )
}

export default Questions
