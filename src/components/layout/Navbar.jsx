import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import loginIcon from "../../assets/images/loginIcon.png";

export default function Navbar(){
    return(
        <header className="navbar">
            <div className="navbar-container">
                <div className= "navbar-logo">
                    <img src={logo} />
                    {/* <span className="logo-school">school</span>
                    <span className="logo-bharna">bharna</span> */}
                </div>

                <nav className="navbar-menu">
                    <a href="/">Courses</a>
                    <a href="/">Institutes</a>
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
    )
}