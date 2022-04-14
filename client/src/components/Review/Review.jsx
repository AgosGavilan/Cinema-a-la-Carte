import React from "react";
import { useSelector } from "react-redux";
import s from "./Review.module.css"

const Review = () => {
    const allReviews = useSelector(state => state.reviews)
    console.log(allReviews)

    return (
        <div className={s.product_main}>
            {allReviews.length ?
            <div> {allReviews} </div>
            : <p>There are no reviews yet.</p>}
        </div>
    )
}

export default Review