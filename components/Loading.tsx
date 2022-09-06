import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "../context/slices/app.slice";
import styles from "../styles/loading.module.scss";
import { loadingVariant } from "../variants/loading.variant";

export default function Loading() {
  const dispatch = useDispatch();
  const gifLogo = `/assets/gif/LogoGif.gif`;

  useEffect(() => {
    setTimeout(() => {
      dispatch(SET_LOADING(false));
    }, 2000);
  }, [dispatch]);

  return (
    <div className={styles.loading}>
      <motion.img
        variants={loadingVariant}
        initial="hidden"
        animate="animate"
        exit="exit"
        layoutId="loading-img"
        className={styles.loading__img}
        src={gifLogo}
        alt="loading animation to landing page"
      />
    </div>
  );
}
