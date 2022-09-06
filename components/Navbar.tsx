import styles from "../styles/navbar.module.scss";
import { navbarLinks } from "../mock/data";
import Dropdown from "./Dropdown";
import { useAppSelector } from "../hooks/selectors.hook";
import { motion } from "framer-motion";
import { appVariant } from "../variants/app.variant";
import Link from "next/link";
import cls from "classnames";
export default function Navbar() {
  const { loading } = useAppSelector((state) => state.app);

  return !loading ? (
    <motion.nav
      className={styles.navbar}
      variants={appVariant}
      initial="initial"
      animate="animate"
    >
      <ul className={styles.navbar__list}>
        {navbarLinks.map((item, index) =>
          item.isLink ? (
            <Link
              key={index}
              href={item.link ?? "/"}
              className={styles.navbar__list__item}
            >
              {item.name}
            </Link>
          ) : (
            <div
              className={cls(styles.navbar__list__item, styles.drop)}
              key={index}
            >
              <span>{item.name}</span>
              <Dropdown items={item.items} />
            </div>
          )
        )}
      </ul>
    </motion.nav>
  ) : (
    <></>
  );
}
