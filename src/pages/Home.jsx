import Navbar from "../components/layout/Navbar";
import FindTheRightCourse from "../components/layout/Hero";
import HomeCards from "../components/layout/HomeCards";
import "./Home.css";

export default function Home(){
    return(
        <>
            <Navbar/>
            <FindTheRightCourse/>
            <HomeCards />
        </>
    )
}