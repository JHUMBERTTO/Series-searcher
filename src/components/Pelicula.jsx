import React from 'react'


export default function Pelicula(props) {
  return (
    <>  
    {props.data.length === 0 ? <p className='flex justify-center font-bold text-white'>Busca tu pelicula para empezar!</p> : 
        <div className=" p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {props.data.map((pelicula)=>(
                <article className='flex justify-center'>
                  <img src={pelicula?.show?.image?.medium} alt="" />
                </article>
              ))}
        </div>
    }
    </>
  )
}

