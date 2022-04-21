import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import verify from "../../assets/verify.png";
import { NavLink } from "react-router-dom"
import { getLoggedUser, verifyEmail } from "../../redux/actions";
import styles from "./Verify.module.css";

const Verify = () => {
  const userLogged = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUser());
    dispatch(verifyEmail(userLogged.email));
  }, []);

  return (
    <div className={styles.backPage}>
      <div className={styles.verifyContent}>
        {userLogged && userLogged.email_verified ? (
          <div>
            <h2>Thanks for Signing Up!</h2>
            <img src={verify} alt="Verify" className={styles.mailImage} />
            <h1>Your E-mail has been verified</h1>
            <br />
            <h3>
              Now you can live the full experience of our site and adquire any
              movie of out catalog!
            </h3>
            <NavLink to="/">
              <button className={styles.verifyBtn}>Go Home</button>
            </NavLink>
          </div>
        ) : (
          <div>
            <img src={verify} alt="Verify" className={styles.mailImage} />
            <h1>Your E-mail was already verified</h1>
            <br />
            <NavLink to="/">
              <button className={styles.verifyBtn}>Home</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
