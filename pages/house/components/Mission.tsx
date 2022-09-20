import React from "react";
import styles from "styles/house.module.scss";

interface MissionProp {
  isCompleted: boolean | undefined;
}
export default function Mission({ isCompleted }: MissionProp) {
  return isCompleted ? (
    <>
      <p className={styles.text}>
        <span className={styles.bold}>Mission complète /</span>
        <span className={styles.light}> Full assignment</span>
      </p>
    </>
  ) : (
    <>
      <p className={styles.text}>
        <span className={styles.bold}>Mission Pc /</span>
        <span className={styles.light}> Building Permit</span>
      </p>
    </>
  );
}
