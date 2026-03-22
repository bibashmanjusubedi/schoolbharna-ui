import "./CourseHelp.css";


const courses = [
    { title: "Hotel Management", colleges:"4000 Colleges", icon:"Some Hotel Icon"},
    { title: "Business", colleges: "4000 Colleges", icon: "Some Brief Case Icon" },
    { title: "Design", colleges: "4000 Colleges", icon: "Some Design Icon" },
    { title: "Computer & IT", colleges: "4000 Colleges", icon: "Some Laptop Icon" },
    { title: "Business", colleges: "4000 Colleges", icon : "Some Brief Case Icon" },
    { title: "Hotel Management", colleges: "4000 Colleges", icon: "Some Hotel Icon" },
    { title: "Design", colleges: "4000 Colleges", icon: "Some Design Service Icon" },
    { title: "Computer & IT", colleges: "4000 Colleges", icon: "Some IT Icon" },
    { title: "Hotel Management", colleges: "4000 Colleges", icon: "Some Hotel Icon" },
    { title: "Medical", colleges: "4000 Colleges", icon: "Some Medical Icon" },
    { title: "Accounting", colleges: "4000 Colleges", icon: "Some Chart Icon" },
    { title: "Arts & Media", colleges: "4000 Colleges", icon: "Some Arts Icon" },    
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
                            <div className="course-icon">{course.icon}</div>
                            <h3>{course.title}</h3>
                            <span>{course.colleges}</span>
                        </div>
                    ))}
                </div>
                
                
            </div>
        </section>
    )
}