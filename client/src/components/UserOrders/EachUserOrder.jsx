import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import styles from "./PurchaseOrders.module.css"

const EachUserOrder = ({ orderId, date, amount, orderDetail }) => {

  return (
    <tr key={orderId} className={styles.eachOrder}>
      <td className={styles.eachOrder}>{orderId}</td>
      <td className={styles.eachOrder}>{date.replace("T", " ").split(".")[0]}</td>
      <td className={styles.eachOrder}>US$ {amount}</td>
    </tr>
  );
};

export default EachUserOrder;
