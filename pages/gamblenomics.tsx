import styles from "../styles/Gamblenomics.module.css";
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
          <span className={styles.mySpan}>GAMBLENOMICS/.</span>
        </h5>

        <div className={styles.photoGrid}>
          {/* Container 1 */}
          <div className={styles.photoContainer}>
            <img src="/1.png" alt="Image 1" />
          </div>

          {/* Container 2 */}
          <div className={styles.photoContainer}>
            <img src="/2.png" alt="Image 2" />
          </div>
          <div className={styles.photoContainer}>
            <img src="/3.png" alt="Image 2" />
          </div>
          <div className={styles.photoContainer}>
            <img src="/4.png" alt="Image 2" />
          </div>
          <div className={styles.photoContainer}>
            <img src="/5.png" alt="Image 2" />
          </div>
          <div className={styles.photoContainer}>
            <img src="/6.png" alt="Image 2" />
          </div>
          <div className={styles.photoContainer}>
            <img src="/7.png" alt="Image 2" />
          </div>
          <div className={styles.photoContainer}>
            <img src="/8.png" alt="Image 2" />
          </div>
          <div className={styles.photoContainer}>
            <img src="/9.png" alt="Image 2" />
          </div>
          <div className={styles.photoContainer}>
            <img src="/10.png" alt="Image 2" />
          </div>

          {/* Add more containers for images 3 to 10 similarly */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
