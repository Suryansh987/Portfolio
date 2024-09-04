import Navbar from "@/components/ui/Navbar";
import BlurFade from "@/components/magicui/blur-fade";
import HeroSection from "@/components/ui/HeroSection";
import Technology from "@/components/ui/Technology";
import Projects from "@/components/ui/Projects";
import AboutMe from "@/components/ui/AboutMe";
import Experience from "@/components/ui/Experience";
import Footer from "@/components/ui/Footer";

const Page = () => {
  
  
  return (
    <>
    <BlurFade duration={2}>
    <Navbar/>
    </BlurFade>
    
    <BlurFade duration={2}>
    <HeroSection/>
    </BlurFade>
    
    <BlurFade duration={2}>
    <AboutMe/>
    </BlurFade>

    <BlurFade duration={2}>
    <Experience/>
    </BlurFade>

    <BlurFade duration={2} inView={true}>
    <Technology/>
    </BlurFade>

    <BlurFade duration={2} inView={true}>
    <Projects/>
    </BlurFade>

    <BlurFade duration={2} inView={true}>
    <Footer/>
    </BlurFade>
    </>
  );
};


export default Page;