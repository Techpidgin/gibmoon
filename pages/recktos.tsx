
import styles from "../styles/Recktos.module.css";
import { NextPage } from "next";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section >
        <h5>
          <span className={styles.mySpan}>
           REKTO GAMES/. 
          </span>
          
        </h5>

      </section>
      <Footer />
    </div>
  );
};

export default Home;