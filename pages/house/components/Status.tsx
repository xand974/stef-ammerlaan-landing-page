import React from "react";
import styles from "styles/home.module.scss";

interface StatusProp {
  status: "completed" | "underConstruction" | "inProgress";
}
export default function Status({ status }: StatusProp) {
  switch (status) {
    case "underConstruction":
      return (
        <p className={styles.text}>
          <span className={styles.bold}>En chantier /</span>
          <span className={styles.light}> Under Construction</span>
        </p>
      );
    case "inProgress":
      return (
        <p className={styles.text}>
          <span className={styles.bold}>En instruction /</span>
          <span className={styles.light}> Instruction in progress</span>
        </p>
      );
    default:
      return <p className={styles.light}>Pas d'indications</p>;
  }
}
