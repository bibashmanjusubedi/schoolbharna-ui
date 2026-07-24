import React from 'react';
import styles from './DesiredCourse.module.css'; // <--- Import as module

import after10 from "../../assets/images/After10.png";
import afterPlus2 from "../../assets/images/AfterPlus2.png";
import afterDiploma from "../../assets/images/AfterDiploma.png";
import afterCertificate from "../../assets/images/AfterCertificate.png";
import afterMasters from "../../assets/images/AfterMasters.png";
import afterPhd from "../../assets/images/AfterPhD.png";

const courseData = [
    { id: 1, title: "After 10th Courses", subcategories: "Science | Management | Education", image: after10 },
    { id: 2, title: "After 10+2 Courses", subcategories: "Bachelors | Diploma | CTEVT", image: afterPlus2 },
    { id: 3, title: "Diploma Courses", subcategories: "Science | Management | Education", image: afterDiploma },
    { id: 4, title: "Certificates Courses", subcategories: "Science | Management | Education", image: afterCertificate },
    { id: 5, title: "MD/PG Courses", subcategories: "Science | Management | Education", image: afterMasters },
    { id: 6, title: "Ph.D Research Courses", subcategories: "Science | Management | Education", image: afterPhd }
];

const DesiredCourse = () => {
    return (
        <section className={styles.coursesSection}>
            <div className={styles.coursesContainer}>
                {/* Header */}
                <div className={styles.coursesHeader}>
                    <h2 className={styles.coursesTitle}>
                        Find Your Desired Courses According to Educational Level
                    </h2>
                    <p className={styles.coursesSubtitle}>
                        nucaas.com is an extensive search engine for students, parents, and education industry players who are seeking information
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.coursesGrid}>
                    {courseData.map((course) => (
                        <div key={course.id} className={styles.courseCard}>
                            <img
                                src={course.image}
                                alt={course.title}
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay}>
                                <h3 className={styles.cardTitle}>{course.title}</h3>
                                <p className={styles.cardSubcategories}>{course.subcategories}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesiredCourse;