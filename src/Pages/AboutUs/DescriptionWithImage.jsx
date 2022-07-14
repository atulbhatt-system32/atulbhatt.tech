import React from "react";
import styles from "./AboutUs.module.scss";
import strings from "../../strings.json";
import { Images } from "../../Images";
import { BsArrowDown } from "react-icons/bs";

export default function DescriptionWithImage() {
  return (
    <div className={styles.description_with_image__wrap}>
      <div className={`${styles.about_div} mb-4 lg:mb-0`}>
        <img src={Images.descImage1} alt="" />
        <p className={styles.description}>
          {strings.description_with_image.first_description}
        </p>
      </div>
      <div className={`${styles.about_div} lg:justify-end lg:items-end `}>
        <p
          className={`${styles.description} pr-4 pl-0 relative lg:top-40 md:top-32 sm:top-32 top-20 flex flex-col  `}
          style={{ alignItems: "center" }}
        >
          {strings.description_with_image.second_description}
          <img src={Images.whiteArrow} alt="" />

          {/* <BsArrowDown className="flex " /> */}
        </p>
        <img src={Images.descImage1} alt="" />
      </div>
    </div>
  );
}
