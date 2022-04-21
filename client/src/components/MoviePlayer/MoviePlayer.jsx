import React from 'react'
import { useSelector } from 'react-redux';
import styles from "./MoviePlayer.module.css"
import MovieCard from "./MovieCard/MovieCard"

const MoviePlayer = () => {
    const orders = useSelector((state) => state.userOrders)
    // console.log(orders[0].Order_details[0].Movie)
    
    var arr = [];
    
    orders.forEach(el => {
        for(let i=0; i<=el.Order_details.length; i++){
            if(el.Order_details[i] !== undefined){
                arr.push(el.Order_details[i])
            }
            
        }
    })
    
    const ordersData = arr.map(el => el.Movie)

    console.log(ordersData)

    
    
  return (
    <div /* className={styles.container} */>
        {
            ordersData.map((el, index) => {
                return(
                    <MovieCard 
                        key={index}
                        items={el}
                    />
                )
            })
        }
    </div>
  )
}

export default MoviePlayer