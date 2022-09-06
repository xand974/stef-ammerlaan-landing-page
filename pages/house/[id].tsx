import styles from "../../styles/house.module.scss";
import { useEffect, useState } from "react";
import AnimatedSection from "../../components/AnimatedSection";
import Footer from "../../components/Footer";
import { HouseModel } from "../../types";
import { houses, getSliderImages, mappedKeyImages } from "../../mock/data";
import Image from "next/image";
import cls from "classnames";
import Head from "next/head";

const House = (house: HouseModel | undefined) => {
  const [imgSrc, setImgSrc] = useState("");

  //#region UI
  useEffect(() => {
    let isUnsubscribed = false;
    if (!house) return;
    (async () => {
      const currentKey =
        mappedKeyImages.find((item) => item.key === house.id) ?? null;
      if (!currentKey) {
        return;
      }
      for (let i = 1; i <= currentKey.maxCount; i++) {
        await new Promise((res) => setTimeout(res, 1000));
        if (isUnsubscribed) return;
        setImgSrc(getSliderImages(house.id, i));
        if (i === currentKey.maxCount) {
          i = 1;
          continue;
        }
      }
    })();
  }, [house?.id]);

  const getStatus = (
    status: "completed" | "underConstruction" | "inProgress"
  ): React.ReactNode => {
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
    }
  };

  const getMissionCompleted = (
    isCompleted: boolean | undefined
  ): React.ReactNode => {
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
  };
  const getDescription = (
    description: HouseModel["description"] | undefined
  ) => {
    if (!description) return;
    return (
      <div className={styles.house__main__description}>
        {description.map((item, index) => (
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
  };
  //#endregion

  if (!house) {
    return <div>no data</div>;
  }
  return (
    <AnimatedSection className={styles.house}>
      <Head>
        <title>Stef Ammerlaan - Maison {house.id}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="keywords"
          content="site, architecture, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes"
        />
        <meta
          name="description"
          content="Chaque maison développée évolue de manière buissonnante, jusqu’à ce que le projet dépasse les attentes."
        />
        <meta property="og:title" content="Stef Ammerlaan - Maisons" />
        <meta
          property="og:description"
          content="Chaque maison développée évolue de manière buissonnante, jusqu’à ce que le projet dépasse les attentes."
        />
      </Head>
      <header className={styles.house__header}>
        <h3 className={styles.house__header__title}>Maison {house?.id}</h3>
        <p className={styles.house__header__subtitle}>
          Date : {house?.date.split(" ")[3]}
        </p>
        <div className={styles.house__header__subtitle}>
          <span className={styles.bold}>Status:</span> {getStatus(house.status)}
        </div>
        <div className={styles.house__header__subtitle}>
          {getMissionCompleted(house?.missionCompleted)}
        </div>
        <p className={styles.house__header__subtitle}></p>
      </header>
      <main className={styles.house__main}>
        <h5 className={styles.house__main__title}>Design</h5>
        <div className={styles.house__main__img}>
          <Image
            layout="fill"
            src={house.picture}
            className={styles.house__main__picture}
            alt={house.alt}
          />
        </div>
        {getDescription(house?.description)}
      </main>

      <section className={styles.house__concept}>
        <h5 className={styles.house__concept__title}>Concept</h5>
        <div className={styles.house__concept__images}>
          {imgSrc ? (
            <div className={styles.house__concept__images__container}>
              <Image
                layout="fill"
                src={imgSrc}
                className={styles.house__concept__images__container__img}
                alt={house.alt}
              />
            </div>
          ) : (
            <p className={styles.house__concept__images__error}>No data</p>
          )}
        </div>
      </section>

      <Footer />
    </AnimatedSection>
  );
};

export const getStaticPaths = () => {
  const housesData = [...houses];
  const paths = housesData.map((item) => ({
    params: { id: item.id },
  }));
  return {
    paths: [...paths],
    fallback: false,
  };
};

export const getStaticProps = (context: { params: { id: string } }) => {
  const id = context.params.id;
  const house = houses.filter((item) => item.id === id)[0] ?? null;
  let formatted = {
    ...house,
    date: house.date.toString(),
  };

  if (!house) {
    return {
      props: {},
    };
  }
  return {
    props: {
      ...formatted,
    },
  };
};

export default House;
