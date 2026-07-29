import "./Careers.css";
import Navbar from "../components/layout/Navbar";
import JourneyBanner from "../components/layout/JourneyBanner";
import FooterLinks from "../components/layout/FooterLinks";
import Footer from "../components/layout/Footer";
import CareersHero from "../components/layout/CareersHero";
import ChooseBestCareers from "../components/layout/ChooseBestCareers";
import CareerGuideDirectory from "../components/layout/CareerGuideDirectory";
import heroImg from '../assets/images/CareersHero.png';

export default function Careers() {
  return (
    <>
      <Navbar />
      <CareersHero bgImage={heroImg}/>
      <ChooseBestCareers />
      <CareerGuideDirectory />
      <JourneyBanner />
      <FooterLinks />
      <Footer />
    </>
  );
}
