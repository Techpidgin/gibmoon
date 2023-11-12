
import styles from "../styles/casino.module.css";
import { NextPage } from "next";
import Header from "../component/Header";
import Footer from "../component/Footer";




const casino: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.card}>
       <div className={styles.mySpan}>
        <section>
           <button className={styles.button}> DEEP LIQUIDITY </button>
           <button className={styles.button}> NO LIMITS</button>
           <button className={styles.button}> NO BAN </button>
           <button className={styles.button}> NO LOGIN</button>
           <button className={styles.button} >  PSEUDO ANONYMOUS</button>
         
        </section>
      </div>
    </div>

      
      <Footer />
    </div>
  );
};

export default casino;
