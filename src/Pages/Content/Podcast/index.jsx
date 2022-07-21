import React from "react";
import SpotifyCard from "../../../Components/SpotifyCard";
import { Images } from "../../../Images";
import styles from "../Content.module.scss";

export default function Podcast() {
  return (
    <div className={styles.podcast__wrap}>
      <div className={styles.podcast_banner}>
        <img
          src={Images.podcastBannerMobile}
          alt=""
          className={styles.banner_mobile}
        />
        <img
          src={Images.podcastBannerWeb}
          alt=""
          className={styles.banner_web}
        />
      </div>
      <div className={styles.spotify_cards_wrap}>
        <SpotifyCard />
      </div>
    </div>
  );
}
