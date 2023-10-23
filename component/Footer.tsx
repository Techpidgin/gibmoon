import React from 'react';
import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <footer>
     <section className={styles.footer}>
            
              <h5 className={styles.stakingInfo1}><img
                src="logo.png"
                alt=""
               style={{ width: '50px', height: '50px' }}
              />{' '}© 2023 GAMBLE-FI IS BASED . All rights reserved. | Brand Assets | TVL :   1,000,000 ETHER IS FUD</h5>
    </section>
   
            
 
    </footer>
  );
}

export default Footer;
