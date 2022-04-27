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
    <tr key={orderId} className={styles.body}>
      <td className={styles.eachOrder}>{orderId}</td>
      <td className={styles.eachOrder}>{findUser? findUser.email : "Test Order"}</td>
      <td className={styles.eachOrder}>{date.replace("T", " ").split(".")[0]}</td>
      <td className={styles.eachOrder}>
      {orderDetail?.map(d => {
        return(
            <p className={styles.eachOrder}>{d.MovieId}</p>
            )
          })}
          </td>
        <td className={styles.eachOrder}>
      {orderDetail?.map(d => {
        return(
              <p className={styles.eachOrder}>{d.Movie?.title}</p>
              )
            })}
            </td>
            <td className={styles.eachOrder}>
      {orderDetail?.map(d => {
        return(
              <p className={styles.eachOrder}>US$ {d.price}</p>
              )
            })}
            </td>
      <td className={styles.eachOrder}>US$ {Math.round(amount * 100) / 100}</td>
    </tr>
  );
};

export default EachOrder;
