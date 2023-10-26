import styles from "../styles/whitepaper.module.css";
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
          <span className={styles.mySpan}>WHITEPAPER/.</span>
        </h5>

        <div className={styles.photoGrid}>
          {/* Your image containers go here */}

          {/* Centered and responsive iframe container */}
          <div className={styles.iframeContainer}>
            <iframe
              title="Embedded Canva Design"
              src="https://www.canva.com/design/DAFyWtESuXk/view?embed"
              allowFullScreen
              frameBorder="0"
              width="1000rem"
              height="1000rem" // Adjust the height as needed
              style={{
                position: "relative",
                border: "none",
                padding: 0,
                margin: "0 auto", // Center the container horizontally
                overflow: "hidden",
                maxWidth: "800px", // Set a maximum width to prevent it from getting too wide
              }}
            ></iframe>
          </div>
          
          <a
            href="https://www.canva.com/design/DAFyWtESuXk/view?utm_content=DAFyWtESuXk&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
