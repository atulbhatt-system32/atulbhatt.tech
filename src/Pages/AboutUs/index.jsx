import { Footer, Header } from "../../Components";
import DescriptionWithImage from "./DescriptionWithImage";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import QuoteSection from "./QuoteSection";

export default function AboutUs() {
  return (
    <div className="overflow-hidden w-full">
      <Header />
      <HeroSection />
      <QuoteSection />
      <DescriptionWithImage />

      <Gallery />
      <Footer />
    </div>
  );
}
