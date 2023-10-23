import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section>
        <h5>
          <span className={styles.mySpan}>DEFLATIONARY/.</span>

          <span className={styles.mySpan1}>GAMBLEFI IS BASED /.</span>
        </h5>
        <div className={styles.videoContainer}>
          <video autoPlay loop muted playsInline className={styles.video}>
            <source src="/videos/.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoFallback}></div>
        </div>
        <Link legacyBehavior href="/claim">
          <button className={styles.button}>./</button>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
