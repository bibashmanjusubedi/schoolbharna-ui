import "./CourseHelp.css";
import hotelIcon from "../../assets/images/exam.png";
import briefCase from "../../assets/images/briefcase.png";
import dependents from "../../assets/images/Dependents.png";
import home from "../../assets/images/Home.png";
import donations from "../../assets/images/Donations.png";
import selfEmployed from "../../assets/images/Self-Employed.png";
import ownBusiness from "../../assets/images/own-business.png";
import medicalExpenses from "../../assets/images/medical-expenses.png";
import stocks from "../../assets/images/Stocks.png";
import cpaIcon from "../../assets/images/CPA-icon.png";

const courses = [
    { title: "Hotel Management", colleges:"4000 Colleges", icon:hotelIcon},
    { title: "Business", colleges: "4000 Colleges", icon: briefCase },
    { title: "Design", colleges: "4000 Colleges", icon:  dependents},
    { title: "Computer & IT", colleges: "4000 Colleges", icon: hotelIcon },
    { title: "Business", colleges: "4000 Colleges", icon : hotelIcon },
    { title: "Hotel Management", colleges: "4000 Colleges", icon: home },
    { title: "Design", colleges: "4000 Colleges", icon: donations },
    { title: "Computer & IT", colleges: "4000 Colleges", icon: selfEmployed },
    { title: "Hotel Management", colleges: "4000 Colleges", icon: ownBusiness },
    { title: "Medical", colleges: "4000 Colleges", icon: medicalExpenses },
    { title: "Accounting", colleges: "4000 Colleges", icon: stocks },
    { title: "Arts & Media", colleges: "4000 Colleges", icon: cpaIcon },    
];

export default function CourseHelp(){
    return (
        <section className="course-help">
            <div className= "course-help-container">
                
                <div className="course-help-header">
                    <h2>In doubt about which course to take?</h2>

                    <div className="course-help-subrow">
                        <p>
                            See information on course length, area of activity, job market,cutt-off points, average salary and more.
                        </p>

                        <a href="/" className="view-all">View all courses</a>

                    </div>

                    
                </div>
                
                <div className="course-grid">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <div className="course-icon"><img src={course.icon}/></div>
                            <h3>{course.title}</h3>
                            <span>{course.colleges}</span>
                        </div>
                    ))}
                </div>
                
                
            </div>
        </section>
    )
}