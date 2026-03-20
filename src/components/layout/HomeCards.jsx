import "./HomeCards.css";
import { useState } from "react";
import  group17 from "../../assets/images/Group-17.png";
import icon3 from "../../assets/images/icon3.png";
import icon1 from "../../assets/images/icon1.png";
import chat from "../../assets/images/CHAT.png"

const cards = [
    "Admission for 2020",
    "Top Courses",
    "Career Option",
    "Discussion Hub"
]


const icons = [group17,icon3,icon1,chat]; 

export default function HomeCards(){
    const [startIndex,setStartIndex] = useState(0);
    const visibleCards = 4;

    const handlePrev = () => {
        setStartIndex((prev) => 
            prev === 0 ? cards.length - visibleCards : prev - 1
        );
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            prev >= cards.length - visibleCards ? 0 : prev + 1  
        );
    };


    return (
        <section className="home-cards">
            <div className = "home-cards-wrapper">
                
                {/* LEFT ARROW */}
                <button className = "arrow left" onClick = {handlePrev}>
                    &#8249;
                </button>

                {/* CARDS */}
                <div className="home-cards-container">
                    {cards
                        .slice(startIndex,startIndex + visibleCards)
                        .map((card,index) => (
                            <div className = "card" key={index}>
                                <div className="icon-wrapper">
                                {/* <img src={index === 0 ?  group17: icon3} className="card-icon"/> */}
                                <img src={icons[index]} className="card-icon" />
                                </div>
                                <div className = "card-text">
                                    {card}
                                    <span>Explore Now</span>
                                </div>
                            </div>
                        ))}
                </div>

                {/* RIGHT ARROW */}
                <button className="arrow right" onClick={handleNext}>
                    &#8250;
                </button>

            </div>
        </section>
    );
}
