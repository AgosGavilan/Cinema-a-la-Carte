import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Review = () => {

    //const dispatch = useDispatch()
    const allReviews = useSelector(state => state.reviews)
    console.log(allReviews)

    return (
        <div>
            {allReviews.length ?
            <div> allReviews </div>
            : <p>There are no reviews yet.</p>}

        </div>
    )
}

export default Review