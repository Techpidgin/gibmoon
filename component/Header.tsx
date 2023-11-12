// Header.tsx
import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { darkTheme } from "@thirdweb-dev/react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";



const customDarkTheme = darkTheme({
  fontFamily: "Inter, sans-serif",
  colors: {
    modalBg: "#000000",
    accentText: "red",
    // ... etc
  },
});

const Header: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <Link legacyBehavior href="/">
          <a>
            <img src="/logos.png" alt="Logo" className={styles.logo} />
          </a>
        </Link>
      </div>
      <div >
        <div className={styles.menuSection}>
          <Link legacyBehavior href="/">
            <a className={router.pathname === "/" ? styles.mySpan : styles.mySpan}>HOME🏠</a>
          </Link>
          <Link legacyBehavior href="/claim">
            <a className={router.pathname === "/claim" ? styles.mySpan : styles.mySpan}>CLAIMS🚀</a>
          </Link>
          <Link legacyBehavior href="/sportbet">
            <a className={router.pathname === "/sportbet" ? styles.mySpan : styles.mySpan}>SPORTS BETTING⚽</a>
          </Link>
          <Link legacyBehavior href="/casino">
            <a className={router.pathname === "/casino" ? styles.mySpan : styles.mySpan}>CASINO🎲</a>
          </Link>
          <Link legacyBehavior href="/whitepaper">
            <a className={router.pathname === "/whitepaper" ? styles.mySpan : styles.mySpan}>WHITEPAPER📄 </a>
          </Link>
          <Link legacyBehavior href="/oat">
            <a className={router.pathname === "/oat" ? styles.mySpan : styles.mySpan}>OAT🔥</a>
          </Link>
        </div>
        <div className={styles.mobileMenu}>
          <div className={styles.mobileIcon} onClick={toggleMobileMenu}>
            <span>&#9776;</span>
          </div>
          {mobileMenuOpen && (
  <div className={`${styles.mobileMenuContent} ${mobileMenuOpen ? styles.mobileMenuContentVisible : styles.mobileMenuContentHidden}`}>
              <Link legacyBehavior href="/">
                <a className={styles.mySpan}>HOME🏠</a>
              </Link>
              <Link legacyBehavior href="/claim">
                <a className={styles.mySpan}>CLAIMS🚀</a>
              </Link>
              <Link legacyBehavior href="/sportbet">
                <a className={styles.mySpan}>SPORTS BETTING⚽</a>
              </Link>
              <Link legacyBehavior href="/casino">
                <a className={styles.mySpan}>CASINO🎲</a>
              </Link>
              <Link legacyBehavior href="/whitepaper">
                <a className={styles.mySpan}>WHITEPAPER📄</a>
              </Link>
              <Link legacyBehavior href="/oat">
                <a className={styles.mySpan}>OAT🔥</a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <ConnectWallet theme={customDarkTheme} />
    </div>
  );
};

export default Header;

