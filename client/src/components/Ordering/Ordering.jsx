// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import {getMovies, orderMovies} from "../../redux/actions/index"

const Ordering = ({handleOrder}) => {

    return (
        <div>
            <h4>Sort by</h4>
            <select defaultValue="" onChange={handleOrder}>
                <option value="">Recently Added</option>
                <option value="AtoZ">Name (A - Z)</option>
                <option value="ZtoA">Name (Z - A)</option>
                <option value="HighRating">Rating (High to Low)</option>
                <option value="LowRating">Rating (Low to High)</option>
            </select>
        </div>
    )
}

export default Ordering;
