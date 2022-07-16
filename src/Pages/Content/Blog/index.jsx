import React from "react";
import styles from "../Content.module.scss";
import { Blog1, Blog2, Blog3, Watched, Heart } from "../../../Assets/images";
import { Card } from "../../../Components";
const Blog = () => {
  const data = [
    {
      id: 1,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Tags- #react #kyu #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi",
      content: "example content",
      image: "../../../Assets/images/blogs/blog1.svg",
      view: "32",
      like: "32",
    },
    {
      id: 2,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Tags- #react #kyu #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi",
      content: "example content",
      image: "Blog2",
      view: "32",
      like: "32",
    },
    {
      id: 3,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Tags- #react #kyu #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi",
      content: "example content",
      image: "Blog3",
      view: "32",
      like: "32",
    },
    {
      id: 4,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Tags- #react #kyu #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi",
      content: "example content",
      image: "Blog1",
      view: "32",
      like: "32",
    },
    {
      id: 5,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Tags- #react #kyu #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi",
      content: "example content",
      image: "Blog2",
      view: "32",
      like: "32",
    },
    {
      id: 6,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Tags- #react #kyu #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi #ptanahi",
      content: "example content",
      image: "Blog3",
      view: "32",
      like: "32",
    },
  ];
  return (
    <section className={styles.blog_section}>
      {data.map((item) => {
        return (
          <Card className={styles.card__wrap}>
            <article className={styles.card}>
              <aside className={styles.card_aside}>
                <figure className={styles.card_figure}>
                  <img src={Blog1} alt="Blog1" />
                </figure>
              </aside>
              <div className={styles.card_content}>
                <header className={styles.card_header}>
                  <h3 className={styles.card_title}>{item.title}</h3>
                </header>
                <div className={styles.card_body}>
                  <p className={styles.card_copy}>{item.body}</p>
                </div>
                <div className={styles.card_tag}>
                  <p>{item.tag}</p>
                </div>
                <div className={styles.card_footer}>
                  <div className={styles.card_watched}>
                    <img src={Watched} alt="watched" />
                    <span>{item.view} People</span>
                  </div>
                  <div className={styles.card_liked}>
                    <img src={Heart} alt="liked" />
                    <span>{item.like} People</span>
                  </div>
                </div>
              </div>
            </article>
          </Card>
        );
      })}
    </section>
  );
};

export default Blog;
