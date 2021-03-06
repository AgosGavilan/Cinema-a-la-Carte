import { useDispatch, useSelector } from "react-redux";
import EachUser from "./EachUser";
import styles from "./UserList.module.css";
import { useEffect } from "react";
import { getUsers } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";

const UserList = () => {
  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, allUsers]);

  return (
    <div>
      <NavBar />
      <div className={styles.background}>
        <table className={styles.userList}>
          <thead className={styles.headers}>
            <tr>
              <th className={styles.eachUser}>ID</th>
              <th className={styles.eachUser}>Name</th>
              <th className={styles.eachUser}>Last Name</th>
              <th className={styles.eachUser}>Email</th>
              <th className={styles.eachUser}>Nationality</th>
              <th className={styles.eachUser}>Date of Birth</th>
              <th className={styles.eachUser}>Role</th>
              <th className={styles.eachUser}>Reset Password</th>
              <th className={styles.eachUser}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((e, i) => {
              return (
                <EachUser
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  lastName={e.lastName}
                  email={e.email}
                  nationality={e.nationality}
                  date_of_birth={e.date_of_birth}
                  role={e.role}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
