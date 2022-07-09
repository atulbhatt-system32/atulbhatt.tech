import { Footer } from "../../Components";
import Header from "../../Components/Header";
import Experience from "./Experience";
import IntroSection from "./IntroSection";
import Skills from "./Skills";
import Technologies from "./Technologies";
export default function Home() {
  return (
    <div>
      <section>
        <Header />
        <IntroSection />
        <Skills />
        <Experience />
        <Technologies />
        <Footer />
      </section>
    </div>
  );
}
