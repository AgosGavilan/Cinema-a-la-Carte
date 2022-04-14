import verify from "../../assets/verify.png"
import styles from "./Verify.module.css"

const Verify = () => {
    return (
        <div className={styles.backPage}>
            <div className={styles.verifyContent}>
                <div>
                <h2>Thanks for Signing Up!</h2>
                <img src={verify} alt="Verify" className={styles.mailImage}/>
                <h1>Verify Your E-mail Adress</h1><br />
                <h3>You're almost ready to get started. <br />Please check your email to verify your account and enjoy our exclusive catalog!</h3>
                </div>
            </div>
        </div>
    )
}

export default Verify;