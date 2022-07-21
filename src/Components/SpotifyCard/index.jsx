import React from "react";
import styles from "./Styles.module.scss";

export default function SpotifyCard() {
  return (
    <div className={styles.spotifyCard__wrap}>
      <div className={styles.spotify_main_card}>
        <div className={styles.spotify_thumbnill}>
          <img src="" alt="" />
        </div>
        <div className={styles.spotify_details}>
          <div className={styles.spotify_icon}>icon</div>
          <div className={styles.spotify_card_title}>
            Know It Today | S01 | E01 | Time, Lifestyle, Passion(Part 1){" "}
          </div>
          <div>Jun 2021 . Know It Today</div>
        </div>
      </div>
      <div className={styles.spotify_title_wrap}>Title Of podcast</div>
    </div>
  );
}
