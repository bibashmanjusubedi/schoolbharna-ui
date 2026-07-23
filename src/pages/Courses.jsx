import Navbar from "../components/layout/Navbar";
import CourseHelp from "../components/layout/CourseHelp";
import NewsFromNucas from "../components/layout/NewsFromNucas";
import CourseAppBanner from "../components/layout/CourseAppBanner";
import JourneyBanner from "../components/layout/JourneyBanner";
import FooterLinks from "../components/layout/FooterLinks";
import Footer from "../components/layout/Footer";
import DontKnowWhichCourse from "../components/layout/DontKnowWhichCourse";

export default function Courses() {
  return (
    <>
      <Navbar />
      <DontKnowWhichCourse />

      <CourseHelp
        title="Choose by stream"
        subtitle="See information on course length, area of activity, job market, cut-off points, average salary and more."
        actionText="View all courses"
      />
      <NewsFromNucas
        title= "Popular Articles from courses"
      />

      <CourseAppBanner />

      <JourneyBanner />

      <FooterLinks />
      <Footer />
    </>
  );
}
