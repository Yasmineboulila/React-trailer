import React from 'react'
import Component2 from './component2'
import Component3 from './component3'
export default function component1({films,search}) {
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
    {films.filter((film)=>film.title.toUpperCase().includes(search.toUpperCase())|| film.rating===Number(search)).map((el)=><Component2 key={el.id} film={el} />)}
      
    </div>
  )
}