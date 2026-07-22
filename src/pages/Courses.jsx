import Navbar from "../components/layout/Navbar";
import CourseHelp from "../components/layout/CourseHelp";

export default function Courses() {
  return (
    <>
      <Navbar />
      <CourseHelp
        title="Choose by stream"
        subtitle="See information on course length, area of activity, job market, cut-off points, average salary and more."
        actionText="View all courses"
      />
    </>
  );
}
