import React from "react";
import { Footer, Header } from "../../Components";
import styles from "./Content.module.scss";
import strings from "../../strings.json";
import Podcast from "./Podcast";

export default function Content() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.content_tab_section}>
        <button className={styles.tab}>{strings.content_tabs.blog}</button>
        <button className={styles.tab}>{strings.content_tabs.videos}</button>
        <button className={styles.tab}>{strings.content_tabs.podcast}</button>
      </div>
      <div className={styles.content_search_section}>
        <div className={styles.search_body}>
          <span>{strings.search_title.title}</span>
          <input type="search" placeholder="Type Here" />
        </div>
      </div>
      <div>
        <Podcast />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
