import React from "react";
import { Images } from "../../../Images";
import styles from "../Content.module.scss";
import { pagesStrings } from "../../../static.db";

const {
  content: { podcast_tab },
} = pagesStrings;
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
          alt="banner"
          className={`${styles.banner_web} h-70 w-full object-cover`}
        />
      </div>
      <div className="flex">
        {podcast_tab.podcast_list?.map((item, index) => {
          return (
            <div className="p-8" key={index}>
              <iframe
                title="podcast"
                src={item}
                height="100%"
                width="100%"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
