import "./SecuritySection.css";

const features = [
    {
        title:"Get Exam alerts",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod",
        icon: "📄",
        bg:"#f3e8ff"
    },
    {
        title: "eMarksheets/Result",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod",
        icon: "📘",
        bg: "#e0f2fe",
    },
    {
        title: "Write Review",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod",
        icon: "💲",
        bg: "#dcfce7",
    },
];


export default function SecuritySection(){
    return (
        <section className="security">
            <div className="security-container">
                <h2>More security and convenience for you to enter college</h2>
                <p className="subtitle">
                    Check out the facilities you can have when choosing your with nucas.
                </p>

                <div className="security-cards">
                    {features.map((item,index) => (
                        <div
                            key={index}
                            className = "security-card"
                            style = {{ background: item.bg }}
                        >
                            <div className = "icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href="#">Know more</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}