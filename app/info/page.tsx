"use client";

import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import TopMenu from "@/component/topMenu/TopMenu";
import styles from "./page.module.css";

const rules = [
  ["First rule", "xbox game pass 1 year for simple country vpn change best quality ever key"],
  ["Second rule", "xbox game pass 1 year for simple country vpn change best quality ever key"],
  ["Third rule", "xbox game pass 1 year for simple country vpn change best quality ever key"],
];

export default function Page() {
  const [username, setUsername] = useState("Groovy");
  const [editing, setEditing] = useState(false);

  return (
    <div className="layout">
      <TopMenu />
      <main className={styles.main}>
        <h1>Information</h1>
        <section className={styles.card}>
          <span className={styles.label}>Account</span>
          <p className={styles.id}>ID: 515337377223</p>
          <div className={styles.nameRow}>
            <span>Your name</span>
            {editing ? (
              <input
                autoFocus
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                onBlur={() => setEditing(false)}
                onKeyDown={(event) => { if (event.key === "Enter") setEditing(false); }}
                aria-label="Your name"
              />
            ) : (
              <strong>{username}</strong>
            )}
            <button type="button" onClick={() => setEditing(true)} aria-label="Edit name"><AiOutlineEdit /></button>
          </div>
        </section>
        <section className={styles.card}>
          <span className={styles.label}>Support</span>
          <a href="https://t.me/PremiumBot">@support_bot</a>
        </section>
        <section className={styles.card}>
          <span className={styles.label}>Rules</span>
          <div className={styles.rules}>
            {rules.map(([title, description]) => (
              <div key={title}>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
