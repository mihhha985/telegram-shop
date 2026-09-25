import styles from "./page.module.scss";
import OrderItem from "@/component/orderItem/OrderItem";
import TopMenu from "@/component/topMenu/TopMenu";
import { orders } from "@/data/orders";

export default function Page() {
  return (
    <div className="layout">
      <TopMenu />
      <main className={styles.orderContainer}>
        <h3>Orders</h3>
        {orders.map((order) => <OrderItem key={order.id} {...order} />)}
      </main>
    </div>
  );
}
