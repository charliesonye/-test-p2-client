import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

 function ScoreDisplay({score, setScore}) {
  
    const history = useHistory()
   
  function repeatTest (){
    history.push('/questions')
    setScore(0)
  }
    return (
    <div>
        <h1> Scoreboard</h1>
        <label> You scored {score}/5</label>
        <h3> {score < 3 ? "Good Attempt": "Great Job"}</h3>
      
        <button onClick={repeatTest}> Try Again?</button>
        
    </div>
  )
}

export default ScoreDisplay