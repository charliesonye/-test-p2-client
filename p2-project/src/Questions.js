import React from 'react'
import Question from './Question'

import questions from './Data'

 function Questions() {


  return (
    <div className='Questions'>
      <br />
      <h1>  Test Your Knowlege</h1>
      <hr />
      <Question questions={questions} />
      <br />
      <br /> 
     
    </div>
  )
}

export default Questions
