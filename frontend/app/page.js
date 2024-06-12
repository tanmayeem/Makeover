import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";

export default function Home() {
  return (
    <>
    <Navbar/>

    <Hero/>

    <Aboutme/>
   
    <Portfolio/>

    <Logo/>

    <Footer/>
    
    </>
  );
}
