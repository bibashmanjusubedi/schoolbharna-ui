import "./NucasAdvantage.css";
import application from "../../assets/images/application.png";

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
                            <li>Explore top-ranking universities catered to your needs, in one place</li>
                            <li>Key in details ONCE to multiply institutions</li>
                            <li>Sift through numerous offers and find the best one for you & your future!</li>
                        </ul>

                        <div className="cta">
                            <button>Create Profile</button>
                            <span className="count">177890+ courses applied so far</span>
                        </div>
                    </div>                
                  
                </div>
            </div>
        </section>
    );
}