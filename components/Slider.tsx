import styles from "../styles/slider.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

type SliderProp = {
  images: string[] | undefined;
};
export default function Slider({ images }: SliderProp) {
  const router = useRouter();
  const goToHouseProjectById = (e: React.MouseEvent, id: string) => {
    try {
      const url = `/house/${id}`;
      router.push(url);

      return;
    } catch (error) {
      throw error;
    }
  };

  const formatImages = () => {
    if (!images) return;
    let res: { image: string; key: string }[] = [];
    for (let i = 0; i < images.length; i++) {
      res = [...res, { image: images[i], key: `000${i + 1}` }];
    }

    res = [...res, { image: "", key: "" }];

    return res.map((item, id) =>
      item.image ? (
        <button
          className={styles.slider__item}
          key={id}
          onClick={(e) => goToHouseProjectById(e, item.key)}
        >
          <p className={styles.slider__item__text}>{item.key}</p>
          <div className={styles.slider__item__text__img}>
            <Image
              layout="fill"
              className={styles.slider__item__img}
              src={item.image}
              alt="sketch of a house under building"
            />
          </div>
        </button>
      ) : (
        <div className={styles.slider__item__more} key={id}>
          <p className={styles.slider__item__more__text}>
            <span className={styles.bold}>Plus à venir...</span>
            <span className={styles.light}>More to come...</span>
          </p>
        </div>
      )
    );
  };
  return (
    <div className={styles.slider}>
      <p className={styles.slider__title}>
        <span className={styles.bold}>Selectionnez un projet</span>
        <span className={styles.light}>Clic on a project</span>
      </p>

      <div className={styles.slider__images}>{formatImages()}</div>
    </div>
  );
}
