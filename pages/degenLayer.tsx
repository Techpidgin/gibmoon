import styles from "../styles/DegenLayer.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Header from "../component/Header";

const DegenLayer: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <p>Degen Layer</p>
    </div>
  );
};

export default DegenLayer;
