// import "./Footer.css";
// import logo from "../../assets/images/logo.png";

// const footerLinks = [
//   {
//     title: "Company",
//     links: [
//       "About",
//       "Our Team",
//       "Careers",
//       "Blog",
//       "Events",
//       "Partners",
//       "Contact us",
//     ],
//   },
//   {
//     title: "BUY & SELL",
//     links: [
//       "Service for Students",
//       "Service for Colleges",
//       "Register your College",
//       "Our Experts",
//       "Advertise with us",
//       "Email us",
//     ],
//   },
//   {
//     title: "CUSTOMER SERVICES",
//     links: [
//       "Service for Students",
//       "Service for Colleges",
//       "Register your College",
//       "Our Experts",
//       "Advertise with us",
//       "Email us",
//     ],
//   },
//   {
//     title: "QUICK LINKS",
//     links: [
//       "College Reviews",
//       "Discussion Hub",
//       "Useful Articles",
//       "Mbbs Programs",
//       "Career Guidance",
//       "Study Abroad",
//       "Ask Experts",
//       "News Updates",
//     ],
//   },
// ];

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* Left Section */}
//         <div className="footer-about">
//           <img
//             src={logo}
//             alt="SchoolBharna Logo"
//             className="footer-logo"
//           />

//           <p>Dhapasi-06, Tokha</p>
//           <p>Kathmandu, Nepal</p>

//           <br />

//           <p>support@nucas.com</p>
//           <p>Toll Free: 9810853076</p>
//           <p>Office Hours: 10 AM to 6 PM (all 7 days)</p>
//         </div>

//         {/* Right Columns */}
//         <div className="footer-links">
//           {footerLinks.map((section) => (
//             <div className="footer-column" key={section.title}>
//               <h4>{section.title}</h4>

//               <ul>
//                 {section.links.map((link) => (
//                   <li key={link}>
//                     <a href="/">{link}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//       </div>

//       <div className="footer-bottom">
//         <p>
//           Copyright © 2023-2024 | Devanagari Media Pvt. Ltd.
//           All rights reserved
//         </p>

//         <div className="footer-policy">
//           <a href="/">User Policy</a>
//           <a href="/">Terms</a>
//           <a href="/">Privacy</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
// 1. Changed import to read styles as an object from the module
import styles from "./Footer.module.css"; 
import logo from "../../assets/images/logo.png";

const footerLinks = [
  {
    title: "Company",
    links: [
      "About",
      "Our Team",
      "Careers",
      "Blog",
      "Events",
      "Partners",
      "Contact us",
    ],
  },
  {
    title: "BUY & SELL",
    links: [
      "Service for Students",
      "Service for Colleges",
      "Register your College",
      "Our Experts",
      "Advertise with us",
      "Email us",
    ],
  },
  {
    title: "CUSTOMER SERVICES",
    links: [
      "Service for Students",
      "Service for Colleges",
      "Register your College",
      "Our Experts",
      "Advertise with us",
      "Email us",
    ],
  },
  {
    title: "QUICK LINKS",
    links: [
      "College Reviews",
      "Discussion Hub",
      "Useful Articles",
      "Mbbs Programs",
      "Career Guidance",
      "Study Abroad",
      "Ask Experts",
      "News Updates",
    ],
  },
];

function Footer() {
  return (
    // 2. Updated all classes to use the styles object mapping
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>

        {/* Left Section */}
        <div className={styles["footer-about"]}>
          <img
            src={logo}
            alt="SchoolBharna Logo"
            className={styles["footer-logo"]}
          />

          <p>Dhapasi-06, Tokha</p>
          <p>Kathmandu, Nepal</p>

          <br />

          <p>support@nucas.com</p>
          <p>Toll Free: 9810853076</p>
          <p>Office Hours: 10 AM to 6 PM (all 7 days)</p>
        </div>

        {/* Right Columns */}
        <div className={styles["footer-links"]}>
          {footerLinks.map((section) => (
            <div className={styles["footer-column"]} key={section.title}>
              <h4>{section.title}</h4>

              <ul>
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className={styles["footer-bottom"]}>
        <p>
          Copyright © 2023-2026 | Devanagari Media Pvt. Ltd.
          All rights reserved
        </p>

        <div className={styles["footer-policy"]}>
          <a href="/">User Policy</a>
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;