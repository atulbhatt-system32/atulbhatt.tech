import React from "react";
import styles from "./AboutUs.module.scss";
import strings from "../../strings.json";
import { Images } from "../../Images";

export default function QuoteSection() {
  return (
    <div className={styles.quotesection__wrap}>
      <div className={styles.quote_body}>
        <div className={styles.quote}>
          <h1>{strings.quote_section.quote}</h1>
        </div>
        <img src={Images.quoteBanner} className={styles.quote_banner} alt="" />
      </div>
    </div>
  );
}
