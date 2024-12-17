import styles from 'styles/house.module.scss';
import { useEffect, useState } from 'react';
import AnimatedSection from 'components/AnimatedSection';
import Footer from 'components/Footer';
import { HouseModel } from 'types';
import { houses, getSliderImages, mappedKeyImages } from 'mock/data';
import Image from 'next/image';
import cls from 'classnames';
import Head from 'next/head';
import { convertImage, sleep, toBase64 } from 'utils/utils.helper';
import Status from './components/Status';
import Mission from './components/Mission';
import Description from './components/Description';
import ImagesAnimation from './components/ImagesAnimation';

const House = (house: HouseModel | undefined) => {
  const [imgSrc, setImgSrc] = useState('');

  const loadStart = async () => {
    await sleep(200);
  };

  const loadComplete = async () => {
    await sleep(200);
  };

  //#region UI
  useEffect(() => {
    let isUnsubscribed = false;
    const { id } = house as HouseModel;
    if (!id) return;
    (async () => {
      const currentKey =
        mappedKeyImages.find((item) => item.key === id) ?? null;
      if (!currentKey) {
        return;
      }
      for (let i = 1; i <= currentKey.maxCount; i++) {
        await sleep(2000);
        if (isUnsubscribed) return;
        setImgSrc(getSliderImages(id, i));
        if (i === currentKey.maxCount) {
          i = 1;
          continue;
        }
      }
    })();

    return () => {
      isUnsubscribed = true;
    };
  }, [house, house?.id]);

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
          Date : {house?.date.split(' ')[3]}
        </p>
        <div className={styles.house__header__subtitle}>
          <span className={styles.bold}>Statut:</span>{' '}
          <Status status={house?.status} />
        </div>
        <div className={styles.house__header__subtitle}>
          <Mission isCompleted={house?.missionCompleted} />
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
            alt={house.alt || ''}
          />
        </div>
        <Description description={house?.description} />
      </main>

      <section className={styles.house__concept}>
        <h5 className={styles.house__concept__title}>Concept</h5>
        <div className={styles.house__concept__images}>
          <ImagesAnimation id={house?.id} alt={house?.alt} />
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
