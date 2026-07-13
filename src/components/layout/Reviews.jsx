import "./Reviews.css";

import reviewerCenter from "../../assets/images/reviewerCenter.png";

import reviewerLeft from "../../assets/images/reviewerLeft.png";

import reviewerRight from "../../assets/images/reviewerRight.png";

import quoteIconLeft from "../../assets/images/quoteIconLeft.svg";

const Reviews = () => {
  return (
    <section>
      <div>
        <h2>Reviews</h2>
        <p>What our customers say...</p>

        <div>
          {/* Left Preview */}
          {/* Quote Icon */}
          <img src={quoteIconLeft} />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>

          <div>
            <img src={reviewerLeft} alt="Reviewer Left" />
            <div>
              <h4>Aditya Narayan</h4>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div>
          {/* Quote Left */}
          <img src={quoteIconLeft} />
          {/* Quote Right */}
          <img src={quoteIconLeft} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>

          <div>
            <img src={reviewerCenter} alt="Reviewer Center" />

            <div>
              <h4>Aditya Narayan</h4>
              <span>Liverpool College</span>
            </div>
          </div>
        </div>

        {/* Right Preview */}
        <div>
          {/*Quote icon */}
          <img src={quoteIconLeft} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>

          <div>
            <img src={reviewerRight} alt="Reviewer Right" />

            <div>
              <h4>Aditya Narayan</h4>
              <span>Liverpool college</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <button>{/* ChevronLeft */}</button>
          {/* dots */}
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <button>{/*ChevronRight*/}</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
