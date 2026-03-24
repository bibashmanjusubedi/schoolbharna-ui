import "./FeaturedInstitutions.css";
import islington from "../../assets/images/islington.png";
import king from "../../assets/images/king.png";
import trichandra from "../../assets/images/trichandra.png";
import liverpool from "../../assets/images/liverpool.png";
import featuredGroup1699 from "../../assets/images/Group1699.png"
import foxHub from "../../assets/images/foxHub.png";
import kingLogo from "../../assets/images/kingLogo.png";
import islingtonLogo from "../../assets/images/islingtonLogo.png";
import liverpoolLogo from "../../assets/images/liverpoolLogo.png";

const institutions = [
    {
        name:"Islington College",
        university:"NLICA Rating",
        type:"Private College",
        campus: "Kathmandu, Nepal",
        image:islington,
        logo:foxHub,
        featured:featuredGroup1699
    },
    {
        name:"King College",
        university:"NLICA Rating",
        type:"Private College",
        campus:"Kathmandu, Nepal",
        image:king,
        logo:kingLogo,
        featured:featuredGroup1699,
    },
    {
        name:"Trichandra Campus",
        university:"NLICA Rating",
        type:"Private College",
        campus:"Kathmandu, Nepal",
        image:trichandra,
        logo:islingtonLogo,
        featured:featuredGroup1699
    },
    {
        name:"Liverpool College",
        university:"NLICA Rating",
        type:"Private College",
        campus:"Kathmandu, Nepal",
        image:liverpool,
        logo:liverpoolLogo,
        featured:featuredGroup1699
    },
];


export default function FeaturedInstitutions(){
    return (
        <section className="featured-institutions">
            <div className="featured-container">
                <div className = "featured-header">
                    <h2>Featured Institutions</h2>
                    <p>Showing 12 Featured institutions</p>
                </div>

                <div className="featured-grid">
                    {institutions.map((item,index) =>(
                        <div className="institution-card" key={index}>
                            <div className="institution-image-wrapper">
                                <img src={item.image} alt={item.name} className="institution-image" />

                                <img src={item.logo} className="institution-logo" />

                                <img src={item.featured} className="featured-badge" />
                            </div>
                            
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