import React, { RefObject, useRef } from "react";
import Image from "next/image";
import { mappedKeyImages, getSliderImages } from "mock/data";
import styles from "styles/images-animations.module.scss";
import { useState, useEffect } from "react";
import { sleep } from "utils/utils.helper";
import { useAnimatedImages } from "../../../hooks/images.hook";

interface ImagesAnimationProp {
  alt: string | undefined;
  id: string;
}

export default function ImagesAnimation({ id, alt }: ImagesAnimationProp) {
  const [imagesRefs, setImagesRef] = useState(
    [] as RefObject<HTMLDivElement>[]
  );

  const [images] = useAnimatedImages(id, styles, alt);

  useEffect(() => {
    setImagesRef((prev) => {
      prev = [];
      for (let i = 0; i < images.length; i++) {
        prev.push(React.createRef());
      }
      return prev;
    });
  }, [images.length]);

  useEffect(() => {
    const animateImages = async () => {
      if (imagesRefs.length === 0) return;
      for (let i = 0; i < imagesRefs.length; i++) {
        const imgElement = imagesRefs[i].current;
        if (!imgElement) return;
        await sleep(1000);
        const zIndex =
          imgElement.style.zIndex === "" ? "1" : imgElement.style.zIndex;
        const zIndexInt = parseInt(zIndex) + 1;

        imgElement.style.zIndex = zIndexInt.toString();
        if (i === imagesRefs.length - 1) {
          i = 0;
        }
      }
    };
    animateImages().catch(console.error);
  }, [imagesRefs, imagesRefs.length]);

  return (
    <div className={styles.anim__container}>
      {images.map((item, id) => (
        <div
          key={id}
          ref={imagesRefs[id]}
          className={styles.anim__container__wrapper}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
