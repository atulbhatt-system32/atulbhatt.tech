import React from "react";
import styles from "./AboutUs.module.scss";
import { pagesStrings } from "../../static.db";
import { Images } from "../../Images";

export default function QuoteSection() {
  return (
    <div className={styles.quotesection__wrap}>
      <div className={styles.quote_body}>
        <div className={styles.quote}>
          <h1>{pagesStrings.aboutme.quote_section.quote}</h1>
        </div>
        <img
          src={Images.quoteBanner}
          className={`${styles.quote_banner} lg:hidden`}
          alt="quote banner"
        />
        <img
          src={Images.quoteBannerWeb}
          className={styles.web_quote_banner}
          alt="quote banner web"
        />
      </div>
    </div>
  );
}
