import { Footer, Header } from "../../Components";
import { Project, Query, Requirement } from "./Sections";
import Experience from "./Experience";

import IntroSection from "./IntroSection";
import Skills from "./Skills";
import Technologies from "./Technologies";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <section>
        <Header />
        <IntroSection />
        <Skills />
        <Experience />
        <div className="flex sm:hidden  ">
          <Technologies />
        </div>
      </section>
      <Project />
      <Requirement />
      <Query />
      <Footer />
    </div>
  );
}
