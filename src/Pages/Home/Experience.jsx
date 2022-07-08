import React from "react";
import styles from "./Home.module.scss";

export default function Experience() {
  return (
    <div className={styles.experience__wrap}>
      <h1 className={styles.title}>Experience</h1>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <div className={styles.experience_detail_body}>
            <div className={styles.experience_time}>2012-2021</div>
            <div className={styles.experience_feild}>
              <p>Frontend Developer</p>
              <p className="text-gray-100 text-12px font-medium mt-4">
                IMD Dehradun
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
