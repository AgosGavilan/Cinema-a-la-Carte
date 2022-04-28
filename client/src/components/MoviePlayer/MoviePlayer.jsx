import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from "./MovieCard/MovieCard"

const MoviePlayer = () => {
    const orders = useSelector((state) => state.userOrders)
    
    var arr = [];
    
    orders.forEach(el => {
        for(let i=0; i<=el.Order_details.length; i++){
            if(el.Order_details[i] !== undefined){
                arr.push(el.Order_details[i])
            }
        }
    })
    const ordersData = arr.map(el => el.Movie)
 
  return (
    <div>
        {ordersData.map((el, index) => {
                return(
                    <MovieCard 
                        key={index}
                        items={el}
                    />
                )
            })}
    </div>
  )
}

export default MoviePlayer