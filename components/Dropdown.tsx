import { LinkType } from "../types";
import styles from "../styles/dropdown.module.scss";
import Link from "next/link";

type DropdownType = {
  items: LinkType[] | undefined;
};
export default function Dropdown({ items }: DropdownType) {
  return (
    <div className={styles.dropdown}>
      {items?.map((item, key) => (
        <div className={styles.dropdown__item} key={key}>
          <Link href={item.link ?? "/"} className={styles.dropdown__item__link}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
