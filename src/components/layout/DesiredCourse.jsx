import React from 'react';
import './DesiredCourse.css';

import after10 from "../../assets/images/After10.png";
import afterPlus2 from "../../assets/images/AfterPlus2.png";
import afterDiploma from "../../assets/images/AfterDiploma.png";
import afterCertificate from "../../assets/images/AfterCertificate.png";
import afterMasters from "../../assets/images/AfterMasters.png";
import afterPhd from "../../assets/images/AfterPhD.png";

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
    );
};

export default DesiredCourse;