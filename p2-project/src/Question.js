import React from 'react'

function Question({questionObj}) {
  
    const {id, prompt, answers} = questionObj

    const answersList = answers.map(answer => {
      return(
        <option value={answer}>
          {answer}
        </option>
      )
    })

    return (
    <div className='Question'>
       
       <br/>
       <br/>
        
       
       <br/>
       <br/>
       <h4>Question {id}</h4>
        <p>
            {prompt} 
        </p>
        <select>{answersList}</select>
    </div>
  )
}

export default Question