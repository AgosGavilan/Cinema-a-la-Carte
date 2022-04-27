import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../redux/actions";
import styles from "./UserOrders.module.css"
import NavBar from "../NavBar/NavBar";
import Player from "./Player"

const UserOrders = () => {
  const userOrders = useSelector((state) => state.userOrders);
  console.log("soy user oreders: ",userOrders)
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserOrders(user.id))
  }, []);

  //if(!userOrders) return "You have no orders, what are you waiting for?"

  return (
    <div>
      <div className={styles.background}>
        <table className={styles.orderList}>
          <thead className={styles.headers}>
            <tr>
              <th className={styles.eachOrder}>Order ID</th>
              <th className={styles.eachOrder}>Date</th>
              <th className={styles.eachOrder}>Total</th>
              <th className={styles.eachOrder}>Details</th>
            </tr>
          </thead>
          <tbody className={styles.body}>
        {/* {userOrders?.map((o) => {
          return (
            <EachUserOrder
              key={o.id}
              orderId={o.id}
              date={o.order_date}
              amount={o.Total}
              orderDetail={o.Order_details.map(el => el.Movie.title)}
            />
          );
        })} */}
        {userOrders?.map(o => {
          return (
          <tr key={o.id} className={styles.eachOrder}>
            <td className={styles.eachOrder}>{o.id}</td>
            <td className={styles.eachOrder}>{o.order_date.replace("T", " ").split(".")[0]} </td>
            <td className={styles.eachOrder}>US$ {Math.round(o.Total * 100) / 100}</td>
            <td className={styles.eachOrder}>{o.Order_details.map(el => <p className={styles.peliculas}><Player movie={el.Movie.title} url={el.Movie.urlMovie}/></p>)}</td>
          </tr>
          )
        })}
      </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrders;
