import Navbar from "../components/layout/Navbar";
import FindTheRightCourse from "../components/layout/Hero";
import HomeCards from "../components/layout/HomeCards";

export default function Home(){
    return(
        <>
            <Navbar/>
            <FindTheRightCourse/>
            <HomeCards />
        </>
    )
}