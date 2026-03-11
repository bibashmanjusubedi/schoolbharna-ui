import "./Hero.css";
import bgImage from "../../assets/images/bg-image.png";

// FindTheRightCourse (Hero Section)
export default function FindTheRightCourse(){
    return (
        <section
            className="find-course-section"
            style= {{ backgroundImage:`url{$bgImage})`}}
        >
            <div className= "find-course-overlay">
                <h1 className="find-course-title">FIND THE RIGHT COURSE</h1>

                <div className="find-course-search-box">
                    <select className="find-course-select">
                        <option>Courses</option>
                        <option>Engineering</option>
                        <option>Accountant</option>
                        <option>Science</option>
                        <option>Management</option>
                    </select>

                    <input
                        type="text"
                        className="find-course-input"
                        placeholder="e.g. Engineering, Accountant. etc."/>
                    

                    <button className = "find-course-button">SEARCH</button>
                </div>
            </div>
        </section>
    );
}