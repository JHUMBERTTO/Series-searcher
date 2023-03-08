import React, { useState, useEffect } from 'react'

export default function Peliculas () {
    const [data, setData] = useState([])
    
    

    useEffect(() => {
      const getData = async () => {
        try{
          const req = await fetch(apiUrl)
          const res = await req.json()
          setData(res)
        }catch{
        }
      }
      getData()
    }, [])

    console.log(data)

  return (
    <section>
      <div>Peliculas</div>
    </section>
  )
}

