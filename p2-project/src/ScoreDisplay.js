import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

 function ScoreDisplay({score}) {
  
    const history = useHistory()
   
  
    return (
    <div>
        <h1> Scoreboard</h1>
        <label> You scored {score}/5</label>
        <h3> {score < 3 ? "Good Attempt": "Great Job"}</h3>
      
          Try Again?
        
    </div>
  )
}

export default ScoreDisplay