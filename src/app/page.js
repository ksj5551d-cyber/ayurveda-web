import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import ChoosePath from "@/components/ChoosePath";
import WhyChooseUs from "@/components/WhyChooseUs";
import Doctors from "@/components/Doctors";
import ClinicalApproach from "@/components/ClinicalApproach";
import Testimonials from "@/components/Testimonials";
import Environment from "@/components/Environment";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AnimatedScrollGrid from "@/components/AnimatedScrollGrid";

export default function Home() {
  return (
    <>
      <IntroLoader>
        <Navbar />
        <main className="flex min-h-screen flex-col w-full">
          <Hero />
          
          <AnimatedScrollGrid>
            <WhoWeHelp />
            <ChoosePath />
            <WhyChooseUs />
            <Doctors />
            <ClinicalApproach />
            <Testimonials />
            <Environment />
            <Articles />
          </AnimatedScrollGrid>

          {/* Normal footer sections */}
          <Newsletter />
          <FinalCTA />
        </main>
        <Footer />
      </IntroLoader>
    </>
  );
}
