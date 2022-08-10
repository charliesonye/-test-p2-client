import {useState, useEffect} from 'react'


function Animes() {

  const [animes, setAnimes] = useState([])

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
    .then(res => res.json())
    .then(data => setAnimes(data) )
  }, [])



  return (
    <div>
      {/* <img src={animes.data[0].images.jpg.large_image_url} alt='Image of Anime' /> */}
    </div>
  )
}

export default Animes