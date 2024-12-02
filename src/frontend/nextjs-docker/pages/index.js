import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://0.0.0.0:8000")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SnakeOil.com</h1>
        <h1 className={styles.title}>Mode={process.env.NODE_ENV}</h1>

        <p className={styles.description}>
          {data ? JSON.stringify(data, null, 2) : "Loading..."}
        </p>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
