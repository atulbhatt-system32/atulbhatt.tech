import React from "react";
import { SearchSkill, SkillsContainer } from "./Sections/index";
import { Footer, Header } from "../../Components";
const Skills = () => {
  return (
    <div className="dark:bg-black-200 white-100">
      <div>
        <Header />
      </div>
      <main>
        <SearchSkill />
        <SkillsContainer />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
