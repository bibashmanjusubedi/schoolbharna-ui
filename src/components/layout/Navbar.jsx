import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import loginIcon from "../../assets/images/loginIcon.png";
import CoursesDropDown from "./CoursesDropDown";

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleCoursesDropDown = (e) => {
    e.preventDefault();
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} />
          {/* <span className="logo-school">school</span>
                    <span className="logo-bharna">bharna</span> */}
        </div>

        <nav className="navbar-menu">
          {/* Added active class and click event */}
          <div className="nav-item-container">
            <a
              href="/"
              onClick={toggleCoursesDropDown}
              className={`nav-link ${isCoursesOpen ? "active" : ""}`}
            >
              Courses{" "}
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="#464646"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.77277 5.82317L0.216514 1.26678C-0.0734701 0.976921 -0.0734701 0.506996 0.216514 0.2173C0.506238 -0.0724335 0.976142 -0.0724335 1.26584 0.2173L5.29744 4.249L9.3289 0.2174C9.61874 -0.072319 10.0886 -0.072319 10.3783 0.2174C10.6682 0.507133 10.6682 0.977043 10.3783 1.26688L5.82199 5.82328C5.67706 5.96815 5.48731 6.04049 5.29746 6.04049C5.10753 6.04049 4.91764 5.96802 4.77277 5.82317Z"
                  fill="#464646"
                />
              </svg>
            </a>
            {/* Conditionally render the dropdown panel */}
            {isCoursesOpen && (
              <CoursesDropDown closeDropdown={() => setIsCoursesOpen(false)} />
            )}
          </div>

          <a href="/">
            Institutes{" "}
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="#464646"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.77277 5.82317L0.216514 1.26678C-0.0734701 0.976921 -0.0734701 0.506996 0.216514 0.2173C0.506238 -0.0724335 0.976142 -0.0724335 1.26584 0.2173L5.29744 4.249L9.3289 0.2174C9.61874 -0.072319 10.0886 -0.072319 10.3783 0.2174C10.6682 0.507133 10.6682 0.977043 10.3783 1.26688L5.82199 5.82328C5.67706 5.96815 5.48731 6.04049 5.29746 6.04049C5.10753 6.04049 4.91764 5.96802 4.77277 5.82317Z"
                fill="#464646"
              />
            </svg>
          </a>

          <a href="/">Scholarship</a>
          <a href="/">Exams</a>
          <a href="/">Abouts</a>
          <a href="/">StudentsHub</a>
        </nav>
        <div className="navbar-actions">
          <button className="qna-btn">QnA</button>
          <img src={loginIcon} className="theme-btn"></img>
        </div>
      </div>
    </header>
  );
}
