import React from "react";
import "./InstitutionDropDown.css"; // Shared CSS for both dropdowns

export default function InstitutionDropDown({ closeDropDown }) {
  return (
    <div className="dropdown-panel">
      <div className="dropdown-container">
        {/* Left Side: Highlight/Intro Section */}
        <div className="dropdown-left">
          <div className="dropdown-header">
            <div className="dropdown-icon-wrapper">
              {/* SVG Icon matching the Institutions header */}
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
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3>Institutions &gt;</h3>
          </div>

          <p>
            Search, shortlist and compare thousands of institutions to find the
            perfect one.
          </p>
        </div>

        {/* Middle Section: Popular Institutions Links */}
        <div className="dropdown-middle">
          <h4 className="section-title">Popular Institutions</h4>
          <div className="links-column">
            <div className="column">
              <a href="/institutions/trichandra" onClick={closeDropDown}>
                Trichandra Campus
              </a>
              <a href="/institutions/trinity" onClick={closeDropDown}>
                Trinity College
              </a>
              <a href="/institutions/kmc" onClick={closeDropDown}>
                Kathmandu Modern College
              </a>
              <a href="/institutions/liverpool" onClick={closeDropDown}>
                Liverpool College
              </a>
              <a href="/institutions/budhanilkantha" onClick={closeDropDown}>
                Budhanilkantha School
              </a>
              <a href="/institutions/ku" onClick={closeDropDown}>
                Kathmandu University
              </a>
              <a href="/institutions/patan" onClick={closeDropDown}>
                Patan Campus
              </a>
            </div>
            <div className="column">
              <a href="/institutions/rr" onClick={closeDropDown}>
                Ratnarajya College
              </a>
              <a href="/institutions/nlc" onClick={closeDropDown}>
                Nepal Law Campus
              </a>
              <a href="/institutions/tu" onClick={closeDropDown}>
                Tribhuvan University
              </a>
              <a href="/institutions/ncc" onClick={closeDropDown}>
                Nepal Commerce College
              </a>
              <a href="/institutions/nist" onClick={closeDropDown}>
                NIST
              </a>
              <a href="/institutions/nec" onClick={closeDropDown}>
                Nepal Engineering College
              </a>
              <a href="/institutions/pu" onClick={closeDropDown}>
                Pokhara University
              </a>
            </div>
          </div>
          <a
            href="/institutions"
            onClick={closeDropDown}
            className="blue-action-btn"
          >
            Browse all Institutions <span>&gt;</span>
          </a>
        </div>

        {/* Right Section: By Category Links */}
        <div className="dropdown-right">
          <h4 className="section-title">By Category</h4>
          <div className="column font-darker">
            <a href="/institutions/universities" onClick={closeDropDown}>
              Universities
            </a>
            <a href="/institutions/colleges" onClick={closeDropDown}>
              Colleges
            </a>
            <a href="/institutions/schools" onClick={closeDropDown}>
              Schools
            </a>
            <a href="/institutions/preschools" onClick={closeDropDown}>
              Pre-schools
            </a>
            <a href="/institutions/ctevt" onClick={closeDropDown}>
              CTEVT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}