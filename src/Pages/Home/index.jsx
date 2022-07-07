import { Footer } from "../../Components";
import Header from "../../Components/Header";
import IntroSection from "./IntroSection";
import Skills from "./Skills";
export default function Home() {
  return (
    <div>
      <section>
      <Header/>
      <IntroSection/>
      <Skills/>
        <Footer />
      </section>
    </div>
  );
}
