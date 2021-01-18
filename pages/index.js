import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src='http://stikesmerangin.ac.id/maintenance-final.gif' className='img-fluid' />
      <h3 className='mt-5'>Website Under Maintenance</h3>
      <h3 className=''>We'll Back Soon</h3>
    </div>
  );
}
