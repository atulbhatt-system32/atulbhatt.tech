import React from "react";
import styles from "../Content.module.scss";
import { Blog1, Watched, Heart } from "../../../Assets/images";
import { Card } from "../../../Components";
const Blog = () => {
  return (
    <Card>
      <article className={styles.card}>
        <aside className={styles.card_aside}>
          <figure className={styles.card_figure}>
            <img src={Blog1} alt="Blog1" />
          </figure>
        </aside>
        <div className={styles.card_content}>
          <header className={styles.card_header}>
            <h3 className={styles.card_title}>Blog Title</h3>
          </header>
          <div className={styles.card_body}>
            <p className={styles.card_copy}>
              Lorem ipsum dolor sit ametcons ectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={styles.card_tag}>
            <p>
              tags- #react #kyu #ptanahi #ptanah i#ptanahi# ptanahi #ptanahi
              #ptanahi
            </p>
          </div>
          <div className={styles.card_footer}>
            <div className={styles.card_watched}>
              <img src={Watched} alt="watched" />
              <span>34 People</span>
            </div>
            <div className={styles.card_liked}>
              <img src={Heart} alt="liked" />
              <span>34 People</span>
            </div>
          </div>
        </div>
      </article>
    </Card>
  );
};

export default Blog;
