import styles from "../styles/Inkscriptions.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Header from "../component/Header";

const Inkscriptions: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <p>Inkscriptions</p>
    </div>
  );
};

export default Inkscriptions;
