import React from "react";
import styles from "./SkillsContainer.module.scss";
const SkillsContainer = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills_wrap}>
        <div className={styles.basic_web}>
          <div className={styles.basic_web_head}>#Basic Web</div>
          <div className={styles.basic_web_body}>
            <div className={styles.card}>HTML</div>
            <div className={styles.card}>CSS</div>
            <div className={styles.card}>JS</div>
          </div>
        </div>
        <div className={styles.basic_web}>
          <div className={styles.basic_web_head}>#CSS Frameworks</div>
          <div className={styles.basic_web_body}>
            <div className={styles.card}>SASS</div>
          </div>
        </div>
        <div className={styles.basic_web}>
          <div className={styles.basic_web_head}>#UI Development Libraries</div>
          <div className={styles.basic_web_body}>
            <div className={styles.card}>React</div>
          </div>
        </div>
        <div className={styles.basic_web}>
          <div className={styles.basic_web_head}>#UI Development Libraries</div>
          <div className={styles.basic_web_body}>
            <div className={styles.card}>MUI Material UI</div>
            <div className={styles.card}>Core-UI</div>
            <div className={styles.card}>StoryBook</div>
          </div>
        </div>
        <div className={styles.basic_web}>
          <div className={styles.basic_web_head}>
            #State Management Libraries
          </div>
          <div className={styles.basic_web_body}>
            <div className={styles.card}>Redux</div>
            <div className={styles.card}>React Context</div>
          </div>
        </div>
        <div className={styles.basic_web}>
          <div className={styles.basic_web_head}>#JavaScript Bundlers</div>
          <div className={styles.basic_web_body}>
            <div className={styles.card}>Webpack</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsContainer;
