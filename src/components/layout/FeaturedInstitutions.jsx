import "./FeaturedInstitutions.css";
import islington from "../../assets/images/islington.png";
import king from "../../assets/images/king.png";
import trichandra from "../../assets/images/trichandra.png";
import liverpool from "../../assets/images/liverpool.png";

const institutions = [
    {
        name:"Islington College",
        university:"NLICA Rating",
        type:"Private College",
        campus: "Kathmandu, Nepal",
        image:islington
    },
    {
        name:"King College",
        university:"NLICA Rating",
        type:"Private College",
        campus:"Kathmandu, Nepal",
        image:king
    },
    {
        name:"Trichandra Campus",
        university:"NLICA Rating",
        type:"Private College",
        campus:"Kathmandu, Nepal",
        image:trichandra
    },
    {
        name:"Liverpool College",
        university:"NLICA Rating",
        type:"Private College",
        campus:"Kathmandu, Nepal",
        image:liverpool
    },
];


export default function FeaturedInstitutions(){
    return (
        <section className="featured-institutions">
            <div className="featured-container">
                <div className = "featured-header">
                    <h2>Featured Institions</h2>
                    <p>Showing 12 Featured institutions</p>
                </div>

                <div className="featured-grid">
                    {institutions.map((item,index) =>(
                        <div className="institution-card" key={index}>
                            <img src={item.image} alt={item.name} className="institution-image" />

                            <div className="institution-body">
                                <h3>{item.name}</h3>
                                <p className="rating">{item.university} ★★★★☆</p>

                                <div className = "info-block">
                                    <span>INSTITUTE TYPE</span>
                                    <p>{item.type}</p>
                                </div>

                                <div className = "info-block">
                                    <span>CAMPUS</span>
                                    <p>{item.campus}</p>
                                </div>

                                <a href="/">View All Courses</a>
                            </div>   
                        </div>
                    ))}
                </div>

                <div className = "featured-dots">
                    <button>{"<"}</button>
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <button>{">"}</button>
                </div>
            </div>
        </section>
    );
}