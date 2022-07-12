import { Footer, Header } from "../../Components";
import styles from "./AboutUs.module.scss";
import DescriptionWithImage from "./DescriptionWithImage";
import HeroSection from "./HeroSection";
import QuoteSection from "./QuoteSection";

export default function AboutUs() {
  return (
    <div className="overflow-hidden w-full">
      <Header />
      <HeroSection />
      <QuoteSection />
      <DescriptionWithImage />
      <Footer />
    </div>
  );
}
