import { Footer, Navbar } from "../../Components";
import { Project, Query } from "./Sections";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Project />
      <Query />
      <Footer />
    </div>
  );
}
