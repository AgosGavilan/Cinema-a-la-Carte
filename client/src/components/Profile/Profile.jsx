import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.css"
import NavBar from "../NavBar/NavBar";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const userLogged = useSelector((state) => state.user);


  const { name, picture, email } = user;

  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && userLogged.email_verified ? (
      <div className={styles.profileCard}>
        <img src={picture} alt={name} className={styles.picture} />
        <div className={styles.profileInfo}>

        <h1 className={styles.userName}>{name}</h1>
        <h4>E-mail: {email}</h4>
        </div>        
    {/* {JSON.stringify(user)} */}

    </div>
    ) : (
  <div className={styles.checkEmail}>
<h1> Please, verify your email account with the link we sent you to continue! </h1>
  </div>  
    )
  );
};

export default Profile;
