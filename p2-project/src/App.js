import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Quotes from './Quotes'
import Animes from './Animes'
import Questions from './Questions'
import Navigation from './Navigation'
import ScoreDisplay from './ScoreDisplay'
import './App.css';
import AnimeForm from './AnimeForm'

function App() {

const [score, setScore] = useState(0)
const [animes, setAnimes] = useState([])



useEffect(() => {
  fetch('http://localhost:3000/animes')
  .then(res => res.json())
  .then(data => setAnimes(data))
}, [])
  
function addAnime(animes,newAnime){
   
  setAnimes([...animes, newAnime])
}

// function newAnimeImg (){
//   setNewAnimeView(!newAnimeView)
// }
  return (
 

        <div className="App">
          <Navigation />
            <br />
            <br />
            <br />
            <br />
            <br/>
            <Switch >
            
              <Route exact path='/'>
                <Quotes />
              </Route>
              <Route exact path='/animes' >
                <Animes  animes={animes}  />
              </Route>
              <Route exact path='/animes/new' >
                <AnimeForm addAnime={addAnime} animes={animes}  />
              </Route>
              <Route exact path= '/questions' >
                <Questions  score={score} setScore={setScore} />  
              </Route> 
              <Route path='/questions/score' >
                <ScoreDisplay  score={score} setScore={setScore}/>
              </Route>
            </Switch>
        </div>

      


  );
}

export default App;
