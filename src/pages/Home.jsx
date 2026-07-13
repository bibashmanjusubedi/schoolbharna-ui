import Navbar from "../components/layout/Navbar";
import FindTheRightCourse from "../components/layout/Hero";
import HomeCards from "../components/layout/HomeCards";
import CourseHelp from "../components/layout/CourseHelp";
import FeaturedInstitutions from "../components/layout/FeaturedInstitutions";
import SecuritySection from "../components/layout/SecuritySection";
import NucasAdvantage from "../components/layout/NucasAdvantage";
import "./Home.css";
import TopRatedInstitutes from "../components/layout/TopRatedInstitutes";
import NewsFromNucas from "../components/layout/NewsFromNucas";
import NucasEvents from "../components/layout/NucasEvents";
import CourseAppBanner from "../components/layout/CourseAppBanner";
import Reviews from "../components/layout/Reviews";

export default function Home(){
    return(
        <>
            <Navbar/>
            <FindTheRightCourse/>
            <HomeCards />
            <CourseHelp />
            <FeaturedInstitutions />
            <SecuritySection />
            <NucasAdvantage />
            <TopRatedInstitutes />
            <NewsFromNucas />
            <NucasEvents />
            <CourseAppBanner />
            <Reviews />
        </>
    )
}