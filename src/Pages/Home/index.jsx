import { Footer, Header } from "../../Components";
import { Project, Query, Requirement } from "./Sections";
import Experience from "./Experience";

import IntroSection from "./IntroSection";
import Skills from "./Skills";
import Technologies from "./Technologies";
import SocialLinks from "./SocialLinks";
import Testimonials from "./Testimonials";
import { ThemeContext } from "../../App";
import React from "react";
export default function Home() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={theme}>
      <section>
        <Header />
        <SocialLinks />
        <IntroSection />
        <Skills />
        <Experience />
        <div className="flex sm:hidden  ">
          <Technologies />
        </div>
      </section>
      <Project />
      <Requirement />
      <Testimonials />
      <Query />
      <Footer />
    </div>
  );
}
