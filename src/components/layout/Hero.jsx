import "./Hero.css";
import bgImage from "../../assets/images/bg-image.png";

// FindTheRightCourse (Hero Section)
export default function FindTheRightCourse(){
    return (
        <section
            className="find-course-section"
            style= {{ backgroundImage:`url(${bgImage})`}}
        >
            <div className= "find-course-overlay">
                <h1 className="find-course-title">FIND THE RIGHT COURSE</h1>

                <div className="find-course-search-box">
                    <div className= "find-course-select-wrapper">
                        <select className="find-course-select">
                            <option>Courses </option> 
                            <option>Engineering</option>
                            <option>Accountant</option>
                            <option>Science</option>
                            <option>Management</option>
                        </select>
                        <span className = "find-course-select-arrow"><svg width="11" height="7" viewBox="0 0 11 7" fill="#464646" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.77277 5.82317L0.216514 1.26678C-0.0734701 0.976921 -0.0734701 0.506996 0.216514 0.2173C0.506238 -0.0724335 0.976142 -0.0724335 1.26584 0.2173L5.29744 4.249L9.3289 0.2174C9.61874 -0.072319 10.0886 -0.072319 10.3783 0.2174C10.6682 0.507133 10.6682 0.977043 10.3783 1.26688L5.82199 5.82328C5.67706 5.96815 5.48731 6.04049 5.29746 6.04049C5.10753 6.04049 4.91764 5.96802 4.77277 5.82317Z" fill="#464646"/>
    </svg></span>
                    </div>
                   
                    {/* <svg className="find-course-divider" viewBox="0 0 1 49" fill="black" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" x2="0.5" y2="49" stroke="#CECECE"/>
</svg> */}


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