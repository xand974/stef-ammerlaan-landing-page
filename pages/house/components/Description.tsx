import React from "react";
import { HouseModel } from "types";
import styles from "styles/house.module.scss";
import cls from "classnames";

interface DescriptionProp {
  description: HouseModel["description"] | undefined;
}
export default function Description({ description }: DescriptionProp) {
  return (
    <div className={styles.house__main__description}>
      {description?.map((item, index) => (
        <div
          key={index}
          className={cls(
            styles.house__main__description__container,
            item.lan === "fr"
              ? styles["house__main__description__container--bold"]
              : styles["house__main__description__container--light"]
          )}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
