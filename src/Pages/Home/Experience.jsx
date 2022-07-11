import React from "react";
import styles from "./Home.module.scss";
import strings from "../../strings.json";
import Technologies from "./Technologies";

export default function Experience() {
  return (
    <div className="flex flex-col sm:flex-row lg:px-16 justify-between">
      {/* //skills  */}
      <div className="sm:w-60% flex flex-col justify-between">
        <div>
          <div
            className={`${styles.title} flex flex-col sm:text-40px px-8 lg:p-0 capitalize`}
          >
            {strings.Skills_section.title1}
            <span>{strings.Skills_section.title2}</span>
          </div>
          <div className={`${styles.skills_sub_title} `}>
            <hr className={styles.skills_horizontal_line} />
            {strings.Skills_section.sub_title}
          </div>
        </div>
        {/* //technology   */}
        <div className="sm:flex hidden md:w-75% lg:w-60%  pb-4 ">
          <Technologies />
        </div>
      </div>

      {/* //experience  */}
      <div className={styles.experience__wrap}>
        <h1 className={`${styles.title} `}>Experience</h1>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <div className={styles.experience_detail_body}>
              <div className={styles.experience_time}>2012-2021</div>
              <div className={styles.experience_feild}>
                <p className="lg:text-20px font-bold">Frontend Developer</p>
                <p className="text-gray-100 text-12px lg:text-16px font-medium mt-4">
                  IMD Dehradun
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
