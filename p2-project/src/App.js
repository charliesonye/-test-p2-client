import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Animes from './Animes'
import Questions from './Questions'
import Navigation from './Navigation'
import ScoreDisplay from './ScoreDisplay'
import './App.css';

function App() {
  const [animes, setAnimes] = useState([])
// Attempting to grab anime pictures and descriptions from external api but having issues in Animes component
// Attempting to access each answers boolean value to add a score for each correct selection in Question Component

useEffect(() => {
  fetch('https://api.jikan.moe/v4/anime')
  .then(res => res.json())
  .then(data => setAnimes(data) )
}, [])
  


  
  return (
 

        <div className="App">
          <Navigation />
          <Switch >
          
            <Route exact path='/' component={Home} />
            <Route exact path='/animes'>
              <Animes animes={animes} />
            </Route>
            <Route exact path= '/questions' >
              <Questions  />  
            </Route>  
            <Route path='/questions/score' component={ScoreDisplay} />
          
          </Switch>
        </div>

      


  );
}

export default App;
