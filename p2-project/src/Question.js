import React, {useState} from 'react'


function Question({questionObj}) {
  
    const {id, prompt, answers, correctAnswer } = questionObj
    const [correctAnswerImg, setCorrectAnswerImg ] = useState('')
    
    const answersList = answers.map((answer, index) => {
      
      return(

       <option value={index} key={index}>{answer}</option>
       
      )
    })

   
  // function onHandleAnswer(e) {
  //    return (
  //     fetch(`http://localhost:3000/questions/${id}`, {
  //       method: 'PATCH' ,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({correctAnswer})
  //     })
  //     .then((res) => res.json())
  //     .then((data)=> {
  //       function handleAnswer(){
  //         if(questionObj.id === asweredObj.id ){
  //           return answeredObj
  //         }else {
  //           return questionObj
  //         }
  //       }
  //     })
  //    )
  //  }

  function onHandleAnswer(e){
    
    const correctAnswerIndex = parseInt(e.target.value) + 1
    correctAnswerIndex === correctAnswer ? setCorrectAnswerImg('✅' ): setCorrectAnswerImg('❌')
    console.log(correctAnswer)
    console.log(correctAnswerIndex)
 
  }

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
        <select onChange= {onHandleAnswer}>
          
            <option  selected  >Please choose an option</option>
           {answersList}
        </select>
        <label>{correctAnswerImg}</label>
       
    </div>
  )
}

export default Question