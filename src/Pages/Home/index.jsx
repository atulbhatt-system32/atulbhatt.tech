import { Footer } from "../../Components";
import Header from "../../Components/Header";
import Experience from "./Experience";
import IntroSection from "./IntroSection";
import Skills from "./Skills";
export default function Home() {
  return (
    <div>
      <section>
        <Header />
        <IntroSection />
        <Skills />
        <Experience />
        <Footer />
      </section>
    </div>
  );
}
