import React, { useEffect, useState } from 'react'
import logo from '../assets'


export default function Navbar() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const searchPeliculas = async(str) =>{
    try{
      const req = await fetch(`https://api.tvmaze.com/search/shows?q=${str}`)
      const res = await req.json()
      setData(res)
      console.log(res);
    }catch{
    }
  }

  useEffect(()=> {
    searchPeliculas(value)
  }, [value])

  const handleSubmit = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }
  console.log(value);

  useEffect(()=> {
    
    console.log(`https://api.tvmaze.com/search/shows?q=${value}`)
  }, [value])



  return (
    <nav>
        <div>
          <img src={logo} alt="Kory"/>
        </div>
        <div>
          <form>
            <input onChange={handleSubmit} type="search" placeholder='Search Your Movie' />
          </form>
          <div className="row">
            {
              data.length === 0 ? <p>Ingresa un valor en el input</p> : 
              data.map((pelicula)=>(
                <article>
                  <img src={pelicula?.show?.image?.medium} alt="" />
                  <p>{pelicula.show.name}</p>
                </article>
              ))

            }
          </div>
        </div>
    </nav>
  )
}

