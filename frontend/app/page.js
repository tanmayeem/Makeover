import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>

    <SpeedInsights/>

    
    <Navbar/>

    <Hero/>

    <Aboutme/>
   
    <Portfolio/>

    <Logo/>

    <Footer/>
    
    </>
  );
}
