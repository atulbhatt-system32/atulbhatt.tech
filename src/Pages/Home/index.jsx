import { Footer, Header } from "../../Components";
import { Project, Query, Requirement } from "./Sections";
import Experience from "./Experience";

import IntroSection from "./IntroSection";
import Skills from "./Skills";
import Technologies from "./Technologies";
import SocialLinks from "./SocialLinks";
import Testimonials from "./Testimonials";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
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
