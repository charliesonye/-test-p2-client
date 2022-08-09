import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Animes from './Animes'
import Questions from './Questions'
import Navigation from './Navigation'
import ScoreDisplay from './ScoreDisplay'
import './App.css';

function App() {



  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])
  return (
 

        <div className="App">
          <Navigation />
          <Switch >
          
            <Route exact path='/' component={Home} />
            <Route exact path='/animes' component={Animes} />
            <Route exact path= '/questions' >
              <Questions questions={questions} />  
            </Route>  
            <Route path='/questions/score'>
              <ScoreDisplay questions={questions} />
            </Route>
          
          </Switch>
        </div>

      


  );
}

export default App;
