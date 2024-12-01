import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Goals from "./Components/Goals";
import HeroSection from "./Components/HeroSection";
import Learning from "./Components/Learning";
import Price from "./Components/Price";

export default function Home() {
  return (
    <div className="homepage" >
    <Navbar/>
    <HeroSection/>
    <Goals/>
    <Price/>
    <Learning/>
    <Footer/>
    </div>
  )
}
