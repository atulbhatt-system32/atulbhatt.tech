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
      content: "example content",
      image: "https://i.imgur.com/example.jpg",
    },
    {
      id: 2,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "example content",
      image: "https://i.imgur.com/example.jpg",
    },
    {
      id: 3,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "example content",
      image: "https://i.imgur.com/example.jpg",
    },
    {
      id: 4,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "example content",
      image: "https://i.imgur.com/example.jpg",
    },
    {
      id: 5,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "example content",
      image: "https://i.imgur.com/example.jpg",
    },
    {
      id: 6,
      title: "Blog Title",
      body: "Lorem ipsum dolor sit ametcons ectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "example content",
      image: "https://i.imgur.com/example.jpg",
    },
  ];
  return (
    <section className={styles.blog_section}>
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
                Lorem ipsum dolor sit ametcons ectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className={styles.card_tag}>
              <p>
                Tags- #react #kyu #ptanahi #ptanah i#ptanahi# ptanahi #ptanahi
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
      <Card>
        <article className={styles.card}>
          <aside className={styles.card_aside}>
            <figure className={styles.card_figure}>
              <img src={Blog2} alt="Blog2" />
            </figure>
          </aside>
          <div className={styles.card_content}>
            <header className={styles.card_header}>
              <h3 className={styles.card_title}>Blog Title</h3>
            </header>
            <div className={styles.card_body}>
              <p className={styles.card_copy}>
                Lorem ipsum dolor sit ametcons ectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className={styles.card_tag}>
              <p>
                Tags- #react #kyu #ptanahi #ptanah i#ptanahi# ptanahi #ptanahi
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
      <Card>
        <article className={styles.card}>
          <aside className={styles.card_aside}>
            <figure className={styles.card_figure}>
              <img src={Blog3} alt="Blog3" />
            </figure>
          </aside>
          <div className={styles.card_content}>
            <header className={styles.card_header}>
              <h3 className={styles.card_title}>Blog Title</h3>
            </header>
            <div className={styles.card_body}>
              <p className={styles.card_copy}>
                Lorem ipsum dolor sit ametcons ectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className={styles.card_tag}>
              <p>
                Tags- #react #kyu #ptanahi #ptanah i#ptanahi# ptanahi #ptanahi
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
    </section>
  );
};

export default Blog;
