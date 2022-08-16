import {useState} from 'react'

 function AnimeForm({PageTitleStyle, addAnime, animes}) {
  
  const [formData, setFormData] =useState({
    name: "",
    image: "",
    description: ""
  })

  function handleChange(e){
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    const newAnime = {
      name: formData.name,
      image: formData.image,
      description: formData.description
    }

    fetch("http://localhost:3000/animes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAnime)
    })
    .then(res => res.json())
    .then(data => {
      addAnime(animes, data)
      setFormData({
        name: "",
        image: "",
        description: ""
      })
    })
   
    
  }

  return (
    <div  className='AnimeForm'>
        <h2 style={PageTitleStyle}>Add one of your favorite Animes</h2> 
        <hr />
        <form onSubmit={handleSubmit}>
            <label>Input Name: </label>
            <textarea type='text' name='name' value={formData.name} onChange={handleChange}/>
            <label>Input Image: </label>
            <textarea type='text' name='image' value={formData.image} onChange={handleChange} /><br />
            <label>Input Synopsis: </label>
            <textarea type='text' name='description'  value={formData.description} onChange={handleChange}/><br />

            <input type='submit' />
        </form>
    </div>
  )
}


export default AnimeForm