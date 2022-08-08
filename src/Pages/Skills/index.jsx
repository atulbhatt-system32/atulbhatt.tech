import React from "react";
import { SearchSkill, SkillsContainer } from "./Sections/index";
import { Footer, Header } from "../../Components";
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
