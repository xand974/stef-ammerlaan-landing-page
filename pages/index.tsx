import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "../context/slices/app.slice";
import { useAppSelector } from "../hooks/selectors.hook";
import styles from "../styles/home.module.scss";
import Loading from "../components/Loading";
import NavbarLayout from "../components/NavbarLayout";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";
import AnimatedLogo from "../components/AnimatedLogo";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { loading } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(SET_LOADING(true));
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <div>
      <Head>
        <title>Stef Ammerlaan Architecture</title>
        <meta httpEquiv="content-language" content="fr-fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="keywords"
          content="architecture, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes"
        />
        <meta
          name="description"
          content="Architecte franco-néerlandais basé dans le Gard, Stef Ammerlaan vous propose des solutions d'Architectures novatrices"
        />
        <meta property="og:title" content="Stef Ammerlaan - Architecture" />
        <meta
          property="og:url"
          content="https://ammerlaanstefarchitecture.com"
        />
        <meta
          property="og:description"
          content="Architecte franco-néerlandais basé dans le Gard, Stef Ammerlaan vous propose des solutions d'Architectures novatrices"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <NavbarLayout>
        <AnimatedSection className={styles.home}>
          <div className={styles.home__wrapper}>
            <div className={styles.home__wrapper__top}>
              <AnimatedLogo animated={false} />
              <h1 className={styles.home__wrapper__top__title}>
                AMMERLAAN STEF ARCHITECTURE
              </h1>
            </div>
            <div className={styles.home__wrapper__bottom}>
              <Link
                className={styles.home__wrapper__bottom__subtitle}
                href="mailto:agence@ammerlaanstefarchitecture.com"
              >
                agence@ammerlaanstefarchitecture.com
              </Link>
              <p className={styles.home__wrapper__bottom__subtitle}>
                06.86.30.23.78
              </p>
            </div>
          </div>
        </AnimatedSection>
      </NavbarLayout>
    </div>
  );
};

export default Home;
