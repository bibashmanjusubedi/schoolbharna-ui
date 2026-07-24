
import after10 from "../../assets/images/After10.png";
import afterCertificate from "../../assets/images/AfterCertificate.png";
import afterDiploma from "../../assets/images/AfterDiploma.png";
import afterMasters from "../../assets/images/AfterMasters.png";
import afterPhd from "../../assets/images/AfterPhD.png";
import afterPlus2 from "../../assets/images/AfterPlus2.png";

const courseData = [
    {
        id: 1,
        title: "After 10th Courses",
        subcategories: "Science | Management | Education",
        image: after10
    },
    {
        id: 2,
        title: "After 10+2 Courses",
        subcategories: "Bachelors | Diploma | CTEVT",
        image: afterPlus2
    },
    {
        id: 3,
        title: "Diploma Courses",
        subcategories: "Science | Management | Education",
        image: afterDiploma
    },
    {
        id: 4,
        title: "Certificates Courses",
        subcategories: "Science | Management | Education",
        image: afterCertificate
    },
    {
        id: 5,
        title: "MD/PG Courses",
        subcategories: "Science | Management | Education",
        image: afterMasters
    },
    {
        id: 6,
        title: "Ph.D Research Courses",
        subcategories: "Science | Management | Education",
        image: afterPhd
    }
];

const DesiredCourse = () => {
    return (
        <CssWrapper>

        <section className="courses-section">
            <div className="courses-container">
                {/* Header */}
                <div className="courses-header">
                    <h2 className="courses-title">
                        Find Your Desired Courses According to Educational Level
                    </h2>
                    <p className="courses-subtitle">
                        nucaas.com is an extensive search engine for students, parents, and education industry players who are seeking information
                    </p>
                </div>

                {/* Grid */}
                <div className="courses-grid">
                    {courseData.map((course) => (
                        <div key={course.id} className="course-card">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="card-image"
                            />
                            <div className="card-overlay">
                                <h3 className="card-title">{course.title}</h3>
                                <p className="card-subcategories">{course.subcategories}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </CssWrapper>

    );
};

export default DesiredCourse;


function CssWrapper({children}){
    return(
        <div>
              <style jsx>{`
     .courses-section {
    background-color: #e2e2e2;
    padding: 50px 20px;
    font-family: Arial, sans-serif;
}

.courses-container {
    max-width: 1100px;
    margin: 0 auto;
}

/* Header */
.courses-header {
    margin-bottom: 24px;
}

.courses-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333333;
    margin: 0 0 6px 0;
}

.courses-subtitle {
    font-size: 0.85rem;
    color: #666666;
    margin: 0;
    line-height: 1.4;
}

/* 3-Column Grid */
.courses-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

/* Card */
.course-card {
    position: relative;
    height: 200px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
}

/* Full Bleed Image */
.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Full Overlay Layer */
.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box; /* CRITICAL: prevents padding from breaking top/left dimensions */
    padding: 16px;
  
    /* Gradient: darker at bottom for clean text legibility */
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.35) 50%,
        rgba(0, 0, 0, 0.1) 100%
    );

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

/* Text Formatting */
.card-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 4px 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

.card-subcategories {
    font-size: 0.75rem;
    color: #dddddd;
    margin: 0;
    font-weight: 400;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}
    `}</style>
{children}
        </div>
    )
}