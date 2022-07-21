import React, { useState } from "react";
import { Footer, Header } from "../../Components";
import styles from "./Content.module.scss";
import strings from "../../strings.json";
import Podcast from "./Podcast";
import Blog from "./Blog";

export default function Content() {
  const [tab, setTab] = useState("blog");
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.content_tab_section}>
        <button className={styles.tab} onClick={() => setTab("blog")}>
          {strings.content_tabs.blog}
        </button>
        <button className={styles.tab} onClick={() => setTab("videos")}>
          {strings.content_tabs.videos}
        </button>
        <button className={styles.tab} onClick={() => setTab("podcast")}>
          {strings.content_tabs.podcast}
        </button>
      </div>
      <div className={styles.content_search_section}>
        <div className={styles.search_body}>
          <span>{strings.search_title.title}</span>
          <input type="search" placeholder="Type Here" />
        </div>
      </div>

      <div>
        {tab === "blog" && <Blog />}
        {tab === "podcast" && <Podcast />}
        {tab === "videos" && <Podcast />}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
