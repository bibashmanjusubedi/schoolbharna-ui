import Navbar from "../components/layout/Navbar";
import FindTheRightCourse from "../components/layout/Hero";
import HomeCards from "../components/layout/HomeCards";
import CourseHelp from "../components/layout/CourseHelp";
import "./Home.css";

export default function Home(){
    return(
        <>
            <Navbar/>
            <FindTheRightCourse/>
            <HomeCards />
            <CourseHelp />
        </>
    )
}