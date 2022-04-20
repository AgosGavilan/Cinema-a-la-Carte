import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../redux/actions";
import EachUserOrder from "./UserOrders";
import styles from "./UserOrders.module.css"
import NavBar from "../NavBar/NavBar";

const UserOrders = () => {
  const userOrders = useSelector((state) => state.userOrders);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)


  useEffect(() => {
    dispatch(getUserOrders(user.id))
  }, []);

  return (
    <div>
      <NavBar />
      <div className={styles.background}>
        <table className={styles.orderList}>
          <thead className={styles.headers}>
            <tr>
              <th className={styles.eachOrder}>Order ID</th>
              <th className={styles.eachOrder}>Date</th>
              <th className={styles.eachOrder}>Total</th>
            </tr>
          </thead>
          <tbody>
        {userOrders?.map((o) => {
          return (
            <EachUserOrder
              key={o.id}
              orderId={o.id}
              date={o.order_date}
              amount={o.amount}
              orderDetail={o.Order_details}
            />
          );
        })}
      </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrders;
