import "./NewsFromNucas.css";

import mainImg from "../../assets/images/news-main.png";

import side1 from "../../assets/images/news1.png";

import side2 from "../../assets/images/news2.png";

const NewsFromNucas = ({ title = "News from nucas" }) => {
  const news = [
    {
      title: "NEB Grade 11 and Grade 12 Examination Center published",
      image: mainImg,
      category: "Youtube",
      large: true,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      image: side1,
      category: "S145:Car(in robot form): will offfer",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      image: side2,
      category: "Alexis Pham - Followup session",
    },
  ];

  return (
    <section className="news-section">
      <div className="news-header">
        <h2>{title}</h2>
        <a href="/">See more news</a>
      </div>

      <div className="news-grid">
        {/* Left Featured Card */}
        <div className="news-featured">
          <img src={news[0].image} alt={news[0].title} />
          {/* <img src="../../assets/images/news-main.png" alt = {news[0].title} /> */}
          {/* <img src="/images/news-main.png" alt = {news[0].title} /> */}
          <div className="play-button">
            <span>▶</span>
          </div>

          <div className="news-overlay">
            <p className="news-category">{news[0].category}</p>
            <h3>{news[0].title}</h3>
          </div>
        </div>

        {/* Right Cards */}
        <div className="news-sidebar">
          {news.slice(1).map((item, index) => (
            <div className="news-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="news-card-overlay">
                <p>{item.category}</p>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFromNucas;
