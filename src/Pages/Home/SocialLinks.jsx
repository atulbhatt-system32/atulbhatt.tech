import React from "react";
import strings from "../../strings.json";
import styles from "./Home.module.scss";

export default function SocialLinks() {
  return (
    <div className={styles.SocialLinks__wrap}>
      <h1>{strings.social_Link.instagram}</h1>
      <h1>{strings.social_Link.github}</h1>
      <h1>{strings.social_Link.linkedin}</h1>
    </div>
  );
}
