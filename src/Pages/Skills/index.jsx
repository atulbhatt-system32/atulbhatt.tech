import React from "react";
import { SearchSkill, SkillsContainer } from "./Sections/index";
import { Header } from "../../Components";
const Skills = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <SearchSkill />
        <SkillsContainer />
      </main>
    </div>
  );
};

export default Skills;
