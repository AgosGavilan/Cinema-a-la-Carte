import { useEffect } from "react"
import NavBar from "../NavBar/NavBar"
import styles from "./LoadScreen.module.css"

const LoadScreen = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <NavBar/>
        <div className={styles.loadBack}>
            <div className={styles.divImg}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" className={styles.tape} alt="Loading" />
        </div>
        </div>
        </div>
    )
}

export default LoadScreen