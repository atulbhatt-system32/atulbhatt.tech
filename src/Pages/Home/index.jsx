import { Footer, Navbar } from "../../Components";
import { Project, Query, Requirement } from "./Sections";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Project />
      <Requirement />
      <Query />
      <Footer />
    </div>
  );
}
