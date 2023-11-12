
import styles from "../styles/sportbet.module.css";
import { NextPage } from "next";
import Header from "../component/Header";
import Footer from "../component/Footer";




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section >
        <h5>
          <span className={styles.mySpan}>
          100% ON-CHAIN SPORTS BETTING <br></br>
           NO LIMITS <br></br> NO BANS 
           <br></br>NO LOGINS
            <br></br>NO PAYMENT DELAYS
            <br></br>DEEP LIQUIDITY 
          </span>
          
        </h5>

      </section>
      <Footer />
    </div>
  );
};

export default Home;
