import React from "react";
import SkillsButton from "../../Components/SkillsButton";
import styles from "../Home/Home.module.scss";

export default function Skills() {
  return (
    <div className="mt-8">
      <div className={`${styles.skills__wrap}`}>
        <div className="flex pl-16 pr-8 justify-between my-3">
          <SkillsButton text="Sass" />
          <SkillsButton text="Java Script" />
        </div>
        <div className="flex pl-8 my-3">
          <SkillsButton text="CSS" />
        </div>
        <div className="flex pl-12 my-3">
          <SkillsButton text="HTML" />
        </div>
        <div className="flex justify-end pr-4 my-3">
          <SkillsButton text="React" />
        </div>
        <div className="flex justify-end pr-14 my-3">
          <SkillsButton text="GIT" />
        </div>
      </div>
    </div>
  );
}
