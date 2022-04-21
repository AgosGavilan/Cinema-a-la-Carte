import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, modifyProfile } from "../../redux/actions";
import Swal from "sweetalert2";
import styles from "./User.module.css";

const UserForm = () => {
  const currentUser = useSelector((state) => state.user);
  const allCountries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: currentUser.name,
    lastName: currentUser.lastName,
    nationality: currentUser.nationality,
    date_of_birth: currentUser.date_of_birth,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyProfile(currentUser.email, input));
    Swal.fire({
      title: "Profile updated",
      icon: "success",
      position: "center",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });
    return;
  };

  return (
    <div>
      <h1 className={styles.editTitle}>Edit Profile</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <h4 className={styles.titles}>Name:</h4>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={input.name}
            className={styles.input}
          />
          <h4 className={styles.titles}>Last Name:</h4>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={input.lastName}
            className={styles.input}
          />
          <h4 className={styles.titles}>Nationality:</h4>
          <input
            type="text"
            list="nationality"
            name="nationality"
            onChange={handleChange}
            value={input.nationality}
            className={styles.input}
          />
          <datalist id="nationality">
            {allCountries?.map((e) => (
              <option value={e.name_en} key={e.name_es} name="nationality">
                {e.name_en}
              </option>
            ))}
          </datalist>
          <h4 className={styles.titles}>Birth Date:</h4>
          <input
            type="date"
            name="date_of_birth"
            onChange={handleChange}
            value={input.date_of_birth}
            className={styles.input}
          />
          <button type="submit" className={styles.updateBtn}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
