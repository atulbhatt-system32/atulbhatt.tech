import React from "react";
import styles from "./AboutUs.module.scss";
import strings from "../../strings.json";
import { Images } from "../../Images";

export default function HeroSection() {
  return (
    <div className={styles.herosection__wrap}>
      <h1 className={styles.page_title}>About Me</h1>
      <div className={styles.herosection_main_body}>
        <div className={styles.herosection_image_body}>
          <img src={Images.aboutHeroSection} alt="" />
        </div>
        <div className={styles.herosection_detail_body}>
          <div className={styles.line}></div>
          <h1 className={styles.detail_title}>
            {strings.about_us_hero_section.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
