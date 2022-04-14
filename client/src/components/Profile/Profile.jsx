import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css"
import NavBar from "../NavBar/NavBar";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className={styles.profileCard}>
        <img src={user.picture} alt={user.name} className={styles.picture}/>
        <div className={styles.profileInfo}>
        <h1 className={styles.userName}>{user.name}</h1>
        <h4>E-mail: {user.email}</h4>
        </div>
      </div>
    )
  );
}

export default Profile