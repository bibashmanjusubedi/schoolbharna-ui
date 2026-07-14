import "./Reviews.css";

import reviewerCenter from "../../assets/images/reviewerCenter.png";

import reviewerLeft from "../../assets/images/reviewerLeft.png";

import reviewerRight from "../../assets/images/reviewerRight.png";

import quoteIconLeft from "../../assets/images/quoteIconLeft.svg";

import leftArrow from "../../assets/images/ChevronLeft.svg";

import rightArrow from "../../assets/images/ChevronRight.svg";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2>Reviews</h2>
        <p className="reviews-subtitle">What our customers say...</p>
        <div className="reviews-wrapper">
          {/* Left Preview */}

          <div className="review-preview left-preview">
            {/* Quote Icon */}
            <img src={quoteIconLeft} className="quote-icon" />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>

            <div className="review-user">
              <img src={reviewerLeft} alt="Reviewer Left" />
              <div>
                <h4>Aditya Narayan</h4>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="review-card">
            {/* Quote Left */}
            <img src={quoteIconLeft} className="quote-left" />
            {/* Quote Right */}
            <img src={quoteIconLeft} className="quote-right" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>

            <div className="review-user">
              <img src={reviewerCenter} alt="Reviewer Center" />

              <div>
                <h4>Aditya Narayan</h4>
                <span>Liverpool College</span>
              </div>
            </div>
          </div>

          {/* Right Preview */}
          <div className="review-preview right-preview">
            {/*Quote icon */}
            {/* <img src={quoteIconLeft} className="quote-icon" /> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>

            <div className="review-user">
              <img src={reviewerRight} alt="Reviewer Right" />

              <div>
                <h4>Aditya Narayan</h4>
                <span>Liverpool college</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="review-navigation">
          <button className="nav-btn">
            {/* ChevronLeft */}
            <img src={leftArrow} alt="Previous" className="arrow-icon" />
          </button>
          {/* dots */}
          <div className="dots">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <button className="nav-btn">
            {/*ChevronRight*/}
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
