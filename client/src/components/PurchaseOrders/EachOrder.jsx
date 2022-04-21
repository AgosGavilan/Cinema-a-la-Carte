import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import styles from "./PurchaseOrders.module.css"

const EachOrder = ({ orderId, date, userId, amount, status, orderDetail }) => {
  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch()
  const findUser = allUsers.find(e => e.id === userId)

  useEffect(() => {
      dispatch(getUsers())
  }, [])

  return (
    <tr key={orderId} className={styles.eachOrder}>
      <td className={styles.eachOrder}>{orderId}</td>
      <td className={styles.eachOrder}>{findUser? findUser.email : ""}</td>
      <td className={styles.eachOrder}>{date.replace("T", " ").split(".")[0]}</td>
      <td className={styles.eachOrder}>US$ {Math.round(amount * 100) / 100}</td>
    </tr>
  );
};

export default EachOrder;
