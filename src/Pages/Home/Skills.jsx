import React from "react";
import SkillsButton from "../../Components/SkillsButton";
import styles from "../Home/Home.module.scss";
import { Images } from "../../Images/index";

export default function Skills() {
  return (
    <div
      className={styles.portfolio_wrap}
      style={{ backgroundImage: `url(${Images.porfolioImage})` }}
    >
      <div
        className={`${styles.skills__wrap} flex flex-col mt-8 justify-center w-95% lg:w-80% mx-auto`}
      >
        <div className="flex justify-between w-full my-3">
          <div className="flex pl-16 lg:pl-32">
            <SkillsButton text="Sass" />
          </div>
          <div className="flex lg:pr-4 justify-end w-full">
            <SkillsButton text="Java Script" />
          </div>
        </div>
        <div className="flex lg:pl-6 my-3 md:justify-between md:my-10 lg:my-12">
          <SkillsButton text="CSS" />
          <div className="md:flex hidden">
            <SkillsButton text="React" />
          </div>
        </div>
        <div className="flex sm:pl-12 lg:pl-24 my-3 justify-between">
          <SkillsButton text="HTML" />
          <div className="md:flex hidden pr-8 lg:pr-40">
            <SkillsButton text="GIT" />
          </div>
        </div>

        {/* //only for mobile screens  */}
        <div className="flex justify-end pr-4 my-3 md:hidden">
          <SkillsButton text="React" />
        </div>
        <div className="flex justify-end pr-14 my-3 md:hidden">
          <SkillsButton text="GIT" />
        </div>
      </div>
    </div>
  );
}
