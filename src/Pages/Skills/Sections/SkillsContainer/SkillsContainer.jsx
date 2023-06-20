import React from "react";
import styles from "./SkillsContainer.module.scss";
import { pagesStrings } from "../../../../static.db";
const {
  skills: { skilsList },
} = pagesStrings;
const SkillsContainer = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills_wrap}>
        {skilsList.map((skill) => {
          return (
            <div className={styles.basic_web}>
              <div className={styles.basic_web_head}>{`${skill.category}`}</div>
              <div className={styles.basic_web_body}>
                {skill.items.map((item) => {
                  return <div className={styles.card}>{item.name}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default SkillsContainer;
