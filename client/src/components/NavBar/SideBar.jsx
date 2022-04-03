import Filters from "../Filters/Filters";
import Ordering from "../Ordering/Ordering";
import styles from "./SideBar.module.css"

const SideBar = ({handleOrder, handleGenres, handleYears, handleClick}) => {
    return (
        <div className={styles.sidebar}>
        <Ordering handleOrder={handleOrder}/>
        <Filters handleGenres={handleGenres} handleYears={handleYears} handleClick={handleClick}/>
        </div>
    )
}

export default SideBar