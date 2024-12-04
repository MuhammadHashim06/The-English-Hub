import CourseFooter from "../../Components/CourseFooter";
// import KidsNav from "../../Components/KidsNav";
import Navbar from "../../Components/Navbar";
import GlobeStudent from "./components/GlobeStudent";
import KidsHero from "./components/KidsHero";
// import TheTutor from "./components/TheTutor";

export default function Kids() {
  return (
    <div>
      {" "}
      <Navbar newclass={'scrolled'} />
      <KidsHero />
      <GlobeStudent />
      {/* <TheTutor /> */}
      <CourseFooter />
    </div>
  );
}
