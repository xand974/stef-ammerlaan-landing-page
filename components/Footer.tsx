import styles from "../styles/footer.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { imgLogo } from "../mock/data";

export default function Footer() {
  const router = useRouter();
  const goHome = () => router.push("/");

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper} onClick={() => goHome()}>
        <p className={styles.footer__wrapper__text}>
          <span className={styles.bold}>ACCUEIL</span>
          <span className={styles.light}>HOME</span>
        </p>
        <motion.img
          layoutId="loading-img"
          src={imgLogo}
          className={styles.footer__wrapper__logo}
          alt="stef ammerlaan official logo"
        />
      </div>
    </footer>
  );
}
