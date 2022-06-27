import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>gracekrcx</title>
        <meta name="description" content="gracekrcx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>#gracekrcx</h1>
      </main>
    </div>
  );
}
