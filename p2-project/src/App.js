import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Animes from './Animes'
import Questions from './Questions'
import Navigation from './Navigation'
import './App.css';

function App() {
  return (
  
      
        <div className="App">
          <Navigation />
          <Switch >
            <Route exact path='/' component={Home} />
            <Route exact path='/animes' component={Animes} />
            <Route exact path= '/questions' component={Questions} />

          </Switch>
        </div>


  );
}

export default App;
