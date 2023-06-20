import React from "react";
import styles from "./AboutUs.module.scss";
import { Images } from "../../Images";

export default function Gallery() {
  const galleryImg = [
    Images.galleryImg1,
    Images.galleryImg2,
    Images.galleryImg3,
    Images.galleryImg1,
  ];

  return (
    <div className={styles.gallery__wrap}>
      <div className={styles.gallery_img_body}>
        {galleryImg.map((img, index) => {
          return <img src={img} alt={`pic${index}`} />;
        })}
      </div>
    </div>
  );
}
