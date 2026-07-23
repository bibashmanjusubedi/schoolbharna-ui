import React, { useState } from "react";
import styles from "./DontKnowWhichCourse.module.css";
import heroBg from "../../assets/images/bg-image-courses-hero.png";

const DontKnowWhichCourse = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const quickLinks = [
    { label: "B.COM COURSES", link: "#" },
    { label: "BE/B.TECH COURSES", link: "#" },
    { label: "MBBS COURSES", link: "#" },
    { label: "B.SC COURSES", link: "#" },
    { label: "BA COURSES", link: "#" },
    { label: "MBA/PGDM COURSES", link: "#" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className={styles.heroContainer}>
      {/* Background Image with GrayScale & Overlay */}
      <div
        className={styles.bgOverlay}
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Main Content */}
      <div className={styles.Content}>
        <h2 className={styles.heading}>Don't know which course to choose.We can help!</h2>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search course for ex. MCA, BA Finance, B.Tech. Course..."
            className = {styles.searchInput}
          />
          <button type="submit" className={styles.searchBtn}>Search</button>
        </form>

        {/* Quick Navigation Links */}
        <div className = {styles.quickLinks}>
          {quickLinks.map((item, index) => (
            <React.Fragment>
              <a href={item.link} className={styles.link}>{item.label}</a>
              {index < quickLinks.length - 1 && <span className = {styles.divider}>|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DontKnowWhichCourse;
