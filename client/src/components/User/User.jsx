import React from "react";
import NavBar from "../NavBar/NavBar";
import LogIn from "../LogIn/LogIn";
import styles from "./User.module.css";
import LogOut from "../LogOut/LogOut";
import Profile from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import UserForm from "./UserForm";
import UserOrders from '../UserOrders/UserOrders'
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUserOrders } from "../../redux/actions";
import LoadScreen from "../Loading/LoadScreen";

const User = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const user = useSelector((state) => state.user);

  if (isLoading) {
    return <LoadScreen />;
  }

  return (
    <div>
      <NavBar />
      <div className={styles.user}>
        <div className={styles.profileContainer}>
          <div className={styles.agos}>
            <Profile />
            {isAuthenticated ? <LogOut /> : <LogIn />}
          </div>
          <div className={styles.tabla}>
            <UserOrders />
          </div>
        </div>
        <div className={styles.userForm}>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default User;
