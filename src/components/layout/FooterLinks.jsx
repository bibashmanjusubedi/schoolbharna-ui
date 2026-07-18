import "./FooterLinks.css";

const footerData = [
  {
    title: "Location",
    links: [
      "Universities in Kathmandu",
      "Colleges in Pokhara",
      "Colleges in Lalitpur",
    ],
  },
  {
    title: "Diploma",
    links: [
      "Universities in Province 5",
      "Universities in Province 3",
      "Colleges in Kathmandu",
    ],
  },
  {
    title: "Degree",
    links: ["Colleges in Dang", "Schools in Chitwan", "Schools in Valley"],
  },
  {
    title: "Career",
    links: [
      "Colleges in Dhangadi",
      "Schools in Biratnagar",
      "Schools in Butwal",
    ],
  },
  {
    title: "Exams",
    links: ["Colleges in Dharan", "Colleges in Itahari", "Colleges Illam"],
  },
  {
    title: "Courses",
    links: [
      "Colleges in Dhangadi",
      "Schools in Biratnagar",
      "Schools in Butwal",
    ],
  },
  {
    title: "Scholarship",
    links: ["Colleges in Dharan", "Colleges in Itahari", "Colleges in Illam"],
  },
  {
    title: "Institute",
    links: [
      "Institutes in Kathmandu",
      "Institutes in Pokhara",
      "Institutes in Lalitpur",
    ],
  },
];

function FooterLinks() {
  return (
    <section className="footer-links">
      <div className="footer-links-container">
        {footerData.map((column) => (
          <div className="footer-column" key={column.title}>
            <h4>{column.title}</h4>

            <ul>
              {column.links.map((item) => (
                <li key={item}>
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FooterLinks;
