import React from "react";
import styles from "./AboutUs.module.scss";
import { pagesStrings } from "../../static.db";
import { Images } from "../../Images";

export default function DescriptionWithImage() {
  return (
    <div className={styles.description_with_image__wrap}>
      <div className={`${styles.about_div} mb-4 lg:mb-0`}>
        <img src={Images.descImage1} alt="" />
        <p className={styles.description}>
          {pagesStrings.aboutme.description_with_image.first_description}
        </p>
      </div>
      <div className={`${styles.about_div} lg:justify-end lg:items-end `}>
        <p
          className={`${styles.description} pr-4 pl-0 relative lg:top-40 md:top-32 sm:top-32 top-20 flex flex-col  `}
          style={{ alignItems: "center" }}
        >
          {pagesStrings.aboutme.description_with_image.second_description}
          <img src={Images.whiteArrow} alt="" />
        </p>
        <img src={Images.descImage1} alt="" />
      </div>
    </div>
  );
}
