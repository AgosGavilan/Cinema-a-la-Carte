import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions";
import EachOrder from "./EachOrder";
import styles from "./PurchaseOrders.module.css"
import NavBar from "../NavBar/NavBar";

const PurchaseOrders = () => {
  const purchaseOrders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders())
  }, []);

  return (
    <div>
      <NavBar />
      <div className={styles.background}>
        <table className={styles.orderList}>
          <thead className={styles.headers}>
            <tr>
              <th className={styles.eachOrder}>ID</th>
              <th className={styles.eachOrder}>User</th>
              <th className={styles.eachOrder}>Date</th>
              <th className={styles.eachOrder}>Movies ID</th>
              <th className={styles.eachOrder}>Movies Title</th>
              <th className={styles.eachOrder}>Movies Price</th>
              <th className={styles.eachOrder}>Total</th>
            </tr>
          </thead>
          <tbody>
        {purchaseOrders?.map((o) => {
          return (
            <EachOrder
              key={o.id}
              orderId={o.id}
              date={o.order_date}
              userId={o.userId}
              amount={o.Total}
              status={o.payment_status}
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

export default PurchaseOrders;
