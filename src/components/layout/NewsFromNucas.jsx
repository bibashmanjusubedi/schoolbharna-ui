import "./NewsFromNucas.css";

import mainImg from "../../assets/images/news-main.png";

import side1 from "../../assets/images/news1.png";

import side2 from "../../assets/images/news2.png";


const NewsFromNucas = () => {
    const news = [
        {
            title:
                "NEB Grade 11 and Grade 12 Examination Center published",
            image:mainImg,
            category:"Youtube",
            large:true,
        },
        {
            title:
                "Stars Cup: Indoor friendly will offer learning possibilities and connection...",
            image:side1,
            category: "Sports",
        },
        {
            title:
                "Alevel Parent–Followup session to enhance student's learning journey",
            image:side2,
            category:"Events"
        },
    ];

    return (
        <section className="news-section">
        
            <div className="news-header">
                <h2>News from nucas</h2>
                <a href="/">See more news</a>
            </div>

            <div className="news-grid">
                {/* Left Featured Card */}
                <div className = "news-featured">
                    <img src={news[0].image} alt = {news[0].title} />

                    <div className="play-button">
                        <span>▶</span>
                    </div>

                    <div className= "news-overlay">
                        <p className="news-category">{news[0].category}</p>
                        <h3>{news[0].title}</h3>
                    </div>
                </div>

                {/* Right Cards */}
                <div className="news-sidebar">
                    {news.slice(1).map((item,index) => (
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