import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Animes from './Animes'
import Questions from './Questions'
import Navigation from './Navigation'
import './App.css';

function App() {
  return (
  <BrowserRouter>

        <div className="App">
          <Navigation />
          <Switch >
            
            <Route exact path='/animes' component={Animes} />
            <Route exact path= '/questions' component={Questions} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
  </BrowserRouter>
      


  );
}

export default App;
