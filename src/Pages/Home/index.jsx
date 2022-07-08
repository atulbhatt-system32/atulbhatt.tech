import { Footer, Navbar } from "../../Components";
import { Project, Query, Requirement } from "./Sections";
import IntroSection from "./IntroSection";
import Skills from "./Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <IntroSection />
        <Skills />
      </section>
      <Project />
      <Requirement />
      <Query />
      <Footer />
    </div>
  );
}
