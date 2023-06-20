import React from "react";
import styles from "./Home.module.scss";
import { pagesStrings } from "../../static.db";

export default function SocialLinks() {
  return (
    <div className={styles.SocialLinks__wrap}>
      {Object.keys(pagesStrings.home.socialLinks)
        .slice(0, 3)
        .map((key) => (
          <h1
            key={key}
            onClick={() => window.open(pagesStrings.home.socialLinks[key].url)}
          >
            {pagesStrings.home.socialLinks[key].name}
          </h1>
        ))}
    </div>
  );
}
