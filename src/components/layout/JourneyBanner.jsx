import "./JourneyBanner.css";
import journeyToSuccessBanner from "../../assets/images/JourneyBanner.png";

function JourneyBanner(){
    return(
        <section className="journey-section">
            <div className="journey-wrapper">
                <img
                    src={journeyToSuccessBanner}
                    alt="Your journey to success in the UK starts here"
                    className="journey-banner"
                />
            </div>
        </section>
    );
}


export default JourneyBanner;