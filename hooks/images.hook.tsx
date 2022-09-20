import { useEffect, useState } from "react";
import Image from "next/image";
import { getSliderImages, mappedKeyImages } from "mock/data";

export const useAnimatedImages = (id: string, styles: any, alt?: string) => {
  const [images, setImages] = useState([] as JSX.Element[]);

  useEffect(() => {
    if (!id) return;
    const currentKey = mappedKeyImages.find((item) => item.key === id) ?? null;
    if (!currentKey) return;

    for (let i = 1; i <= currentKey.maxCount; i++) {
      const src = getSliderImages(id, i);

      const ImageDiv = () =>
        Image({
          src,
          alt,
          className: styles.anim__container__wrapper__img,
          layout: "fill",
          priority: true,
          objectFit: "contain",
        });

      setImages((prev) => [...prev, <ImageDiv />]);
    }
  }, []);

  return [images];
};
