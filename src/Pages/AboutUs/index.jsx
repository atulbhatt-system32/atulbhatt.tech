import { Footer, Header } from "../../Components";
import styles from "./AboutUs.module.scss";
import HeroSection from "./HeroSection";
import QuoteSection from "./QuoteSection";

export default function AboutUs() {
  return (
    <div className={styles.about_us}>
      <Header />
      <HeroSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}
