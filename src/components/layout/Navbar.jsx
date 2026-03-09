import "./Navbar.css";

export default function Navbar(){
    return(
        <header className="navbar">
            <div className="navbar-container">
                <div className= "navbar-logo">
                    <span className="logo-school">school</span>
                    <span className="logo-bharna">bharna</span>
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
                    <button className="theme-btn">◐</button>
                </div>
            </div>
        </header>
    )
}