import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2"
import { getUsers , deleteUser, modifyRole } from "../../redux/actions";
import styles from "./UserList.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

const EachUser = ({id, name, nickname, email, nationality, date_of_birth, role}) => {

    const allUsers = useSelector((state) => state.users)
    const dispatch = useDispatch()
     
   const [input, setInput] = useState({
       id: id,
       role: "",
   })

    const handleSelect = (e) => {
        e.preventDefault();
        setInput ((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
    }

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyRole(input))
}

    const handleDelete = (e) => {
        e.preventDefault();
        let chosenUser = allUsers.find((e) => e.id === id);
        if (chosenUser) {
          Swal.fire({
            title: `Are you sure you want to delete ${chosenUser.title}?`,
            icon: "warning",
            position: "center",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Delete",
            denyButtonText: "Cancel",
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteUser(id));
              dispatch(getUsers());
            } else if (result.isDenied) {
              return;
            }
          });
        } 
      };    

    return(
        <tr key={id} className={styles.eachUser}>
            <td className={styles.eachUser}>{id}</td>
            <td className={styles.eachUser}>{name}</td>
            <td className={styles.eachUser}>{nickname}</td>
            <td className={styles.eachUser}>{email}</td>
            <td className={styles.eachUser}>{nationality}</td>
            <td className={styles.eachUser}>{date_of_birth}</td>
            <td className={styles.eachUser}>
            <select name="" id=""
            onChange={(e) => handleSelect(e)}
           >      
            <option value="USER_ROLE" name="USER_ROLE"  >USER</option>            
            <option value="ADMIN_ROLE" name="ADMIN_ROLE">ADMIN</option>
            </select> 
            <button onClick={handleSubmit}>Change Role</button>
            {/*{role} */}
            </td> 
            <td className={styles.eachUser}>
            <button
              type="button"
              onClick={handleDelete}
              className={styles.trash}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            </td>
          </tr>
    )  
}

export default EachUser