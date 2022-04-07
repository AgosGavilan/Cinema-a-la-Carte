import styles from "./LoadScreen.module.css"

const LoadScreen = () => {
    return (
        <div className={styles.loadBack}>
        <img src="https://steamuserimages-a.akamaihd.net/ugc/469792325891242764/088BC200E01563E6832AB0C414B8AE9BF6FDDA5B/" className={styles.tape} alt="Loading" />
        </div>
    )
}

export default LoadScreen