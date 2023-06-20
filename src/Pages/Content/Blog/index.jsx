import { useState, useEffect } from "react";
import styles from "../Content.module.scss";
import heart from "../../../Assets/images/blogs/heart.svg";
import { Card } from "../../../Components";
import axios from "axios";
const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=atulbhattsystem32&top=7")
      .then((res) => {
        let _data = res?.data?.map((article) => {
          return {
            id: article.id,
            title: article.title,
            body: article.description,
            tag: article?.tag_list?.join(" #"),
            content: article.description,
            image: article.cover_image,
            like: article.public_reactions_count,
            reading_time_minutes: article.reading_time_minutes,
            url: article.url,
          };
        });
        setData(_data);
      });
  }, []);

  return (
    <section className={styles.blog_section}>
      {data.map((item) => {
        return (
          <Card
            className={styles.card__wrap}
            key={item.id}
            data={{ url: item.url }}
          >
            <article className={styles.card}>
              <aside className={styles.card_aside}>
                <figure className={styles.card_figure}>
                  <img src={item.image} alt="Blog1" />
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
                  <p>#{item.tag}</p>
                </div>
                <div className={styles.card_footer}>
                  <div className={styles.card_watched}>
                    <img src="/watched.svg" alt="watched" />
                    <span>{item.reading_time_minutes} min read</span>
                  </div>
                  <div className={styles.card_liked}>
                    <img src={heart} alt="liked" />
                    <span>{item.like} Likes</span>
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
