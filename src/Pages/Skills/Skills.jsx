import React from "react";
import { SearchSkill, SkillsContainer } from "./Sections/index";
import { Navbar } from "../../Components";
const Skills = () => {
  return (
    <div>
      <Navbar />
      <main>
        <SearchSkill />
        <SkillsContainer />
      </main>
    </div>
  );
};

export default Skills;
