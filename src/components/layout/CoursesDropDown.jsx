import React from "react";
import "./CoursesDropDown.css";
import { Link }  from "react-router-dom"; 

export default function CoursesDropDown({ closeDropDown }) {
  return (
    <div className="dropdown-panel">
      <div className="dropdown-container">
        {/*Left Side: HighLight/Intro Section*/}
        <div className="dropdown-left">
          {/* Flex wrapper to place SVG icon and title side-by-side */}
          <div className="dropdown-header">
            <div className="dropdown-icon-wrapper">
              {/* A Clean SVG resembling my image icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3f86d9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </div>
            <h3>Courses &gt;</h3>
          </div>
          
          <p>
            Search, shortlist and compare thousands of courses to find the
            perfect one.
          </p>
        </div>

        {/* Middle Section: Popular Course Links columns */}
        <div className="dropdown-middle">
          <h4 className="section-title">Popular Courses</h4>
          <div className="links-column">
            <div className="column">
              <a href="/courses/accounting" onClick={closeDropDown}>
                Accounting
              </a>
              <a href="/courses/architecture" onClick={closeDropDown}>
                Architecture
              </a>
              <a href="/courses/civil" onClick={closeDropDown}>
                Civil Engineering
              </a>
              <a href="/courses/graphics" onClick={closeDropDown}>
                Graphic Design
              </a>
              <a href="/courses/law" onClick={closeDropDown}>
                Law
              </a>
              <a href="/courses/nursing" onClick={closeDropDown}>
                Nursing
              </a>
              <a href="/courses/psychology" onClick={closeDropDown}>
                Psychology
              </a>
            </div>
            <div className="column">
              <a href="/courses/a-levels" onClick={closeDropDown}>
                A-Levels
              </a>
              <a href="/courses/bba" onClick={closeDropDown}>
                Business Administration
              </a>
              <a href="/courses/cs" onClick={closeDropDown}>
                Computer Science
              </a>
              <a href="/courses/dentistry" onClick={closeDropDown}>
                Dentistry
              </a>
              <a href="/courses/medicine" onClick={closeDropDown}>
                Medicine
              </a>
              <a href="/courses/pharmacy" onClick={closeDropDown}>
                Pharmacy
              </a>
            </div>
          </div>
          <Link
            to="/courses"
            onClick={closeDropDown}
            className="blue-action-btn"
          >
            Browse all Courses <span>&gt;</span>
          </Link>
        </div>

        {/* Right Section:Careers column */}
        <div className="dropdown-right">
          <h4 className="section-title">Top Careers</h4>
          <div className="column font-darker">
            <a href="/careers/accountant" onClick={closeDropDown}>
              How to become an Accountant
            </a>
            <a href="/careers/lawyer" onClick={closeDropDown}>
              How to become a Lawyer
            </a>
            <a href="/careers/psychologist" onClick={closeDropDown}>
              How to become a Psychologist
            </a>
          </div>
          <a
            href="/careers"
            className="blue-action-btn"
            onClick={closeDropDown}
          >
            Browse Top Careers <span>&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
