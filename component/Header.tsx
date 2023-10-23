import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Header.module.css";

const customLightTheme = {
  fontFamily: "Inter, sans-serif",
};

const Header: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.menuSection}>
        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link legacyBehavior href="/">
            <a
              id="link"
              className={router.pathname === "/" ? styles.active : styles.link}
            >
              HOME
            </a>
          </Link>
          <Link legacyBehavior href="/claim">
            <a
              id="link"
              className={
                router.pathname === "/claim" ? styles.active : styles.link
              }
            >
              CLAIMS
            </a>
          </Link>
          <Link legacyBehavior href="/recktos">
            <a
              id="link"
              className={
                router.pathname === "/recktos" ? styles.active : styles.link
              }
            >
              RECKTOS
            </a>
          </Link>

          <Link legacyBehavior href="/gamblenomics">
            <a
              id="link"
              className={
                router.pathname === "/gamblenomics"
                  ? styles.active
                  : styles.link
              }
            >
              GAMBLENOMICS
            </a>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={styles.mobileMenu}>
          <div className={styles.mobileIcon} onClick={toggleMobileMenu}>
            <span>&#9776;</span>
          </div>
          {mobileMenuOpen && (
            <div className={styles.mobileMenuContent}>
              <Link legacyBehavior href="/">
                <a>HOME</a>
              </Link>
              <Link legacyBehavior href="/claim">
                <a>CLAIMS</a>
              </Link>
              <Link legacyBehavior href="/recktos">
                <a>RECKTOS</a>
              </Link>
              
              <Link legacyBehavior href="/gamblenomics">
                <a>GAMBLENOMICS</a>
              </Link>
              
            </div>
          )}
        </div>
      </div>
      <ConnectWallet
       
        hideTestnetFaucet={true}
      />
    </div>
  );
};

export default Header;
