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
        <span className="topRated-card-pin">📍</span>
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
          <button
            className="topRated-navBtn"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ‹
          </button>

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

          <button
            className="topRated-navBtn"
            onClick={handleNext}
            aria-label="Next"
          >
            ›
          </button>

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
