import React, { useEffect, useState } from 'react'
import logo from '../assets'
import Pelicula from './Pelicula'



export default function Hero() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])

  const searchPeliculas = async(str) =>{
    try{
      const req = await fetch(`https://api.tvmaze.com/search/shows?q=${str}`)
      const res = await req.json()
      setData(res)

    }catch{
    }
  }

  useEffect(()=> {
    searchPeliculas(value)
  }, [value])

  

  const handleSubmit = (event) => {
    event.preventDefault()
    setValue(event.target.value.toLowerCase())
  }
  console.log(value);
  console.log(data);

  return(
    <div>
      <nav className='p-5 bg-rose-900 flex items-center justify-around '>
          <div>
            <img src={logo} alt="Kory"/>
          </div>
          <div>
            <form className='realtive w-mac mx-auto'>
              <input onChange={handleSubmit} type="search" placeholder='' className='px-3 py-2 font-semibold text-black rounded-2xl border-none cursor-pointer' />
            </form>
          </div>
      </nav>
      <Pelicula data={data}/>
    </div>
  )
}

