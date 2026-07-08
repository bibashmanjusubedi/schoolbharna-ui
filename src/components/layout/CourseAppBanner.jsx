import "./CourseAppBanner.css";

import mobile from "../../assets/images/smartPhone2.png";
import appStore from "../../assets/images/appStore.png";
import googlePlay from "../../assets/images/googlePlayStore.png";

const CourseAppBanner = () => {
  return (
    <section className="course-banner">
      <div className="course-banner-container">
        <div className="banner-image">
          <div className="blue-circle"></div>
          <div className="green-circle"></div>

          <img src={mobile} alt="mobile" />
        </div>

        <div className="banner-content">
          <h2>Get matched to nucas courses</h2>

          <p>
                With the nucas app it's never been easier to find your future.
                Whether you can't decide on what to study or you're struggling to
                pick a perfect location, our app can help!
          </p>

          <div className="banner-buttons">
            <button className="learn-btn">
                Find Out More
            </button>

            <img
                src={appStore}
                alt="Download on App Store"
                className="store-btn"
            />
           
            <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="store-btn"
            />

          </div>
        </div>

      </div>
    </section>
  );
};


export default CourseAppBanner;
