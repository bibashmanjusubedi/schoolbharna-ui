import "./Careers.css";
import Navbar from "../components/layout/Navbar";
import JourneyBanner from "../components/layout/JourneyBanner";
import FooterLinks from "../components/layout/FooterLinks";
import Footer from "../components/layout/Footer";
import CareersHero from "../components/layout/CareersHero";
import ChooseBestCareers from "../components/layout/ChooseBestCareers";
import CareerGuideDirectory from "../components/layout/CareerGuideDirectory";

export default function Careers() {
  return (
    <>
      <Navbar />
      <CareersHero />
      <ChooseBestCareers />
      <CareerGuideDirectory />
      <JourneyBanner />
      <FooterLinks />
      <Footer />
    </>
  );
}
