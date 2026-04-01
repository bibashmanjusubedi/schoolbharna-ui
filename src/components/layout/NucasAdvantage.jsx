import "./NucasAdvantage.css";
import application from "../../assets/images/application.png";
import bullet from "../../assets/images/Group747.png";

export default function NucasAdvantage(){
    return (
        <section className="nucas-advantage">
            <div className="advantage-container">
                <div className="advantage-header">
                    <h2>Nucas Advantage</h2>
                    <p>
                        Check out the facilities you can have when choosing your college with nucas.
                    </p>
                    <div className="advantage-tabs-wrapper">
                        <div className="advantage-tabs-container">
                            <div className="advantage-tabs">
                                    <span className="active">Common Application</span>
                                    <span>Write Review</span>
                                    <span>Find Scholarship</span>
                                    <span>Exams</span>
                                    <span>StudentHub</span>
                                    <span>Results</span>
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
            </div>
            

            <div className="advantage-hero">                
                <img src={application} alt="Student" />

                <div className="overlay">
                    <div className="overlay-content">
                        <h1>One Application. 220+ Institutions</h1>

                        <ul>
                            <li><img src={bullet}/> <span>Explore top-ranking universities catered to your needs, in one place</span></li>
                            <li><img src={bullet}/> <span>Key in details ONCE to multiply institutions</span></li>
                            <li><img src={bullet}/> <span>Sift through numerous offers and find the best one for you & your future!</span></li>
                        </ul>

                        <div className="cta">
                            <button className="cta-btn">Create Profile <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12.4395L6.19955 6.21964L0 -0.000141144V12.4395Z" fill="white"/>
                                </svg>
                            </button>
                            <span className="count">177890+ courses applied so far</span>
                        </div>
                    </div>                
                  
                </div>
            </div>
        </section>
    );
}