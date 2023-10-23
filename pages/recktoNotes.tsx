import styles from "../styles/ReckNotes.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Header from "../component/Header";

const RecktNotes: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <p>Reck Notes</p>
    </div>
  );
};

export default RecktNotes;
