import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
       <div className={styles.overlay}></div>
      <Header />
      <section>
        <h5>
          <span className={styles.mySpan}>100% ON-CHAIN BETTING</span>

          <span className={styles.mySpan1}>GAMBLEFI IS BASED.</span>
        </h5>
        <Link legacyBehavior href="/claim">
          <button className={styles.button}>🔥</button>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
