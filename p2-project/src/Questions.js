import React, {useState, useEffect} from 'react'

 function Questions() {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

  const questionsList = questions.map((q)=> < Question key={q.id} />)


  return (
    <div className='Questions'>
      {questionList}

    </div>
  )
}

export default Questions
