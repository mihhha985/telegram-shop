"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import TopMenu from "@/component/topMenu/TopMenu";
import { products } from "@/data/products";
import styles from "./page.module.scss";

const cartProducts = products.slice(0, 2);
const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

export default function Page() {
  const router = useRouter();

  return (
    <div className="layout">
      <TopMenu />
      <div className={styles.totalOrderContainer}>
        <h3>Cart</h3>
        <div className={styles.totalOrderBox}>
          {cartProducts.map((product) => (
            <div key={product.id} onClick={() => router.push("/product/" + product.id)} className={styles.item}>
              <div className={styles.itemImage}>
                <Image src={product.image} alt="" width={48} height={48} />
              </div>
              <div className={styles.itemName}>{product.title}</div>
              <div className={styles.itemPrice}>${product.price.toFixed(2)}</div>
            </div>
          ))}
          <div className={styles.total}>
            <div>Total</div>
            <div>${total.toFixed(2)}</div>
          </div>
        </div>
        <Button variant="contained">Buy ${total.toFixed(2)}</Button>
      </div>
    </div>
  );
}
