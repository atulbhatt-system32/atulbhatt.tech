import React from "react";
import styles from "./Home.module.scss";
import { links, pagesStrings } from "../../static.db";
import SocialLinks from "./SocialLinks";
export default function IntroSection() {
  return (
    <div className={styles.introSection__wrap}>
      <SocialLinks />
      <div className={styles.title}>
        Hi, i’m <span className="text-primary-blue-500">Atul Bhatt</span>
      </div>
      <div className={styles.title}>
        {pagesStrings.home.Intro_Section.title}
      </div>
      <div className={styles.sub_title}>
        {pagesStrings.home.Intro_Section.sub_title_dark}
        <span className="text-gray-200">
          {pagesStrings.home.Intro_Section.sub_title_light}
        </span>
      </div>
      <div className={styles.button_upper_text}>Download Resume</div>
      <button
        className={styles.primary_button}
        onClick={() => window.open(links.resume.url)}
      >
        {pagesStrings.home.Intro_Section.button_text}
      </button>
    </div>
  );
}
