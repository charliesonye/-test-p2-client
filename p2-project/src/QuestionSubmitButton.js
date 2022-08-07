import React from 'react'
import {Link} from 'react-router-dom'

 function QuestionSubmitButton() {
  return (
    <div>
        <Link to='/questions/score'   > 
            <button > See Your Score</button>
        </Link>
    </div>
  )
}

export default QuestionSubmitButton