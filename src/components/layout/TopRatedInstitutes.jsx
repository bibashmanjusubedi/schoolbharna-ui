import { useEffect, useState } from "react";
import "./TopRatedInstitutes.css";
import ICLogo from "../../assets/images/ICLogo.png";
import AscolCampusLogo from "../../assets/images/AscolCampusLogo.png";
import KMCLogo from "../../assets/images/KMCLogo.png";
import BNKSLogo from "../../assets/images/BNKSLogo.png";

const institutes = [
  {
    id: 1,
    name: "Islington College",
    location: "Kamal Pokhari",
    rating: 3.9,
    reviews: 930,
    logo: ICLogo,
  },
  {
    id: 2,
    name: "Ascol Campus",
    location: "Kamal Pokhari",
    rating: 3.9,
    reviews: 930,
    logo: AscolCampusLogo,
  },
  {
    id: 3,
    name: "KMC",
    location: "Kamal Pokhrai",
    rating: 3.9,
    reviews: 930,
    logo: KMCLogo,
  },
  {
    id: 4,
    name: "Budhanilkantha School",
    location: "Kamal Pokhari",
    rating: 3.9,
    reviews: 930,
    logo: BNKSLogo,
  },
  {
    id: 5,
    name: "St. Xavier's College",
    location: "Maitighar",
    rating: 4.2,
    reviews: 780,
    logo: "/institutes/stxaviers.png",
  },
  {
    id: 6,
    name: "Kathmandu University",
    location: "Dhulikhel",
    rating: 4.4,
    reviews: 650,
    logo: "/institutes/ku.png",
  },
];

function getCardsPerView() {
  if (window.innerWidth <= 576) return 1;
  if (window.innerWidth <= 992) return 2;
  return 4;
}

function InstituteCard({ item }) {
  const initials = item.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="topRated-card">
      <div className="topRated-card-logoWrap">
        {item.logo ? (
          <img
            src={item.logo}
            alt={item.name}
            className="topRated-card-logo"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
        ) : null}

        <div
          className="top-rated-card-fallback"
          style={{ display: item.logo ? "none" : "flex" }}
        >
          {initials}
        </div>
      </div>

      <div className="topRated-card-divider" />

      <h3 className="topRated-card-title">{item.name}</h3>

      <p className="topRated-card-location">
        <span className="topRated-card-pin">
          <svg
            width="12"
            height="17"
            viewBox="0 0 12 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8379 4.01035C10.7805 3.79539 10.6641 3.56635 10.5779 3.36582C9.54687 0.888001 7.29409 0 5.47508 0C3.04001 0 0.358063 1.63282 0 4.99845V5.68607C0 5.71476 0.0098877 5.97254 0.023941 6.10148C0.224655 7.70546 1.49031 9.41013 2.43555 11.0141C3.4525 12.7326 4.50774 14.4231 5.55319 16.1129C6.19784 15.0102 6.84016 13.893 7.47012 12.8188C7.64182 12.5035 7.84111 12.1885 8.01299 11.8876C8.12755 11.6872 8.3464 11.4869 8.44639 11.3005C9.46329 9.43864 11.1001 7.56243 11.1001 5.71473V4.95567C11.1002 4.75536 10.8519 4.05355 10.8379 4.01035ZM5.51966 7.46218C4.80388 7.46218 4.02039 7.10427 3.63367 6.11583C3.57606 5.95849 3.5807 5.64317 3.5807 5.61429V5.17029C3.5807 3.91022 4.65062 3.3372 5.5814 3.3372C6.72729 3.3372 7.61353 4.25397 7.61353 5.39986C7.61353 6.54571 6.66555 7.46218 5.51966 7.46218Z"
              fill="#2E9ADF"
            />
          </svg>
        </span>
        {item.location}
      </p>

      <div className="topRated-card-rating">
        <span className="topRated-card-stars">★★★★☆</span>
        <span className="topRated-card-score">{item.rating}</span>
      </div>

      <p className="topRated-card-reviews">{item.reviews} Ratings</p>

      <a href="/" className="topRated-card-link">
        View All Courses
      </a>
    </div>
  );
}

export default function TopRatedInstitutes() {
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(institutes.length / cardsPerView);

  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(0);
    }
  }, [cardsPerView, currentPage, totalPages]);

  const startIndex = currentPage * cardsPerView;

  const visibleInstitutes = institutes.slice(
    startIndex,
    startIndex + cardsPerView
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="topRated-section">
      <div className="topRated-container">
        <div className="topRated-header">
          <h2>Top Rated Institutes of Nepal</h2>
          <p>
            Check out the facilities you can have when choosing your college
            with nucas.
          </p>
        </div>

        <div className="topRated-grid">
          {visibleInstitutes.map((item) => (
            <InstituteCard key={item.id} item={item} />
          ))}
        </div>

        <div className="topRated-controls">
          {/* <button
            className="topRated-navBtn"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ‹
          </button> */}

          <div className="topRated-dots">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`topRated-dot ${
                  currentPage === index ? "active" : ""
                }`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* <button
            className="topRated-navBtn"
            onClick={handleNext}
            aria-label="Next"
          >
            ›
          </button> */}

          <div className="featured-dots">
            <button>{"<"}</button>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
