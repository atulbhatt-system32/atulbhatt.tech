import React from "react";
import SkillsButton from "../../Components/SkillsButton";
import styles from '../Home/Home.module.scss';
import strings from '../../strings.json' 

export default function Skills() {
  return (<div className="mt-8">

    <div className={`${styles.skills__wrap}`}>
      <div className="flex pl-16 pr-8 justify-between my-3">
        <SkillsButton text="Sass" />
        <SkillsButton text="Java Script" />
      </div>
      <div className="flex pl-8 my-3">
        <SkillsButton text="CSS" />
      </div>
      <div className="flex pl-12 my-3">
        <SkillsButton text="HTML"/>
      </div>
      <div className="flex justify-end pr-4 my-3">
        <SkillsButton text="React" />
      </div>
      <div className="flex justify-end pr-14 my-3">
        <SkillsButton text="GIT" />
      </div>
    </div>
    <div className={`${styles.title} flex flex-col px-8`}>
        {strings.Skills_section.title1}
        <span>
            
        {strings.Skills_section.title2}
        </span>
    </div>
    <div className={`${styles.skills_sub_title} `}>
    <hr className={styles.skills_horizontal_line}/>
    {strings.Skills_section.sub_title}</div>
  </div>
  );
}
