import "./Careers.css";
import Navbar from "../components/layout/Navbar";
import JourneyBanner from "../components/layout/JourneyBanner";
import FooterLinks from "../components/layout/FooterLinks";
import Footer from "../components/layout/Footer";
import CareersHero from "../components/layout/CareersHero";

export default function Careers() {
  return (
    <>
      <Navbar />
      <CareersHero />
      <JourneyBanner />
      <FooterLinks />
      <Footer />
    </>
  );
}
