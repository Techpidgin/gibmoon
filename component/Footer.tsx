import React from 'react';
import styles from "../styles/Home.module.css";
import Link from "next/link";


function Footer() {
  return (
    <footer>
  <section className={styles.footer}>
  <h5 className={styles.footer}>
    <img src="Logos.png" alt="" style={{ width: '50px', height: '50px' }} />{' '}
    © 2023 GAMBLE-FI IS BASED. All rights reserved.{' '}
    <span className={styles.linkContainer}>
      {/* Add TELEGRAM link with an icon */}
      <Link legacyBehavior href="https://t.me/+Uklr9zsuEJ5lODc0">
        <a>
          <img src="/tg.png" className={styles.linkIcon} />
        </a>
      </Link>
      <Link legacyBehavior href="https://twitter.com/GIBISBIG">
        <a>
          <img src="/x.png" className={styles.linkIcon} />
        </a>
      </Link>
    </span>
  </h5>
</section>

   
            
 
    </footer>
  );
}

export default Footer;
