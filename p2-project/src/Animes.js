import {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


function Animes({animes}) {

  
  const [current, setCurrent] = useState(0)
  const length = animes.data.length

  const previousClick = () => {
    setCurrent( current === 0 ? length -1: current -1)
  }

  const nextClick = () => {
    setCurrent(current ===  length - 1? 0: current + 1)
  }


  return (
    <div className='carousel' >
      <FaArrowAltCircleLeft className='leftArrow' onClick={previousClick} />
      <FaArrowAltCircleRight className='rightArrow' onClick={nextClick} />
      { Array.isArray(animes.data)

      ? (animes.data.map((anime, index) =>  (
          <div key={anime.images.jpg.large_image_url} className={index === current? 'smoothTransition': 'transition'}>
              
              {index === current && (
               <>
                <img  src={anime.images.jpg.large_image_url} alt="The anime" className='image' />
                <h3>Show Description</h3>

               </>
              )}
              
              

          </div>
      ))) : null
            
    }
      
     
    </div>
  )
}

export default Animes