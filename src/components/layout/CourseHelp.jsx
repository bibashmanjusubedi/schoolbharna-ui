import briefCase from "../../assets/images/briefcase.png";
import cpaIcon from "../../assets/images/CPA-icon.png";
import dependents from "../../assets/images/Dependents.png";
import donations from "../../assets/images/Donations.png";
import hotelIcon from "../../assets/images/exam.png";
import home from "../../assets/images/Home.png";
import medicalExpenses from "../../assets/images/medical-expenses.png";
import ownBusiness from "../../assets/images/own-business.png";
import selfEmployed from "../../assets/images/Self-Employed.png";
import stocks from "../../assets/images/Stocks.png";

const courses = [
  { title: "Hotel Management", colleges: "4000 Colleges", icon: hotelIcon },
  { title: "Business", colleges: "4000 Colleges", icon: briefCase },
  { title: "Design", colleges: "4000 Colleges", icon: dependents },
  { title: "Computer & IT", colleges: "4000 Colleges", icon: hotelIcon },
  { title: "Business", colleges: "4000 Colleges", icon: hotelIcon },
  { title: "Hotel Management", colleges: "4000 Colleges", icon: home },
  { title: "Design", colleges: "4000 Colleges", icon: donations },
  { title: "Computer & IT", colleges: "4000 Colleges", icon: selfEmployed },
  { title: "Hotel Management", colleges: "4000 Colleges", icon: ownBusiness },
  { title: "Medical", colleges: "4000 Colleges", icon: medicalExpenses },
  { title: "Accounting", colleges: "4000 Colleges", icon: stocks },
  { title: "Arts & Media", colleges: "4000 Colleges", icon: cpaIcon },
];

export default function CourseHelp({
  title = "In doubt about which course to take?",
  subtitle = "See information on course length, area of activity, job market,cutt-off points, average salary and more.",
  actionText = "View all courses",
}) {
  return (
    <CssWrapper>
      <section className="course-help">
        <div className="course-help-container">
          <div className="course-help-header">
            <h2>{title}</h2>

            <div className="course-help-subrow">
              <p>{subtitle}</p>

              <a href="/" className="view-all">
                {actionText}
              </a>
            </div>
          </div>

          <div className="course-grid">
            {courses.map((course, index) => (
              <div className="course-card" key={index}>
                <div className="course-icon">
                  <img src={course.icon} />
                </div>
                <h3>{course.title}</h3>
                <span>{course.colleges}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CssWrapper>
  );
}
function CssWrapper({ children }) {
  return (
    <div>
      <style jsx>
        {`
          .course-help {
            background: #f5f7fa;
            padding: 40px 0;
          }

          .course-help-container {
            max-width: 1200px;
            margin: 0 auto;
            left: -16px;
            position: relative;
          }

          .course-help-header {
            text-align: left;
            margin-bottom: 20px;
          }

          .course-help-header h2 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .course-help-header p {
            font-size: 14px;
            color: #666;
          }

          .course-help-subrow {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
          }

          .view-all {
            position: absolute;
            right: -32px;
            top: 0;
            color: #2e9adf;
            font-size: 14px;
            text-decoration: none;
          }

          .course-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 18px;
          }

          .course-card {
            background: #fff;
            border: 1px solid #e6e6e6;
            text-align: center;
            padding: 22px 12px 18px;
            min-height: 120px;
            box-shadow: 0 1px rgba(0, 0, 0, 0.08);
            transition: transform 0.2s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .course-card:hover {
            transform: translateY(-2px);
          }

          .course-icon {
            font-size: 14px;
            color: #2e9adf;
            display: flex;
            justify-content: center;
            margin-bottom: 0;
          }

          .course-icon img {
            width: 32px;
            height: 32px;
            object-fit: contain;
          }

          .course-card h3 {
            font-size: 14px;
            font-weight: 600;
            color: #333;
            margin: 0;
          }

          .course-card span {
            font-size: 12px;
            color: #777;
            margin: 0;
          }
        `}
      </style>
      {children}
    </div>
  );
}
