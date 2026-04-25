import Navbar from "../components/layout/Navbar";
import FindTheRightCourse from "../components/layout/Hero";
import HomeCards from "../components/layout/HomeCards";
import CourseHelp from "../components/layout/CourseHelp";
import FeaturedInstitutions from "../components/layout/FeaturedInstitutions";
import SecuritySection from "../components/layout/SecuritySection";
import NucasAdvantage from "../components/layout/NucasAdvantage";
import "./Home.css";
import TopRatedInstitutes from "../components/layout/TopRatedInstitutes";

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
        </>
    )
}