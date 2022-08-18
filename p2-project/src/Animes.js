import {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'



function Animes({ animes}) { 
  
  const [current, setCurrent] = useState(0)

  const previousClick = () => {
    
    setCurrent( current === 0 ? animes.length -1: current -1)
  }

  const nextClick = () => {
    setCurrent(current ===  animes.length - 1? 0: current + 1)
  }
 

  return (
    <div className='carousel' >
      <FaArrowAltCircleLeft className='leftArrow' onClick={() => previousClick()} />
      <FaArrowAltCircleRight className='rightArrow' onClick={() => nextClick()} />
      
      { 

       animes.map((anime, index) =>  (
      
          <div key={anime.name} className={index === current? 'smoothTransition': 'transition'}>
           
              {index === current && (
               <>             
                
                <img  src={anime.image} alt="The anime" className='image' />
                <h2> Name: {anime.name}</h2>
                <hr />
                <h3>Show Description</h3>
                <small>{anime.description}</small>
               </>
              )}
          </div>
      ))
            
      }
      
      
    </div>
  )
}

export default Animes