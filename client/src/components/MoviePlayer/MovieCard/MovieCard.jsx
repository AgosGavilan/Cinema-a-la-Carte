import React from 'react'

const MovieCard = ({items}) => {
  return (
    <div>
        <h3>{items.title}</h3>
       <img src={items.img} alt={items.title}/>
       <a href={items.urlMovie} target="_blank">{items.title}</a>
    </div>
  )
}

export default MovieCard