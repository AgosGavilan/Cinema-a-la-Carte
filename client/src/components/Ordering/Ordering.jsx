import { useState } from "react";
import { useDispatch } from "react-redux";
import {getMovies, orderMovies} from "../../redux/actions/index"

const Ordering = () => {
    const dispatch = useDispatch();
    let [, setOrder] = useState("")

    const handleOrder = o => {
        o.preventDefault();
        if (o.target.value !== "") {
            dispatch(orderMovies(o.target.value))
            setOrder(o.target.value)
        }
        else {
            dispatch(getMovies());
        }
    } 

    return (
        <div>
            <select defaultValue="" onChange={handleOrder}>
            <option value="" hidden>Sort by</option>
                <option value="">Default</option>
                <option value="AtoZ">Name (A - Z)</option>
                <option value="ZtoA">Name (Z - A)</option>
                <option value="HighPrice">Price (High to Low)</option>
                <option value="LowPrice">Price (Low to High)</option>
            </select>
        </div>
    )
}

export default Ordering;
